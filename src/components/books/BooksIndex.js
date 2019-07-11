import React from 'react'
import axios from 'axios'

import { Container, Row, Col, Card } from 'react-bootstrap'

import BookCard from './BookCard'

class BooksIndex extends React.Component{

  componentDidMount(){
    axios.get('http://booksontap.azurewebsites.net/api/Books')
      .then(res => this.setState({ books: res.data.results }))
      .catch(err => console.error(err))
  }

  render(){
    if(!this.state) return null
    return(
      <Container>
        <h1>Books</h1>
        <Row>
          {this.state.books.map(book =>
            <BookCard key={book.id} book={book} />
          )}
        </Row>
      </Container>
    )
  }
}

export default BooksIndex
