import '../styles/App.css'
import Carousel from './Carousel'
import Switch from './Switch'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Carousel />
      <Switch />
    </div>
  )
}

export default App
