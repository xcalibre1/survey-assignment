import React from 'react'

function TakeSurvey(props){
console.log("tak survey props",props.surveyList,"answers print",props.surveyList.answers,"questions print",props.surveyList.question)

  return (
    <form>
     {props.surveyList?.map((item,index)=>(
       <div>
        {item?.questiontype==='multi-select'?
         <React.Fragment key={index}>
         <h3>{item?.question}</h3>
         <div>{item?.answers.map((itm,idx)=>(
           <React.Fragment>
            <label  key={idx}>
               <input
                 name={itm}
                 type="checkbox"/>
               {itm}
           </label>
           <br></br>
           </React.Fragment>
        
         ))}</div>
        </React.Fragment>:
        <React.Fragment key={index}>
        <h3>{item?.question}</h3>
        <div>{item?.answers.map((itm,idx)=>(
          <React.Fragment>
           <label  key={idx}>
              <input
                name={itm}
                type="radio"/>
              {itm}
          </label>
          </React.Fragment>
       
        ))}</div>
       </React.Fragment>}
       </div>
     ))}

     <button>Confirm</button>

    </form>
  )
}

// TakeSurvey.defaultProps={
//   surveyList:[
//     {
//       questiontype:'multiple-choice',
//       question:'Which of the following app do you have in your phone',
//       answers:['whatsapp','facebook','instagram','tinder']
//     },
//     {
//       questiontype:'single-choice',
//       question:'are you using twitter ?',
//       answers:['yes','no']
//     }
//   ]

// }

export default TakeSurvey;