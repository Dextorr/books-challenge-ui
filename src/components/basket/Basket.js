import React from 'react'
import axios from 'axios'

import { Container, Row, Col, Button } from 'react-bootstrap'

import ItemQuantity from './ItemQuantity'

class Basket extends React.Component {
  constructor(){
    super()

    this.handleBasket = this.handleBasket.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }


  componentDidMount(){
    const basket = JSON.parse(localStorage.getItem('booksOnTapBasket')) || []
    axios.get('http://booksontap.azurewebsites.net/api/Books')
      .then(res => this.setState({
        books: res.data.results,
        message: 'Your basket is empty...',
        basket
      }))
      .catch(err => console.error(err))
  }

  handleBasket(operation, book){
    const basket = this.state.basket
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
    localStorage.setItem('booksOnTapBasket', JSON.stringify(basket))
    this.setState({ basket })
  }

  handleCheckout(){
    const basket = []
    const message = 'Thanks for your purchase!'
    localStorage.setItem('booksOnTapBasket', JSON.stringify(basket))
    this.setState({ basket, message })
  }

  render(){
    if(!this.state) return null
    return(
      <Container>
        <h1>Basket</h1>
        {this.state.basket.length !== 0 ?
          this.state.basket.map(item =>
            <Row key={item.book.id}>

              <Col xs={6} sm={4}>
                <h5>{item.book.title}</h5>
              </Col>


              <Col xs={6} sm={4}>
                <p>£{item.book.price * item.quantity}</p>
              </Col>

              <Col xs={6} sm={4}>
                <ItemQuantity
                  handleBasket={this.handleBasket}
                  basket={this.state.basket}
                  book={this.state.books.find(book => book.id === item.book.id)}
                />
              </Col>

            </Row>
          )
          :
          <h2>{this.state.message}</h2>
        }
        {this.state.basket.length !== 0 &&
          <Row>
            <Col>
              <p>Subtotal: £{this.state.basket.reduce((total, item) => {
                return total += item.book.price*item.quantity
              }, 0)
              }</p>
            </Col>

            <Col>
              <Button onClick={this.handleCheckout}>
                Checkout
              </Button>
            </Col>
          </Row>}

      </Container>
    )
  }
}

export default Basket
