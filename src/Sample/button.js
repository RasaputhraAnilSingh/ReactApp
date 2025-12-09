function Button({name,event}){
    return(
        <div>
            <button onClick={event}>{name}</button>
        </div>
    );
}

export default Button