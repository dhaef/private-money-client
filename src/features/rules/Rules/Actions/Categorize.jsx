import React from 'react'
import TextEdit from 'components/TextEdit'
import Form from 'react-bootstrap/Form'

const Categorize = ({ action }) => {

  const _handleChange = () => {

  }
  return (
    <div className="d-flex">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Category 1</Form.Label>
        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        <TextEdit value={action.category1} onChange={_handleChange} minWidth={300} />  
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Category 2</Form.Label>
        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        <TextEdit value={action.category2} onChange={_handleChange} minWidth={300} />  
      </Form.Group>
      
    </div>
  )
}

export default Categorize
