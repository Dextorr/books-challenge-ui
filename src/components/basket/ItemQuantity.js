import React from 'react'

import { Button } from 'react-bootstrap'

const ItemQuantity = ({ handleBasket, basket, book }) => {
  console.log(basket, book)
  return(
    <div className="item-quantity">
      <Button onClick={() => handleBasket('-', book)}>-</Button>
      <Button disabled >
        {basket.find(item => item.book.id === book.id).quantity}
      </Button>
      <Button onClick={() => handleBasket('+', book)}>+</Button>
    </div>
  )
}

export default ItemQuantity
