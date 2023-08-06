import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';



function Task3() {

	const [data,setData]=useState('')
	const [show,showData]=useState([])

	function getData(val) {
		//console.log(val.target.value)

		setData(val.target.value)
		//showData(false)

	}


	const DisplayData = (val) =>{
		val.preventDefault()
		showData([...show , data])
		setData('')
	}

	return (
		<div>
		
			<input type='text' onChange={getData}  value={data}/>  <br /> <br />
			<Button disabled={!data} onClick= {DisplayData}>  View Data </Button>

		<div>
		<ul>
				{show.map((data,index) => {
					return (
						<li>  <p key={index}> {data}</p></li>
					)
				})}

			</ul>

		</div>
		</div>
	)
}
export default Task3
