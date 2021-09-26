function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <label>Accuracy Level:</label>
        <input
          placeholder='Text here...'
          value={props.accuracy}
          onChange={(e) => props.setAccuracy(e.target.value)}/>
        <button type='submit' style={{ fontSize: 15, borderRadius: 300, padding: 2, margin: 5}} >Submit Rating</button>
      </form>
    </div>
  );
}

export default Form;
