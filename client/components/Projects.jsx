import React from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'


class Projects extends React.Component {

    render() {
        return (<div>
                <h1>This is the Projects component</h1>
                <a href="./blog/versionOne.html">Where my journey began</a>
            </div>
        )

    }
}

export default Projects