import { useState } from 'react';
import './StyleCms.css';
import Cm_A from "./components/Cm_A";
import Cm_B from "./components/Cm_B";
import Cm_C from "./components/Cm_C";

function App() {
  const [ listTask, setListTask ] = useState([]);

  const takeTask = ( t ) => {
    setListTask([ t, ...listTask ]);
  }

  const delet = ( id ) => {
    const listFilter = listTask.filter( ( e, index ) => index !== id );
    setListTask( listFilter );
  }

  const updateTask = ( id, task ) => {
    const updateList = listTask.map(( e, index ) => {
      if( index === id ){
        e = task;
      }

      return e;
    })
    setListTask( updateList );
  }
  
  return (
    <div className='container'>
      <Cm_A />
      <Cm_B takeTask={ takeTask }/>

      <div className='Cm_C'>
        { listTask.map( ( e, index ) =>
          <Cm_C
            id={ index }
            delet={ delet }
            Cm_C={ e }
            edit={ updateTask }
          />
        )}
      </div>
    </div>
  );
}

export default App;
