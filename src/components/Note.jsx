import { MdDeleteForever } from 'react-icons/md'
import { BsPin } from 'react-icons/bs'

const Note = ({ id, text, date }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <BsPin />
        <small>{date}</small>
        <MdDeleteForever />
      </div>
    </div>
  )
}

export default Note
