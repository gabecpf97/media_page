import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <video width="500px">
        <source src='http://localhost:5001/media/?name=652333414.mp4' 
          crossOrigin='' type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
