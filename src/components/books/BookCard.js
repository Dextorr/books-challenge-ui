import React from 'react'

import { Col, Card } from 'react-bootstrap'

const BookCard = ({ book }) => {
  return(
    <Col key={book.id}>
      <Card style={{ height: '100%' }}>
        <Card.Img src={book.thumbnail} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>by {book.author.firstName} {book.author.lastName}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BookCard
