import React,{Component} from 'react'
import axios from 'axios'
import { dctKey} from './config/keys'

class TicketForm extends Component{
constructor(){
super()
this.state = {
name :"",
department :"",
priority:"",
message:""
}
}
// handleNameChange = (e)=>{
// const name = e.target.value
// this.setState(() => ({name}))
// }
// handleDeptChange = (e)=>{
// const department = e.target.value
// this.setState(() => ({department}))
// }
// handlePriorityChange = (e) =>{
// const priority = e.target.value
// this.setState(() =>({priority}))
// }
// handleMessageChange = (e) =>{
// const message = e.target.value
// this.setState(() => ({message}))
// }


// to have one event handler to all your input fields (note - handlesubmit still remains)
// we need to define 'name'

handleChange = (e) =>{
console.log('name',e.target.name)
console.log('value',e.target.value)

e.persist() // check react-event-pooling for more 
this.setState(() => ({
[e.target.name] : e.target.value 
}))

}
handleSubmit = (e) =>{
e.preventDefault()
const formData = {
name : this.state.name,
department :this.state.department,
priority:this.state.priority,
message:this.state.message
}


//api post
axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=${dctKey}`, formData)
.then(response => {
// console.log(response.data)
this.props.handleSubmit(response.data)

this.setState(() =>({
name : '', department:'', priority: '', message: ''
}))
})
.catch(err => console.log(err))
}



render(){
return(
 <div className ="container">
 <div className= "alert alert-danger">
<div>
<h2> Add Tickets</h2>
<form onSubmit = {this.handleSubmit}>
<div className ="form-group">
<label>
Name
<input type= "text" value={this.state.name} name = "name" onChange = {this.handleChange}className="form-control"/>
</label><br/><br/>
</div>
<div className ="form-group">
<label>
Department
<select value = {this.state.department} name = "department" onChange= {this.handleChange}>
<option value = ""> Select </option>
<option value="technical" > Technical </option>
<option value ="sales"> Sales</option>
<option value = "hr"> HR</option>
</select>
</label> <br/><br/>
</div>
<div className ="form-group">
<label>
Priority
<select value ={this.state.priority} name = "priority" onChange ={this.handleChange}>
<option value =""> Select</option>
<option value = "high"> High</option>
<option value = "medium"> Medium </option>
<option value ="low"> Low</option>
</select>
</label><br/><br/>
</div>
<div className ="form-group">
<label>
Message
<textarea value = {this.state.message} name = "message" onChange = {this.handleChange}>
</textarea>
</label><br/><br/>
<input type = "submit" value = "Add Ticket"/>
</div>
</form>
</div>
</div>
</div>
)
}
}

export default TicketForm