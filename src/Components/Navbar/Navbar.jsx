import { useState } from 'react'
import './navbar.scss'

function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="BG Sales company logo"/>
          <span>BG Sales & Supplies</span>
        </a>
      </div>
      <div className="right">
        <div className="desktop-view">
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <a href="/service">Service</a>
          <a href="/gallary">Gallary</a>
          <a href="/vacancy">Vacancy</a>
          <button>Contact us</button>
        </div>
        

        {/** Mobile View */}
        <div className="menu-icon">
          <img src={open ? "/close.png" : "/menu.png"} alt="Mobile view icon" onClick={()=>setOpen(prev=>!prev)}/>
        </div>
        <div className={open ? 'menu active':'menu'} >
          <div className="links">
            <a href="/">Home</a>
            <a href="/product">Product</a>
            <a href="/service">Service</a>
            <a href="/gallary">Gallary</a>
            <a href="/vacancy">Vacancy</a>
          </div>
          <button>Contact us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar