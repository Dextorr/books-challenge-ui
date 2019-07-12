import React from 'react'
import axios from 'axios'

import { Container, Row, Col, Image } from 'react-bootstrap'

class BookShow extends React.Component{

  componentDidMount(){
    axios.get(`http://booksontap.azurewebsites.net/api/Books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data.results }))
      .catch(err => console.error(err))
  }

  render(){
    if(!this.state) return null
    const {
      title,
      thumbnail,
      author,
      description,
      price,
      stockAmount
    } = this.state.book
    return(
      <Container>
        <h1>{title}</h1>

        <Row>

          <Col sm={6}>
            <Image src={thumbnail} rounded fluid />
          </Col>

          <Col>
            <h3>by {author.firstName} {author.lastName}</h3>

            <Row>
              <Col><p>£{price}</p></Col>
              <Col><p>Currently {stockAmount === 0 ? 'un':''}available</p></Col>
            </Row>

            <p>{description}</p>
          </Col>

        </Row>

      </Container>
    )
  }
}

export default BookShow
