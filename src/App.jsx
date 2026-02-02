import NoteForm from './components/NoteForm'
import Notes from './components/Notes'

const App = () => {
    const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div>
      <NoteForm />
      <Notes />
    </div>
  )
}

export default App