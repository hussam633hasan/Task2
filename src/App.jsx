
import './App.css'
import ContactUs from './components/ContactUs/ContactUs'
import Deal from './components/Deal/Deal'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HMvideo from './components/HMvideo/HMvideo'
import NavBar from './components/NavBar/NavBar'
import Property from './components/Property/Property'

function App() {
 

  return (
    <>
      <NavBar/>
      <Header/>
      <Featured/>
      <HMvideo/>
      <Deal/>
      <Property/>    
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
