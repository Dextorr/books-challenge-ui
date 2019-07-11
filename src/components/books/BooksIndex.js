import React from 'react'
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap'

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
            <Col key={book.id}>
              <h3>{book.title}</h3>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}

export default BooksIndex
