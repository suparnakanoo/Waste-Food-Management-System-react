// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contents from './components/Contents';
import ImageGallery from './images/ImageGallery';

function App() {
  return (
    <>
    <h1>Waste Food Management</h1>
    <Navbar title="" firstPage="Home" secondPage="Available Food" spFirstPart="Edible Food" spSecondPart="Waste Food" thirdPage="Log in"/>
    <ImageGallery/>
    <Contents/>
    </>
  );
}

export default App;
