import { useState } from 'react';
import '../StyleCms.css';

function Cm_B( props ) {
    const [ entryUser, setEntryUser ] = useState('');
    const [ validation,setValidation ] = useState( true );

    const ctrlUser = ( e ) => {
        setEntryUser( e.target.value );
    }

    const submit = ( e ) => {
        e.preventDefault();
        if( entryUser.trim() !== "" ) {
            props.takeTask( entryUser );
            setEntryUser('');
            setValidation( true );
        } else {
            setValidation( false );
        }
    }

    return (
        <div className='Cm_B'>
            <form onSubmit={ submit }>
                <input
                    type='text'
                    value={ entryUser }
                    onChange={ ctrlUser }
                />

                <button> + </button>
            </form>
            { !validation && <div className='Cm_Bad'>add a new task please</div> }
        </div>
    );
}

export default Cm_B;