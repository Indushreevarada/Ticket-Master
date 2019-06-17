import React from 'react'

const TicketBtnGrp =(props)=>{
    return(
        <div className="container">
        <div className="btn-group btn-group-sm" role="group" aria-label="...">
        <div>
           <button type="button" className="btn btn-secondary" onClick={()=>{
               props.handleClick('all')
           }}>All</button>
           <button type="button" className="btn btn-secondary" onClick={()=>{
               props.handleClick('high')
           }}>High</button>
           <button type="button" className="btn btn-secondary" onClick={()=>{
               props.handleClick('medium')
           }}>Medium</button>
           <button type="button" className="btn btn-secondary" onClick={()=>{
               props.handleClick('low')
           }}>Low</button>
           </div>
        </div>
        </div>
    )
}

export default TicketBtnGrp