import { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import AddNote from './components/AddNotes'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '25/03/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '12/03/2022',
    },
    {
      id: nanoid(),
      text: 'This is a new note',
      date: '24/07/2022',
    },
  ])
  return (
    <div className='container'>
      <AddNote />
      <NotesList notes={notes} />
    </div>
  )
}

export default App
