import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import Testimonials from '../components/Testimonial'
import About from '../components/About'
import Details from '../components/Details'
import Info from '../components/Info'
import ContactForm from '../components/ConctactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
          <Header />
          <Hero />
        </div>
        <Details />
        <About />
        <Info />
        <ContactForm />
        <Footer />
        {/*<Lead />*/}
        {/*<Testimonials />*/}
    </div>
  )
}
