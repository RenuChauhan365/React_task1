import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Task1() {

	const [data,setData]=useState(null)

	function getData(val) {
		//console.log(val.target.value)
		setData(val.target.value)

	}

	return (
		<div>
			<FloatingLabel
        controlId="floatingInput"
        label="Enter Value "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
			<input type='text' onChange={getData} />
 <h3>{data}</h3>

		</div>
	)
}
export default Task1
