import './hero.scss'
import { FaArrowRight } from "react-icons/fa6";

function Hero(){
  return (
    <div className='hero'>
        <div className="text-section">
            <h1>Simplifying Your Hardware Infrastructure Management</h1>
            <p>Struggling with network documentation?</p>
            <p> Let us handle it hassle-free with tailored services.</p>
        </div>
        <a  href="/service" className='btn'>Explore more <FaArrowRight className='right-arrow' /></a>
    </div>
  )
}

export default Hero