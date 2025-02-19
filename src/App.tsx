import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Technologies from './components/Technologies';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'My Skills':
        return <Skills />;
      case 'Technologies Used':
        return <Technologies />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;