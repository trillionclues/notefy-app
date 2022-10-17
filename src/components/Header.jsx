import { BsFillMoonStarsFill } from 'react-icons/bs'
import logo from '../images/google_keep.png'
import noteLogo from '../images/notify-logo.svg'

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={noteLogo} height='20%' width='30%' />
        <h2>NOTIFY</h2>
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
