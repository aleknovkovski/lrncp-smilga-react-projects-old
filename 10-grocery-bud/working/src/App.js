import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [alerting, setAlerting] = useState(true)
    const [items, setItems] = useState([{id: 1, title: "a"}, {id: 2, title: "b"}, {id: 3, title: "c"}])
    const [value, setValue] = useState("")

    function handleClearing() {
        setItems([])
    }

    function handleChanges(id, action) {
        if(action==='delete'){
            const newItems = items.filter((item)=> {
                return item.id !== id
            })
            setItems(newItems)
        }
        if(action==='edit'){
            console.log('editing')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alerting ? <Alert/> : null}
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="e.g. eggs"
                        value={value}
                        onChange={(e)=> setValue(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">submit</button>
                </div>
            </form>
            <div className="grocery-container">
                <List
                    items={items}
                    handleClearing={handleClearing}
                    handleChanges={handleChanges}
                />
            </div>
        </section>
    )
}

export default App
