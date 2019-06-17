import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'

//npm install --save bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import { addTicket} from './actions/tickets'

import {startSetTickets} from './actions/tickets'


import { Provider } from 'react-redux'
import App from './App'

const store = configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})

const app =(
    <Provider store = {store}>
      <App/>
    </Provider>
)

store.dispatch(startSetTickets())

store.dispatch(addTicket({id: "1", name:'shree',message:'net is slow',department:'hr'}))

ReactDOM.render(app, document.getElementById('root'))