import React from 'react';

import {LoginPage} from "./login-page/login-page";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {AdminPanel} from "./AdminPanel/admin-panel";
import {RegisterPanel} from "./RegisterPanel/register-js";
import {NavBar} from "./NavBar/navbar"
import {MyCourses} from "./Courses/courses";
import {Course} from "./Course/course";
import {StartPage} from "./StartPage/start-page";
import {Questions} from "./Questions/Questions";


function App(props) {
  return (
      <BrowserRouter>
          <div className="maindiv">
              <Switch>
                  <Route path={'/admin'} component={AdminPanel}/>
                  <Route path={'/'} exact component={LoginPage}/>
                  <Route path={'/register'} component={RegisterPanel}/>
                  <Route exact path={'/courses'} render={()=><MyCourses coursesElements={props.coursesElements}/>}/>
                  <Route exact path={'/courses/0'} render={()=><Course tests={props.tests} />}/>
                  <Route exact path={'/courses/0/start'} component = {StartPage}/>
                  <Route exact path={'/courses/0/questions'} render={() => <Questions questions={props.questions}/>}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
