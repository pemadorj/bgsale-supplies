import './home.scss'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'

function Home(){

  return (
    <div className='home'>
      <Hero/>
      <div className="TEST">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae mollitia repudiandae modi, rem dolor non assumenda iusto quisquam provident cumque. Ab nostrum exercitationem, beatae repellat quae animi optio hic!</p>
      </div>
      <Footer/>

    </div>
  );
}

export default Home;
