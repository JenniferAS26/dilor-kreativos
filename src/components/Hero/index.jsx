import heroImage from '../../assets/images/hero.png'
import heroImage2 from '../../assets/images/hero-2.png'
import heroImage3 from '../../assets/images/hero-3.png'
import { Carousel } from 'antd'
import './styles.sass'

const Hero = () => {
  return (
    <section className='hero'>
      <Carousel autoplay>
        <img
          className='hero__image'
          src={heroImage}
          alt='description'
        />
        <img
          className='hero__image'
          src={heroImage2}
          alt='description'
        />
        <img
          className='hero__image'
          src={heroImage3}
          alt='description'
        />
      </Carousel>
      <div className='hero__title-container'>
        <h1 className='hero__title-container__title'>Plasmamos emociones en recuerdos para toda la vida</h1>
      </div>
    </section>
  )
}

export default Hero
