// Tek bir onChange function i ve tek bir State ile tekrar Coding

import React, {useState} from 'react';

const InputExample2 = () => {
    const [dataPerson,setData] = useState({name:"Halit", surName:"Cam"})
    const onChangeName = (event)=>setData(event.target.dataPerson.name)
    const onChangeSurname = (event)=>setData(event.target.dataPerson.surName)

    return (
        <div>
            Name : <br/>
            <input value={dataPerson.name} onChange={onChangeName}/>
            
            <br/>

            Surname : <br/>
            <input value={dataPerson.surName} onChange={onChangeSurname}/>
            
        </div>
    );
}

export default InputExample2;
