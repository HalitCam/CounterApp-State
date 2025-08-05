// Tek bir onChange function i ve tek bir State ile tekrar Coding

import React, {useState} from 'react';

const InputExample2=()=>{
        const [form,setForm] = useState({name:"Halit", surName:"Cam"});
    
    const onChangeForm=(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }
  


    return (
        <div>


            Name : <br/>
            <input name='name' value={form.name} onChange={onChangeForm}/>
            
            <br/>

            Surname : <br/>
            <input name='surName' value={form.surName} onChange={onChangeForm}/>
             <br/> <br/>    
             {form.name} {form.surName}
        </div>
    );
}

export default InputExample2;
