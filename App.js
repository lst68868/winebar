import '../styles/App.css'
import Carousel from './src/components/Carousel'
import Switch from './src/components/Switch'
import { ThemeContext } from './src/context/ThemeContext'
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
