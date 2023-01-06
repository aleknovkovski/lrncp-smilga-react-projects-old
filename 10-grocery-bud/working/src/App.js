import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'
import {v4 as uuidv4 } from 'uuid'

function App() {
    const [alert, setAlert] = useState("")
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
        const newItem = {id: uuidv4(), title: value}
        setItems([...items, newItem])
        setValue("")
    }

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert ? <Alert/> : null}
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
