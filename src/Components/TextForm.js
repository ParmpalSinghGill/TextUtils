import {useState} from "react"

export default function TextForm(props){
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success");
  }
  const handleChange=(event)=>{
    setText(event.target.value)
  }
  const [text,setText] = useState("Enter the text");
  return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" id="mybox" rows="8" onChange={handleChange} value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
        </div>
        <div className="container">
            <p> {text.split(" ").length} Words {text.length} character </p>
        </div>
        </>
      );
}