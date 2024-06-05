import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar
        title="Connexy"
      />
      {/* <TextForm
        title="Text to Convert"

      /> */}
      <Aboutus />

    </>
  );
}

export default App;
