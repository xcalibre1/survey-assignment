import React, { Component,useState } from 'react'
import Options from "./Options.js"
import Input from "./Input.js"
import {Link} from "react-router-dom"
function CreateSurvey(props){
    
    const [btn, setbtn] = useState(false);
    const [slct, setslct] = useState(false);
    const [val, setval] = useState("do select");
    const [array, setarray] = useState([{ text: "" }]);
    const [surveyList,setsurveyList]=useState([])
    const [question,setquestion]=useState("")
    const handleArray = (event) => {
      const arr = array.slice();
      arr.push({ text: "" });
      console.log(array);
      setarray(arr);
    };
    const change = (event, id) => {
      let text = event.target.value;
      let arrayCopy = [...array];
      arrayCopy[id].text = text;
      setarray(arrayCopy);
    };
    const handleNegative = (event, id) => {
      const arr = array.slice();
      const filteredArray = arr.filter((item, index) => index != id);
      setarray(filteredArray);
    };
    const addobj=()=>{
        let obj={
            questiontype:val,
            question:question,
            answers:array,
        }
        setslct(false);
        let copysurveyList=[...surveyList]
        copysurveyList.push(obj)
        setsurveyList(copysurveyList);
        props.setfinalarray(surveyList);
        setval("do-select");
        setarray([{ text: "" }]);
        setquestion("");
    }
    console.log("survey list ",surveyList)
    return (
      <>
      
  
          <select
            value={val}
            id="options"
            className="options"
            style={{display:"block",margin:"auto"}}
            onChange={(event) => {
              setslct(true);
              setval(event.target.value);
              if(event.target.value==="single-select")
                setarray([{text:"Yes"},{text:"No"}])
            }}
          >
            {" "}
            <option value="do-select">do select</option>
            <option value="multi-select">multi-select</option>
            <option value="single-select">single-select</option>
          </select>
       
        {slct && (
          <>
            <Input setquestion={setquestion}/>
            {val == "multi-select" ? (
              array.map((item, index) => (
                <Options
                  handleNegative={handleNegative}
                  id={index}
                  key={index}
                  array={array}
                  handleArray={handleArray}
                  change={change}
                />
              ))
            ) : (
              <>
                <Options  id={0} handleNegative={null} handleArray={handleArray} change={change} array={array} />
                <Options id={1} handleNegative={null} handleArray={handleArray} change={change} array={array} />
              </>
            )}
          </>
        )}
        {(array.length==4 || val==="single-select") &&<>
            <button className="btn btn-danger btn-lg m-4 p-2" onClick={addobj}>Add Question</button>
            <Link to="/createSurvey/publish" ><button className="btn btn-danger btn-lg m-4 p-2" onClick={addobj}>Publish</button></Link>
        </>}
      </>
    );
      
}
export default CreateSurvey;