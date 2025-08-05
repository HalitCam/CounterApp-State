// Tek bir onChange function i ve tek bir State ile tekrar Coding

import React, {useState} from 'react';

const InputExample2 = () => {
    const [dataPerson,setData] = useState({name:"Halit", surName:"Cam"})
    // const onChangeName = (event)=>setData(event.target.dataPerson.name.value)
    // const onChangeSurname = (event)=>setData(event.target.dataPerson.surName.value)
    const handleChange = (event)=>{
        const{name,value}=event.target;
        setData(prevData => ({
            ...prevData,[name]:value
        }))
    }

    return (
        <div>
            Name : <br/>
            <input name='name' value={dataPerson.name} onChange={onChangeName}/>
            
            <br/>

            Surname : <br/>
            <input name='surName' value={dataPerson.surName} onChange={onChangeSurname}/>
            
        </div>
    );
}

export default InputExample2;
