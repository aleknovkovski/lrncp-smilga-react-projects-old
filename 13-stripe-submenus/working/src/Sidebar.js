import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
      <div className="sidebar-wrapper show">
          <aside className='sidebar'>
              <button className='close-btn'>
                  <FaTimes />
              </button>
          </aside>
      </div>
  )
}

export default Sidebar
