import { MdDeleteForever } from 'react-icons/md'
import { BsPin } from 'react-icons/bs'

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <BsPin className='pin-note' size='1.3em' />
        <small>{date}</small>
        <MdDeleteForever
          className='delete-note'
          size='1.3em'
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  )
}

export default Note
