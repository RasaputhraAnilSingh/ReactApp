import Button from "./button";
  function handleClick(a) {
    if(a !== undefined)
        alert(a);
    }
function sample(props){
    return (
        <div>
            <Button name="Click me" event={() => handleClick(props.name)}/>
        </div>
    );
}

export default sample