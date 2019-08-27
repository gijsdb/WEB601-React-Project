import React from 'react'
import ReactDOM from 'react-dom'
import './dbLanding.css';




const DBLanding = () => { 
    return (
        <div>
            <div className="dbLandingContainer">
                <header>
                    <h1>Welcome to your dashboard $username</h1>
                </header>
                <section>
                    <h2>Quick navigation</h2>
                    <ul>
                        <li>- Read books</li>
                        <li>- Add books</li>
                    </ul>
                </section>
                <section>
                    <h2>Features</h2>
                    <ul>
                        <li>- Catalog your books</li>
                        <li>- Create, save and edit notes</li>
                    </ul>
                </section>
                <section>
                    <h2>Recent notes</h2>
                    <ul>
                        <li>- note 1</li>
                        <li>- note 2</li>
                        <li>- note 3</li>
                        <li>- note 4</li>
                    </ul>
                </section>
            </div>
        </div>
      )
    }
export default DBLanding;