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
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;