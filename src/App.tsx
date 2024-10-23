
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import Projects from "./components/Projects"
import Technology from "./components/Technology"

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection/>
        <Technology/>
        <Projects/>
      <Gallery />
        <Contact/>
      </main>
      <Footer />

    </>
  )
}

export default App
