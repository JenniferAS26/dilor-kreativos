import { GrInstagram } from 'react-icons/gr'
import './styles.sass'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__info'>
        <h2 className='footer__info--title'>Contáctanos</h2>
        <div className='footer__info--bar'></div>
        <span className='footer__info--text'>Celular: 3124159333</span>
        <span className='footer__info--text'>Email: example@mail.com</span>
      </section>
      <section className='footer__info'>
        <h2 className='footer__info--title'>Siguenos</h2>
        <div className='footer__info--bar'></div>
        <div className='flex items-center gap-3'>
          <span className='footer__info--text'><GrInstagram /></span>
          <span className='footer__info--text'>@eventos_dilor_kreativos</span>
        </div>
      </section>
    </footer>
  )
}

export default Footer
