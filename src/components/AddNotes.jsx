import { BsPin } from 'react-icons/bs'

const AddNote = () => {
  return (
    <div className='add new'>
      <div className='note-header'>
        <textarea id='title' cols='20' rows='2' placeholder='Title'></textarea>
        <BsPin />
      </div>
      <textarea cols='10' rows='3' placeholder='Take a note...'></textarea>
      <div className='addnote-footer'>
        <small>200 Remaining</small>
        <button className='save'>Save</button>
      </div>
    </div>
  )
}

export default AddNote
