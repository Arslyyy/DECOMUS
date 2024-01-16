import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './HD-wallpaper-anime-landscape-falling-stars-sunset-clouds-anime-girl-scenic-anime.jpg';
// import gambar1 from './foto/asus.jpg';
import gambar2 from '../foto/HD-wallpaper-anime-landscape-falling-stars-sunset-clouds-anime-girl-scenic-anime.jpg';
import gambar3 from '../foto/girl_kitten_flower_141058_1366x768.jpg';
import gambar4 from '../foto/wallpapersden.com_city-4k-anime-art_2560x1600.jpg';
import '../App.css';

function Carousels() {
  return (
    <div className='atas'>

    <Carousel>
      <Carousel.Item>
        <img src={gambar2} className='carousel-image' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={gambar3} className='carousel-image'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={gambar4} className='carousel-image'     />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;