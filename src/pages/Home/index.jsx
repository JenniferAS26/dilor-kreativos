import CustomizeEvent from '../../components/CustomizeEvent'
import EventsGallery from '../../components/EventsGallery'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import OurMision from '../../components/OurMision'
import OurServices from '../../components/OurServices'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <main className='home__main'>
        <Hero />
        <CustomizeEvent />
        <EventsGallery />
        <OurServices />
        <OurMision />
      </main>
      <Footer />
    </div>
  )
}

export default Home
