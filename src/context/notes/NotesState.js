import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "65663e410f79e3cb9532f8e0",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-11-28T19:23:45.909Z",
            "__v": 0
        },
        {
            "_id": "658477df3d4b1cb4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        },
        {
            "_id": "658477df34b1cb4f2s2436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        },
        {
            "_id": "658477dfdf34b1cb4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        },
        {
            "_id": "658477df34b1cbaa4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        },
        {
            "_id": "658477df34b1sscb4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        },
        {
            "_id": "658477df34b1ddcb4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)



    // ADD a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Addong a new Note");
        const note = {
            "_id": "658477ddf34b1cb4f22436f1d",
            "user": "656590fe1ec33daee3ae2ce3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-21T17:37:35.789Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = () => {

    }

    // Edit a Note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;