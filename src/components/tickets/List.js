import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {startRemoveTicket} from '../../actions/tickets'  

const TicketList = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Listing Tickets - {props.tickets.length} </h1>
            <ul>
                { props.tickets.map(ticket => {
                    return <li key={ticket.id}> <Link to={`/tickets/${ticket.id}`}>{ ticket.name } </Link> 
                    <button className = "btn btn-danger" onClick={() =>{
                        const confirm = window.confirm("Are you sure?")
                        if(confirm){
                            props.dispatch(startRemoveTicket(ticket))
                        }
                        }}>Remove</button>
                    </li>
                })}
            </ul>

            <Link to="/tickets/new" className="btn btn-primary"> Add Ticket </Link>
        </div> 
    )
}

// wrapped component - Higher Order Component (HOC) 
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        city: 'bangalore'
    }
}

export default connect(mapStateToProps)(TicketList)
