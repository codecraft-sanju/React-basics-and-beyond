function ClickButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>click</button>;
}

export default ClickButton;
