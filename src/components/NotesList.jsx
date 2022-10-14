import moment from 'moment'
import Note from './Note'

const NotesList = ({ notes, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={moment(note.date).startOf('seconds').fromNow()}
          handleDeleteNote={handleDeleteNote}
          key={note.id}
        />
      ))}
    </div>
  )
}

export default NotesList
