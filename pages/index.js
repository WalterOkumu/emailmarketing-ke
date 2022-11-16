import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import Testimonials from '../components/Testimonial'
import About from '../components/About'
import Info from '../components/Info'

export default function Home() {
  return (
    <div className='pb-10'>
        <div className='pt-8 md:h-screen px-10 bg-[#181818]'>
          <Header />
          <Hero />
        </div>
        <About />
        <Info />
        {/*<Lead />*/}
        {/*<Testimonials />*/}
    </div>
  )
}
