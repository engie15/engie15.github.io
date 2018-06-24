import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Main from './Main'
import Me from './Me'
import Projects from './Projects'
import You from './You'

const App = () => (
    <Router>
        <div>
            <Route exact path ='/' component={Main} />
            <Route path="/main" component={Main} />
            <Route path="/me" component={Me} />
            <Route path="/projects" component={Projects} />
            <Route path="/you" component={You} />         
        </div>
    </Router>
)

export default App