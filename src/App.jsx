import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Testimonials from './Pages/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <div className="header"><Navbar /></div>
      <div className="main-body">
        <Home />
        <About />
        <Services />
        <Testimonials />
      </div>
      <div className="footer"><Footer /></div>
    </div>
  )
}

export default App
