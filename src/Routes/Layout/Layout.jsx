
import Navbar from '../../Components/Navbar/Navbar'
import './layout.scss'
import { Outlet } from 'react-router-dom'

function Layout(){
  return (
    /** Main Layout */
    <div className='layout'> 
        {/* Content section  */}
        <div className='contents'>
            {/* Navbar section  */}
            <Navbar/>
             {/* All website content will be here  */}
            <Outlet/> 
        </div>
    </div>
  )
}

export default Layout