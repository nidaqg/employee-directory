import React from 'react';


function TableDetail(props) {
    return (
        <tr key={props.id}>
           <td>
             <img alt={`${props.first}-${props.last}`} src={props.image}/>
           </td>
           <td>{props.first}</td>
           <td>{props.last}</td>
           <td>{props.email}</td>
         
        </tr>
    )
}

export default TableDetail;
