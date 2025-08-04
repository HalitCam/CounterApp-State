import {useState} from 'react';

const InputExample = () => {
    const [name, setName] = useState('Halit')
    const [surname, setSurname] = useState("Cam")
    return (
        
        <div>
            Please enter a name <br/>
          <input value={name} onChange={(event)=>setName(event.target.value)}/>
          <br/>
          <br/>
            Please enter a surname <br/>
          <input value={surname} onChange={(event)=>setSurname(event.target.value)}/>
          <br/>

        {name} {surname}
        </div>
    );
}

export default InputExample;
