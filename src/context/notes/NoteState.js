import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props)=> {
    const [state, setState] = useState('');
    return (
        <NoteContext.Provider>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
