import React from 'react';

import {LoginPage} from "./login-page/login-page";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {AdminPanel} from "./AdminPanel/admin-panel";
import {RegisterPanel} from "./RegisterPanel/register-js";
import {NavBar} from "./NavBar/navbar"
import {MyCourses} from "./Courses/courses";
import {Course} from "./Course/course";
function App() {
  return (
      <BrowserRouter>
          <div className="maindiv">
              <Switch>
                  <Route path={'/admin'} component={AdminPanel}/>
                  <Route path={'/'} exact component={LoginPage}/>
                  <Route path={'/register'} component={RegisterPanel}/>
                  <Route path={'/courses'} exact component={MyCourses}/>
                  <Route path={'/courses/1'} exact component={Course}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
