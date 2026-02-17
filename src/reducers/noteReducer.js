import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const initialState = []

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))


const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }

      console.log(current(state))

      return state.map(note =>
        note.id !== id ? note : changedNote 
      )     
    },
    setNotes(state, action){
      return action.payload
    }
  },
})

const { setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const { createNote, toggleImportanceOf } = noteSlice.actions

export default noteSlice.reducer