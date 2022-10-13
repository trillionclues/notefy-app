import { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import AddNote from './components/AddNotes'
import Search from './components/Search'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis optio molestiae eaque repellat, itaque cupiditate impedit reiciendis asperiores aliquam omnis praesentiu?',
    //   date: '12/05/2022',
    // }
  ])
  // toggle DarkMode
  const [lightMode, setLightMode] = useState(false)
  // searchNotes state management
  const [searchText, setSearchText] = useState('')

  // manage, store and retrieve notes in localStorage

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'))

    // check if any notes have been saved
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  // function that allows child component (AddNotes) to update state that lives in the parent component
  const addNote = (text) => {
    // assign date for creation of new notes
    const date = new Date()

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-US', {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      // date: date.toLocaleTimeString('en-US', {
      //   hour: '2-digit',
      //   minute: '2-digit',
      // }),
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
    <div className={`${lightMode && `light-mode`}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setLightMode} />
        <AddNote handleAddNote={addNote} />
        <Search handleSearchNotes={setSearchText} />
        {/* search text input */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleDeleteNote={deleteNote}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
