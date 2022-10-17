import { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import AddNote from './components/AddNotes'
import Search from './components/Search'
import Header from './components/Header'
import Footer from './components/Footer'
// import ModalPop from './components/Modal'
import { Modal, Button } from 'react-bootstrap'

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis optio molestiae eaque repellat, itaque cupiditate impedit reiciendis asperiores aliquam omnis praesentiu?',
    //   date: '12/05/2022',
    // },
  ])
  // toggle DarkMode
  const [lightMode, setLightMode] = useState(false)
  // searchNotes state management
  const [searchText, setSearchText] = useState('')
  const [show, setShow] = useState(false)

  // manage, store and retrieve notes in localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'))

    // check if any notes have been saved
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  // function that allows child component (AddNotes) to update state that lives in the parent component
  const addNote = (text) => {
    // assign date for creation of new notes
    const date = new Date()

    const newNote = {
      id: nanoid(),
      text: text,
      date,
    }

    // new array that adds existing notes and adds new note to end of array
    const newNotes = [newNote, ...notes]

    // calling setNotes() causes the component to re-render and updates with the new note added
    setNotes(newNotes)
    localStorage.setItem('notes-data', JSON.stringify(newNotes))
  }

  // function to delete note
  const deleteNote = (id) => {
    // filter out the item in the array with the exact id to be deleted
    const newNotes = notes.filter((note) => note.id !== id)

    console.log(id)
    // call setNote to re-render after deletion of selected  note
    setNotes(newNotes)
    localStorage.setItem('notes-data', JSON.stringify(newNotes))
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 5000)
  }

  const handleClose = () => {
    // setShow(false)
    setShow(false)
  }

  return (
    <>
      <div id='header-bg' className={`${lightMode || `light-mode`}`}>
        <div className='container'>
          <Modal
            className='modal'
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Body className='modal-content'>
              Note Trashed!
              <Button className='btn' onClick={handleClose}>
                Undo
              </Button>
            </Modal.Body>
          </Modal>
          <Header className='header-bg' handleToggleDarkMode={setLightMode} />
          <AddNote handleAddNote={addNote} />
          <Search handleSearchNotes={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            handleDeleteNote={deleteNote}
          />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
