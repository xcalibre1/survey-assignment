import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import CreateSurvey from './components/pages/CreateSurvey'
import TakeSurvey from './components/pages/TakeSurvey'
import Links from './Links'
import {useState} from "react"
function App() {
  const [finalarray,setfinalarray]=useState([])
  console.log("final array ",finalarray)
  return (
    <Router>
      <div className='App'>
        
        <Switch>
          <Route path="/createsurvey" exact>
            <Header />
            <CreateSurvey setfinalarray={setfinalarray} />
          </Route>
          <Route path="/takesurvey" exact>
            <Header />
            <TakeSurvey />
          </Route>
          <Route path="/" exact>
            <Header />
            <Links />
          </Route>
          <Route path="/createSurvey/publish" exact>
            <Header />
            <TakeSurvey surveyList={finalarray}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;