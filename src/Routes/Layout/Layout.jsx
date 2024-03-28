import './layout.scss'
import { Outlet } from 'react-router-dom'

function Layout(){
  return (
    /** Main Layout */
    <div className='layout'>
        {/* Navbar section  */}
        <div className='navbar'>

        </div>
        {/* Content section  */}
        <div className='content'>
             {/* All website content will be here  */}
            <Outlet/> 
        </div>
        {/* Footer section  */}
        <div className='footer'>

        </div>
        
    </div>
  )
}

export default Layout