const Child = ({ changeTextHandler, setMessage }) => {
  return (
    <>
      <h1>This is Child.jsx</h1>
      <button onClick={changeTextHandler}>Change the text!</button> &nbsp;
      <button onClick={() => setMessage('This is changed from Child.jsx')}>setMessage</button>
    </>
  )
}
export default Child