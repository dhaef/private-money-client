import React, { useState } from 'react'
import TextEdit from 'components/TextEdit'
import Form from 'react-bootstrap/Form'

const RenameDescription = ({ action }) => {
  return (
    <div className="d-flex">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Rename: </Form.Label>
        {/* <Form.Control type="email" placeholder="Enter email" size='sm' /> */}
        <TextEdit value={action.replaceWithValue} minWidth={300} />
      </Form.Group>
    </div>
  )
}

export default RenameDescription