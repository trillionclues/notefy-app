import { useState } from 'react'
import { BsPin } from 'react-icons/bs'

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('')

  // check for character limit
  const characterLimit = 145

  // handle textarea value change
  const handleChange = (evt) => {
    // console.log(evt.target.value)

    // prevent character count entering minus(negative count)
    if (characterLimit - evt.target.value.length >= 0) {
      setNoteText(() => evt.target.value)
    }
  }

  // handle save value of target(add new notes)
  const handleSaveClick = () => {
    // check if form contains empty string and also reset after submit
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className='add new'>
      <div className='note-header'>
        <textarea id='title' cols='20' rows='2' placeholder='Title'></textarea>
        <BsPin />
      </div>
      <textarea
        cols='10'
        rows='3'
        placeholder='Take a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='addnote-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
