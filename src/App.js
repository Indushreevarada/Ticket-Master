import React from 'react' 
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import TicketList from './components/tickets/List'
import TicketNew from './components/tickets/New'
import TicketShow from './components/tickets/Show'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
            <h2> Ticket Master </h2>
            <ul>  
                <li><Link to="/tickets">Tickets</Link></li>
            </ul>
            
    
        <Switch>
          <Route path="/tickets" component={TicketList} exact={true} />
          <Route path="/tickets/new" component={TicketNew} exact={true} />
          <Route path="/tickets/:id" component={TicketShow} />
        </Switch>
      </div> 
    </BrowserRouter>
  )
}

export default App 
