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
import Thankyou from './components/pages/Thankyou'
import Links from './Links'
import {useState} from "react"
function App() {
  
  return (
    <Router>
      <div className='App'>
        
        <Switch>
          <Route path="/createsurvey" exact>
            <Header />
            <CreateSurvey  />
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
            <TakeSurvey />
          </Route>
          <Route path="/takesurvey/Thankyou" exact>
            <Header />
            <Thankyou />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;