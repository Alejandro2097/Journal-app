import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'journal',
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: true,
    messageSave: '',
    notes: [],
    active: null
    // active: {
    //     id: '123',
    //     title: '',
    //     body: '',
    //     date: 123456,
    //     imageUrls: []
    // }
  },
  //funciones que modifican el estado
  reducers: {
    addNewEmptyNote: (state, action) => { 

    },
    setActiveNote: (state, action) => { 

    },
    setNotes: (state, action) => {

    },
    setSaving: (state ) => { 

    },
    updateNote: (state, action) =>{ 

    },
    deleteNoteById: (state, action) => {
        
    }
  },
});

export const { increment } = journalSlice.actions;
