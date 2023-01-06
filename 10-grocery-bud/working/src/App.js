import React, {useState, useEffect, useRef} from 'react'
import List from './List'
import Alert from './Alert'
import {v4 as uuidv4 } from 'uuid'

function App() {
    const inputReference = useRef(null);

    const [alert, setAlert] = useState("")
    const [items, setItems] = useState([{id: 1, title: "a"}, {id: 2, title: "b"}, {id: 3, title: "c"}])
    const [value, setValue] = useState("")
    const [editing, setEditing] = useState("")

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            setAlert("")
        }, 3000)

        return () => clearTimeout(timeout)

    }, [alert])

    useEffect(()=> {
        inputReference.current.focus();
    },[editing])

    function handleClearing() {
        setItems([])
    }

    function handleChanges(id, action) {
        if(action==='delete'){
            const newItems = items.filter((item)=> {
                return item.id !== id
            })
            setItems(newItems)
            setAlert("delete")
        }
        if(action==='edit'){
            const item = items.find((item)=> {
                return item.id === id
            })
            setEditing(item.id)
            setValue(item.title)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(editing) {
            const item = items.find((item)=> {
                return item.id === editing
            })
            const index = items.indexOf(item)
            const updatedItem = {...item, title: value}
            const newItems = [...items]
            newItems[index] = updatedItem
            setItems(newItems)
            setAlert("edit")
            setEditing("")
        } else {
            const newItem = {id: uuidv4(), title: value}
            setItems([...items, newItem])
            setAlert("add")
        }
        setValue("")
    }

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert ? <Alert type={alert}/> : null}
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="e.g. eggs"
                        value={value}
                        onChange={(e)=> setValue(e.target.value)}
                        ref={inputReference}
                    />
                    <button type="submit" className="submit-btn">
                        {editing ? "edit" : "submit"}
                    </button>
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
