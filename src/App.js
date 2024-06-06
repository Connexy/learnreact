import { useState } from 'react';
import './App.css';
// import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar
        title="Connexy"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm
        title="Text to Convert"
        mode={mode}

      />
      {/* <Aboutus /> */}

    </>
  );
}

export default App;
