import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.items.push({
        ...action.payload,
        values: {}
      })
      state.currentlyEdited = {
        ...action.payload,
        values: {}
      }
    },
    updateComponent: (state, action) => {
     const id = state.items.findIndex((item) => item.id === action.payload.id)
    
     if(id !== -1){
      state.items[id].values = action.payload.data.values
      state.currentlyEdited = null
     }
    },
    removeComponent: (state, action) => {
      const id = state.items.findIndex((item) => item.id === action.payload.id)
      if(id !== -1){
        state.items.splice(id, 1);
        state.currentlyEdited = null
      }
    },
    setEditedComponent: (state, action) => {
      const id = state.items.findIndex((item) => item.id === action.payload.component.id)
      if(id !== -1){
        state.currentlyEdited = state.items[id]
      }
    },
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer
