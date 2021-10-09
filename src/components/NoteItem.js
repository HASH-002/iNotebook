import { React, useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

function NoteItem(props) {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { title, description, _id } = props.note;

    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(_id) }}></i>
                    <i className="far fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}
export default NoteItem