import React from 'react';
import '../estilo/Pantalla.css';

function Pantalla({input}) {
    return ( 
        <div className='input'>
            {input}
        </div>
     );
}

export default Pantalla;