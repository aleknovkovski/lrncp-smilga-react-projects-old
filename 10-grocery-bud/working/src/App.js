import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [alerting, setAlerting] = useState(true)
    const [items, setItems] = useState(["a", "b", "c"])

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
                <List items={items}/>
            </div>
        </section>
    )
}

export default App
