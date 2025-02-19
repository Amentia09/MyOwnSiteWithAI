import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Task {
  id: string;
  text: string;
}

const Skills: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submissions, setSubmissions] = useState<{ name: string; email: string }[]>([]);
  const [calc, setCalc] = useState({ num1: '', num2: '', operation: '+', result: '' });
  const [todoItems, setTodoItems] = useState<Task[]>([
    { id: '1', text: 'Learn React' },
    { id: '2', text: 'Master TypeScript' }
  ]);
  const [completedItems, setCompletedItems] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({ name: '', email: '' });
  };

  const calculateResult = () => {
    const n1 = parseFloat(calc.num1);
    const n2 = parseFloat(calc.num2);
    let result = '';

    switch (calc.operation) {
      case '+':
        result = (n1 + n2).toString();
        break;
      case '-':
        result = (n1 - n2).toString();
        break;
      case '*':
        result = (n1 * n2).toString();
        break;
      case '/':
        result = (n1 / n2).toString();
        break;
    }

    setCalc({ ...calc, result });
  };

  const handleDragStart = (e: React.DragEvent, id: string, source: 'todo' | 'completed') => {
    e.dataTransfer.setData('taskId', id);
    e.dataTransfer.setData('source', source);
  };

  const handleDrop = (e: React.DragEvent, target: 'todo' | 'completed') => {
    e.preventDefault();
    const id = e.dataTransfer.getData('taskId');
    const source = e.dataTransfer.getData('source') as 'todo' | 'completed';

    if (source === target) return;

    const sourceList = source === 'todo' ? todoItems : completedItems;
    const task = sourceList.find(item => item.id === id);

    if (task) {
      if (source === 'todo') {
        setTodoItems(todoItems.filter(item => item.id !== id));
        setCompletedItems([...completedItems, task]);
      } else {
        setCompletedItems(completedItems.filter(item => item.id !== id));
        setTodoItems([...todoItems, task]);
      }
    }
  };

  const slides = [
    <form key="form" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Submissions:</h3>
        <ul className="space-y-2">
          {submissions.map((sub, index) => (
            <li key={index} className="bg-gray-50 p-2 rounded">
              {sub.name} - {sub.email}
            </li>
          ))}
        </ul>
      </div>
    </form>,

    <div key="calculator" className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          value={calc.num1}
          onChange={(e) => setCalc({ ...calc, num1: e.target.value })}
          className="p-2 border rounded"
          placeholder="Number 1"
        />
        <input
          type="number"
          value={calc.num2}
          onChange={(e) => setCalc({ ...calc, num2: e.target.value })}
          className="p-2 border rounded"
          placeholder="Number 2"
        />
      </div>
      <select
        value={calc.operation}
        onChange={(e) => setCalc({ ...calc, operation: e.target.value })}
        className="w-full p-2 border rounded"
      >
        <option value="+">Add</option>
        <option value="-">Subtract</option>
        <option value="*">Multiply</option>
        <option value="/">Divide</option>
      </select>
      <button
        onClick={calculateResult}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Calculate
      </button>
      {calc.result && (
        <div className="text-center text-xl font-bold">
          Result: {calc.result}
        </div>
      )}
    </div>,

    <div key="dragdrop" className="grid grid-cols-2 gap-8">
      <div
        className="border-2 border-dashed border-gray-300 p-4 rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'todo')}
      >
        <h3 className="font-bold mb-4">To Do</h3>
        {todoItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id, 'todo')}
            className="bg-white p-3 mb-2 rounded shadow cursor-move"
          >
            {item.text}
          </div>
        ))}
      </div>
      <div
        className="border-2 border-dashed border-gray-300 p-4 rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'completed')}
      >
        <h3 className="font-bold mb-4">Completed</h3>
        {completedItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id, 'completed')}
            className="bg-green-50 p-3 mb-2 rounded shadow cursor-move"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Interactive Skills Showcase</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6 flex justify-center space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {slides[currentSlide]}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;