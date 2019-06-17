import axios from 'axios'
import {dctKey} from './config/keys'

export const addTicket  = (ticket) => {
return {
        type: 'ADD_TICKET' ,
        payload: ticket
    }
 }

 export const startAddTicket = (ticket) =>{
     return(dispatch) =>{
         axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=${dctKey}',ticket)
         .then(response =>{
             const ticket = response.data
             dispatch(addTicket(ticket))
         })
     }
 }

 export const setTickets = (tickets) =>{
     return{
         type: 'SET_TICKET',
         payload: tickets
     }
 }

 export const startSetTickets = () => {
     return (dispatch) => {
         axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=${dctKey}')
         .then(response =>{
             dispatch(setTickets(response.data))
         })
     }
 }

 export const removeTicket = (id) =>{
     return{
         type: 'REMOVE_TICKET',
         payload: id
 }
 
}

export const startRemoveTicket = (ticket) =>{
    return(dispatch) => {
        axios.delete('http://dct-api-data.herokuapp.com/tickets?api_key=${dctKey}')
        .then(() =>{
            dispatch(removeTicket(ticket.id))
    })
}
}