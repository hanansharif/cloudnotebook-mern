import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:4000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NTkwZmUxZWMzM2RhZWUzYWUyY2UzIn0sImlhdCI6MTcwMTE4MTE1MX0.7z-gkwg2ke-BBHxY9-7ciYyqPWETDkUvKYhAuvBgrKk"
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    // ADD a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NTkwZmUxZWMzM2RhZWUzYWUyY2UzIn0sImlhdCI6MTcwMTE4MTE1MX0.7z-gkwg2ke-BBHxY9-7ciYyqPWETDkUvKYhAuvBgrKk"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to Add in Client
        console.log("Adding a new Note");
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
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NTkwZmUxZWMzM2RhZWUzYWUyY2UzIn0sImlhdCI6MTcwMTE4MTE1MX0.7z-gkwg2ke-BBHxY9-7ciYyqPWETDkUvKYhAuvBgrKk"
            }
        });
        const json = response.json();
        console.log(json);
        console.log("Deleting the node with id " + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NTkwZmUxZWMzM2RhZWUzYWUyY2UzIn0sImlhdCI6MTcwMTE4MTE1MX0.7z-gkwg2ke-BBHxY9-7ciYyqPWETDkUvKYhAuvBgrKk"
            },
            body: JSON.stringify({ title, description, tag })
        });

        // Logic to Edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;