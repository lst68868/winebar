import '../styles/App.css'
import Carousel from './Carousel'
import Switch from './Switch'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import FullCard from './FullCard'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Carousel />
      <Switch />
      <FullCard />
    </div>
  )
}

export default App
