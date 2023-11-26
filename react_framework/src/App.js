import { useRef, useState } from 'react'

function App() {

const inputRef = useRef(null)

const [name, setName] = useState('Hello World');

const handleClick = () => {
  setName(inputRef.current.value)
}

  return (
    <div className="App">
    <input type="text"
          placeholder='Message to Display'
          ref={inputRef}/>
    <button  class="btn-primary" onClick={handleClick}>Display Message</button>
    <ul>
    <h2>
      {name}
    </h2>
    </ul>
    
    </div>
  );
}

export default App;
