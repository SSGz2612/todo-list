import React, { useState } from "react";
import '../StyleCms.css';

function Cm_C( props ) {
    const [ modoEdit, setModoEdit ] = useState( false );
    const [ editText, setEditText ] = useState("");

    const edit = () => {
        setModoEdit( true );
    }

    const managEdit = ( e ) => {
        setEditText( e.target.value );
    }

    const submitEdit = ( e ) => {
        e.preventDefault();
        props.edit( props.id, editText );
        setEditText("");
        setModoEdit( false );
    }

    const deletTask = () => {
        props.delet( props.id );
    }

    return (
        <div>{
            !modoEdit ?
                <div className="task">
                    <span className="task1">{ props.Cm_C }</span>
                    <span className="task2" onClick={ edit }>Edit</span>
                    <span className="task3" onClick={ deletTask }>Delete</span>
                </div>
                :
                <form className="formEdit" onSubmit={ submitEdit }>
                    <input value={ editText } onChange={ managEdit }/>
                    <button>Guardar</button>
                </form>
            }
        </div>
    )
}

export default Cm_C;