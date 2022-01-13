import './App.css';
import { useState } from 'react';

function App() {
  const [filename, setFileName] = useState();
  const [url, setUrl] = useState();

  const handleNameChange = (e) => {
    setFileName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(filename);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleNameChange(e)} required={true} />
        <input type="submit" value="find"/>
      </form>
      {url && 
        <video width="500px">
          <source src={`http://localhost:5001/media/?name=${url}`} 
            crossOrigin='' type="video/mp4"/>
        </video>
      }
    </div>
  );
}

export default App;
