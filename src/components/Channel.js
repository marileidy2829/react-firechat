

import { userEffect, useState} from 'react';
import { bd } from '../config/firebase';

const Channel = ({ user = null }) => {
       const [messages, setMessages] = useState([]),
       
//Necesito cargar los mensage de la BD.
useEffect
(() => {;;
    
/*
Crear el query de los mensajes.
cargar 100 mensages ordenados por fechas.
*/

const query = bd.collection('messages')
      .orderBy('createdAt')
      .limit(100);
const unsubscribe = query.onSnapshot(querySnapshot =>{
    //Obtiene todos los mensages desde la bd con su Id.
    const date = query.onSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
    //Actualizo todos los mensages octenido desde la bd.
    setMessages(data);
});
//CleamUp
return unsubscribe;
}, [])

    return (
    <ul>
                { messages.map(messages =>(
        //Todos los mensages seran mostrados en la lista.
        <li key={message.id}>{message.text} </li>
        ))}
    

        
    </ul>
    );
};
export default Channel;