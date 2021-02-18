import React from 'react'
import "./createSurvey.css"
import {Link} from "react-router-dom"
function TakeSurvey(props){


  return (
    <form>
     {props.surveyList.map((item,index)=>(
       <div key={index}>
        {item.questionType==='multi-select'?
         <React.Fragment>
         <p>{item.question}</p>
         <div className="checkbox1">{item.answer.map((itm,idx)=>(
           <React.Fragment>
            <label  key={idx}>
               <input
                 name={itm.text}
                 type="checkbox"/>
               {itm.text}
           </label>
           <br></br>
           </React.Fragment>
        
         ))}</div>
        </React.Fragment>:
        <React.Fragment>
        <p>{item.question}</p>
        <div className="checkbox2">{item.answer.map((itm,idx)=>(
          <React.Fragment>
           <label  key={idx}>
              <input
                name={itm.text}
                type="radio"/>
              {itm.text}
          </label>
          </React.Fragment>
       
        ))}</div>
       </React.Fragment>}
       </div>
     ))}
    <div className="buttondiv">
    <Link to="/takesurvey/Thankyou">
     <button className="btn btn-danger m-3 ">Confirm</button>
     </Link>
      </div>
    </form>
  )
}

TakeSurvey.defaultProps={
  surveyList:[
    {
      questionType:'multi-select',
      question:'which year india got freedom',
      answer:[{text:'1967'},{text:'1998'},{text:'1958'},{text:'1947'}]
    },
    {
      questionType:'single-choice',
      question:'are u Ok ?',
      answer:[{text:'yes'},{text:'no'}]
    }
  ]
}

export default TakeSurvey;