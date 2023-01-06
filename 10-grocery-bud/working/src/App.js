import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [alerting, setAlerting] = useState(true)

    return (
        <section className="section-center">
            <form className="grocery-form">
                {alerting ? <Alert/> : null}
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input type="text" className="grocery" placeholder="e.g. eggs"/>
                    <button type="submit" className="submit-btn">submit</button>
                </div>
            </form>
            <div className="grocery-container">
                <List items={["a", "b", "c"]}/>
            </div>
        </section>
    )
}

export default App
