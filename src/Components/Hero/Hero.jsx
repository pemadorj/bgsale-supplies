import './hero.scss'
import { FaArrowRight } from "react-icons/fa6";

function Hero(){
  return (
    <div className='hero'>
        <div className="text-section">
            <h1>Simplifying your hardware infrastructure management</h1>
            <p>Are you struggling to maintain accurate documentation 
                for your computer and hardware networking infrastructure? 
                Let us take the hassle out of network documentation 
                with our comprehensive services tailored to your needs.
            </p>
        </div>
        <a  href="/service" className='btn'>Explore more <FaArrowRight className='right-arrow' /></a>
    </div>
  )
}

export default Hero