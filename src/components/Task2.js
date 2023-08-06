import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Task2() {

	const [data,setData]=useState(null)
	const [show , showData] = useState(false)

	function getData(val) {
		//console.log(val.target.value)

		setData(val.target.value)
		showData(false)

	}

	return (
		<div>
				<FloatingLabel
        controlId="floatingInput"
        label="Enter Data "
        className="mb-3"
      >
        <Form.Control type="text" onChange={getData} />
      </FloatingLabel>
			{/*<input type='text' onChange={getData} />  <br /> <br />*/}
			<Button variant="success" onClick={() =>showData(true)}>  Submit  </Button>{' '}
		 {
			show ? <h1> {data} </h1> : null
		 }

		</div>
	)
}
export default Task2
