import Footer from "./components/footer/Footer"
import HomeGetBook from "./components/home/HomeGetBook"
import HomeIntro from "./components/home/HomeIntro"
import HomeOrganizations from "./components/home/HomeOrganizations"
import Navbar from "./components/navbar/Navbar"
import './index.css'

function App() {

  return (
    <>
      <Navbar/>
      <HomeIntro/>
      <HomeOrganizations/>
      <HomeGetBook/>
      <Footer/>
    </>
  )
}

export default App
