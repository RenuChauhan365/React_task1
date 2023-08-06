import './App.css';
import React, {useState} from 'react'
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'
import Task4 from './components/Task4'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// this is aa function for the offcanvas


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All Task Info </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
1.  Create an input component that has an input element and another to display input data. While the user enters the data, it should immediately reflect on the view component.
 <br/><br/><br/>
2.Create an input component that has an input element and a button, and another to display input data once the user clicks the button. If the user updates the data it should only reflect on the view component when the user clicks the button.
<br/><br/><br/>
3.Create an input component that has an input element and a button, and another to display input data once the user clicks the button. Once the user clicks the button it should clear the input box. If the input box is empty then the button should be disabled. At all clicks of the button, it should add input items in a list and show all the items in the list/view component as a list.
<br/><br/><br/>
4.Create a component that have two child component one is the input component and another for view. The parent component should have an Add button. when the user clicks on the Add button it should add input text in a list as an item. The input component should contain the input element. The add button should be disabled when the input box is empty. The view/List component will display all the list items as a list and All list items will have a delete button. On click of the delete button, the item should be removed from the list.
<br/><br/><br/><br/>  </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}









// this is function for the accordion
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}




// main function

function App() {


 return (


<div>
{['TaskInfo'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}









<br/>



<Accordion defaultActiveKey="0">

      <Card >
        <Card.Header>
          <CustomToggle  eventKey="0">Task 1 </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body><Task1></Task1></Card.Body>
        </Accordion.Collapse>
      </Card>


      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Task 2 </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body><Task2></Task2></Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Task 3 </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body><Task3></Task3></Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">Task 4 </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body><Task4></Task4></Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>



</div>



 );




}

export default App;
