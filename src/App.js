import './App.scss';
import Swipper from './components/Swipper';
import ImageProvider from './contexts/imageContext';

function App() {
  return (
    <>
      <ImageProvider>
        <Swipper />
      </ImageProvider>
    </>
  );
}

export default App;
