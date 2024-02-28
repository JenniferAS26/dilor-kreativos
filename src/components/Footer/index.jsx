import { GrInstagram } from 'react-icons/gr'
import { MdWhatsapp, MdOutlineMail  } from 'react-icons/md'
import './styles.sass'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__info'>
        <h2 className='footer__info--title'>Contáctanos</h2>
        <div className='footer__info--bar'></div>
        <span className='footer__info--text flex items-center gap-3'>
          <span><MdWhatsapp  /></span> 3124159333
        </span>
        <span className='footer__info--text flex items-center gap-3'>
          <span><MdOutlineMail  /></span> example@mail.com
        </span>
      </section>
      <section className='footer__info'>
        <h2 className='footer__info--title'>Siguenos</h2>
        <div className='footer__info--bar'></div>
        <a 
          className='flex items-center gap-3'
          href='https://www.instagram.com/eventos_dilor_kreativos/'
          target='blank'
        >
          <span className='footer__info--text'><GrInstagram /></span>
          <span className='footer__info--text'>@eventos_dilor_kreativos</span>
        </a>
      </section>
    </footer>
  )
}

export default Footer
