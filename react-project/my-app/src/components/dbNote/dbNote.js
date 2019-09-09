import React from 'react'
import ReactDOM from 'react-dom'
import './dbNote.css';
import { Link } from 'react-router-dom'



export default class DBNote extends React.Component {
    render() {
        return(
        <div className="noteContainer">
            <header>
                <h1>Note title - Note date</h1>
                <Link to="/dbbook" className="btnBookNewNote">Back</Link>
            </header>
            <div className="noteContent">
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
        )
    }
}
