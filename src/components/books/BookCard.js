import React from 'react'

import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const BookCard = ({ book }) => {
  return(
    <Col key={book.id}>
      <Link to={`/books/${book.id}`} >
        <Card style={{
          height: '100%',
          background: `url(${book.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>by {book.author.firstName} {book.author.lastName}</Card.Text>
            <Card.Text>£{book.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default BookCard
