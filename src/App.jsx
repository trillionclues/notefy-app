import { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import AddNote from './components/AddNotes'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis optio molestiae eaque repellat, itaque cupiditate impedit reiciendis asperiores aliquam omnis praesentiu?',
      date: '12/05/2022',
    },
    {
      id: nanoid(),

      text: 'Visited the Circle Mall today',
      date: '24/07/2022',
    },
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '13/09/2022',
    },
  ])

  // function that allows child component (AddNotes) to update state that lives in the parent component
  const addNote = (text) => {
    // assign date for creation of new notes
    const date = new Date()

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    // new array that adds existing notes and adds new note to end of array
    const newNotes = [newNote, ...notes]

    // calling setNotes() causes the component to re-render and updates with the new note added
    setNotes(newNotes)
  }

  // function to delete note
  const deleteNote = (id) => {
    // filter out the item in the array with the exact id to be deleted
    const newNotes = notes.filter((note) => note.id !== id)

    // call setNote to re-render after deletion of selected note
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <AddNote handleAddNote={addNote} />
      <NotesList notes={notes} handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App
