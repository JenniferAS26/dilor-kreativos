import { TiThMenu } from 'react-icons/ti'
import { Drawer } from 'antd'
import './styles.sass'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (<>
    <nav className='header'>
      <div className='header__logo-section'>
        <h2 className='header__logo-section--name'>Dilor Kreativos</h2>
      </div>
      <button 
        className='header__menu'
        onClick={showDrawer}
      >
        <TiThMenu />
      </button>
      <Drawer onClose={onClose} open={open}>
        <div className='drawer-wrapper'>
          <div className='logo-container'></div>
          <section className='options'>
            <Link className='options__item'>Acerca de nosotros</Link>
            <Link className='options__item'>Nuestros eventos</Link>
            <Link className='options__item'>Nuestros servicios</Link>
            <Link className='options__item'>Contacto</Link>
          </section>
          <section className='follow'>
            <h2 className='follow__title'>SIGUENOS</h2>
            <div className='follow__bar'></div>
            <Link className='follow__text'>instagram</Link>
          </section>
        </div>
      </Drawer>
    </nav>
  </>)
}

export default Header
