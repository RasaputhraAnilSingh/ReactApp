import { useState } from "react";

function Form(){
   let [textValue,setTextValue] = useState("")

const saveTextValue = (e) =>{
    setTextValue(e.target.value);
    console.log(e.target.value);
}

    return(
        <div>
                <input type="text" onChange={saveTextValue}></input>
                <input type="text" value={textValue}></input>
                <Sample name = {textValue}/>
        </div>
    );
}

export default Form;