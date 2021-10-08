import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesDummy = [
        {
            "_id": "6160012cdf192d37900d74db",
            "user": "615ff31adf192d37900d74d8",
            "title": "My note",
            "description": "This is my note",
            "tag": "personal",
            "date": "2021-10-08T08:28:28.973Z",
            "__v": 0
        },
        {
            "_id": "6160120e3679cb5dafb036d1",
            "user": "615ff31adf192d37900d74d8",
            "title": "Note 2",
            "description": "Sample desc Note 2",
            "tag": "Test",
            "date": "2021-10-08T09:40:30.900Z",
            "__v": 0
        },
        {
            "_id": "616012173679cb5dafb036d3",
            "user": "615ff31adf192d37900d74d8",
            "title": "Note 3",
            "description": "Sample desc Note 3",
            "tag": "Test",
            "date": "2021-10-08T09:40:39.878Z",
            "__v": 0
        },
        {
            "_id": "6160121f3679cb5dafb036d5",
            "user": "615ff31adf192d37900d74d8",
            "title": "Note 4",
            "description": "Sample desc Note 4",
            "tag": "Test",
            "date": "2021-10-08T09:40:47.648Z",
            "__v": 0
        },
        {
            "_id": "616012263679cb5dafb036d7",
            "user": "615ff31adf192d37900d74d8",
            "title": "Note 5",
            "description": "Sample desc Note 5",
            "tag": "Test",
            "date": "2021-10-08T09:40:54.841Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesDummy);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
