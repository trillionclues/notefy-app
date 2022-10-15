import { MdDeleteForever } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { useEffect } from 'react'
import moment from 'moment'
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const Note = ({ id, text, date, handleDeleteNote }) => {
  let randomHex = '#'

  for (let i = 0; i < 6; i++) {
    // let randomHex = '#'
    randomHex += hexColors[Math.floor(Math.random() * hexColors.length)]
    // console.log(randomHex)
  }

  // useEffect(() => {
  //   document.body.style.backgroundColor = null

  //   return () => {
  //     document.body.style.backgroundColor = `${randomHex}`
  //   }
  // }, [])

  return (
    <div className='note'>
      <span className='note-text'>{text}</span>
      <div className='note-footer'>
        <FaRegEdit className='pin-note' size='1.1em' />
        <small>{date}</small>
        <MdDeleteForever
          className='delete-note'
          size='1.2em'
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  )
}

export default Note
