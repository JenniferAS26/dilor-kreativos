import image from '../../assets/images/hero-3.png'
import './styles.sass'

const OurMision = () => {
  return (
    <section className='our-mision'>
      <img 
        src={image} 
        alt='photo' 
        className='our-mision__picture'
      />
      <div className='our-mision__content'>
        <h2 className='our-mision__content--title'>Nuestra misión</h2>
        <p className='our-mision__content--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eaque eligendi quas ipsa repellat minima, nisi aut facilis distinctio tempora tempore.</p>
      </div>
    </section>
  )
}

export default OurMision
