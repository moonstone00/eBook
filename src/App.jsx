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
    </>
  )
}

export default App
