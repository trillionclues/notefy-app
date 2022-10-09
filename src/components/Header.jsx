import { BsFillMoonStarsFill } from 'react-icons/bs'
import logo from '../images/google_keep.png'
import Vite from '../images/vite.svg'

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} height='20%' width='30%' />
        <h2>Notify</h2>
      </div>

      <BsFillMoonStarsFill
        className='moon-toggle'
        onClick={() => handleToggleDarkMode((prevMode) => !prevMode)}
        size='1.7em'
      />
    </div>
  )
}

export default Header
