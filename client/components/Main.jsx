import React from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'
import Me from './Me'
import Projects from './Projects'
import You from './You'

class Main extends React.Component {

    render() {
        return (<div>
                <h1 className="title has-text-info">This is the Main component</h1>
                <Me />
                <Projects />
                <You />
            </div>
        )
    }
}

export default Main