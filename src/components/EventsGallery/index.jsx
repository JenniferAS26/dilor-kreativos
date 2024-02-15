import { Carousel } from 'antd'
import cardImage from '../../assets/images/hero.png'
import cardImage2 from '../../assets/images/hero-2.png'
import cardImage3 from '../../assets/images/hero-3.png'
import './styles.sass'

const EventsGallery = () => {
  return (
    <section className='events-gallery'>
      <h3 className='events-gallery__title'>Eventos</h3>
      <div className='events-gallery__photo-container'>
        <Carousel autoplay>
          <img 
            className='events-gallery__photo-container--image'
            src={cardImage} 
            alt="" 
          />
          <img 
            className='events-gallery__photo-container--image'
            src={cardImage2} 
            alt="" 
          />
          <img 
            className='events-gallery__photo-container--image'
            src={cardImage3} 
            alt="" 
          />
        </Carousel>
      </div>
    </section>
  )
}

export default EventsGallery
