import './App.css'
import {useState} from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Testimonials from './Pages/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'

function App() {
  const [loader, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  useEffect(()=>{
    var allElements = document.querySelectorAll('*')

// Loop through each element and set styles
    for (var i = 0; i < allElements.length; i++) {
    // Set the desired styles using the style property
    allElements[i].style.overflowY= loader? 'hidden':'scroll'
    allElements[i].scrollTop= loader? 0:''
    }
    
   
  },[loader]);

  return (
    
    <div className='App'>
      {loader && <Loader />}
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
