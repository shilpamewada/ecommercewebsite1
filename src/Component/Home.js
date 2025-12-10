
import Products from './Products';
import Contact from './Contact';
import Images from './Images';
import bgjpg from './bg.jpg';

function Home({ addToCart }) {
  return (
    <div className='hero'>
      <div className="card text-bg-dark text-white border-0">
        <img src={bgjpg} className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title  display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          </div>
        </div>
      </div>

      <Products addToCart={addToCart} /> {/* Pass addToCart as a prop to Products */}
      <Images addToCart={addToCart} />
      <Contact />


    </div>
  );
}

export default Home;
