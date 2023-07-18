import '../styles/App.css'
import Carousel from '../components/Carousel'
import Slideshow from '../components/Slideshow'
import Switch from '../components/Switch'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Slideshow className="w-10 h-10"/>
      <Carousel />
      <Switch />
    </div>
  )
}

export default App
