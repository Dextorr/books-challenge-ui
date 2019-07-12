import React from 'react'
import axios from 'axios'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import ItemQuantity from '../basket/ItemQuantity'

class BookShow extends React.Component{
  constructor(){
    super()

    this.handleBasket = this.handleBasket.bind(this)
  }

  getBasket(){
    return JSON.parse(localStorage.getItem('booksOnTapBasket')) || []
  }

  handleBasket(operation, book){
    const basket = this.getBasket()
    if (basket.some(item => item.book.id === book.id)){
      const itemIndex = basket.findIndex(item => item.book.id === book.id)
      const quantity = basket[itemIndex].quantity
      const stock = book.stockAmount
      if(quantity < stock && operation === '+'){
        basket[itemIndex].quantity += 1
      } else if (quantity > 1 && operation === '-'){
        basket[itemIndex].quantity -= 1
      } else if (quantity === 1 && operation === '-'){
        basket.splice(itemIndex, 1)
      }
    } else {
      basket.push({
        book: book,
        quantity: 1
      })
    }
    localStorage.setItem('booksOnTapBasket', JSON.stringify(basket))
    this.setState({ basket })
  }

  componentDidMount(){
    const basket = this.getBasket()
    axios.get(`http://booksontap.azurewebsites.net/api/Books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data.results, basket }))
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

            <Row>
              <Col><p>{description}</p></Col>
            </Row>

            <Row>
              <Col>
                <p>
                  {stockAmount < 5 && stockAmount !== 0 ?
                    `Only ${stockAmount} left!`
                    :''}
                </p>
              </Col>
              <Col>
                {!this.state.basket.some(item => item.book.id === this.state.book.id) ?
                  <Button
                    disabled={stockAmount === 0}
                    onClick={() => this.handleBasket('+', this.state.book)}
                  >
                    {stockAmount === 0 ?  'Out of stock':'Add to Basket'}
                  </Button>
                  :
                  <ItemQuantity
                    handleBasket={this.handleBasket}
                    basket={this.state.basket}
                    book={this.state.book}
                  />
                }
              </Col>
            </Row>
          </Col>

        </Row>

      </Container>
    )
  }
}

export default BookShow
