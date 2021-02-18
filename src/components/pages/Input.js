import React from "react";

function Input(props) {
  return <>
  <label  >Question:
  <input style={{display:"block"}} className="form-control" classtype="text" className="question-input" placeholder="input question ??" onChange={(event)=>props.setquestion(event.target.value)}/></label></>;
}
export default Input;
