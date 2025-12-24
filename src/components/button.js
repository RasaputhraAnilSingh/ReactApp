function Button({ name, eventName }) {
  return (
    <button onClick={eventName}>
      {name}
    </button>
  );
}

export default Button;
