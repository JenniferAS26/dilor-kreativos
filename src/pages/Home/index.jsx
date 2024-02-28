import CustomizeEvent from '../../components/CustomizeEvent'
import EventsGallery from '../../components/EventsGallery'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
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
      </main>
    </div>
  )
}

export default Home
