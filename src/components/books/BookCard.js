import React from 'react'

import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const BookCard = ({ book }) => {
  return(
    <Col key={book.id} xs={12} sm={6} lg={4} className="book-index-col">
      <Link to={`/books/${book.id}`} >
        <Card style={{
          height: '100%',
          background: `url(${book.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Card.Header>
            <Card.Title>{book.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>by {book.author.firstName} {book.author.lastName}</Card.Text>
            <Card.Text>£{book.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default BookCard
