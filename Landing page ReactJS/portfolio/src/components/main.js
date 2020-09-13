import React from 'react';
import LandingPage from './landingpage.js';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Resume from './resume';
import Project from './project'

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
  </Switch>
)

export default Main;
