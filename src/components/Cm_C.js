import React, { useState } from "react";
import '../StyleCms.css';
// react-icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";

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
                    <div className="task1">{ props.Cm_C }</div>
                    <div className="task2" onClick={ edit }><BiEdit /></div>
                    <div className="task3" onClick={ deletTask }><IoIosCloseCircleOutline /></div>
                </div>
                :
                <form className="formEdit" onSubmit={ submitEdit }>
                    <input
                        value={ editText }
                        onChange={ managEdit }
                        placeholder="Edit your task..."
                    />
                    <button><AiOutlineSave /></button>
                </form>
            }
        </div>
    )
}

export default Cm_C;