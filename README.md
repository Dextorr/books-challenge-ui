# Capital On tap Frontend Challenge v1

## Brief
To create a website that markets and sells books using the API at - https://booksontap.azurewebsites.net/

## Timeframe
Approx. 3 hours

## Technologies used

* React
* JavaScript (ES6)
* Webpack
* Bootstrap/React Bootstrap
* axios
* HTML 5
* SCSS
* Git/GitHub

## Code Installation

- https://github.com/Dextorr/books-challenge-ui

1. Clone or download the repo
2. Install with `yarn` in Terminal
3. Run the webpack dev server with `yarn serve` in Terminal
4. A browser window should open with the app on http://localhost:8000

## Overview

Upon loading the app, you will see the home page with a list of all books.

![Home Page, book index](https://media.git.generalassemb.ly/user/17636/files/3232d380-a4ad-11e9-876e-847df385e5ad)

Clicking on the basket link in the navbar will bring you to your basket.

![Empty basket](https://media.git.generalassemb.ly/user/17636/files/8a69d580-a4ad-11e9-97af-87b21a88eb27)

It's empty right now, so let's add some books to it. Click on the Home link or the BooksOnTap logo to go back, then click on any book.

![Homepage, with hover state](https://media.git.generalassemb.ly/user/17636/files/d3ba2500-a4ad-11e9-9b05-43f767336321)

Clicking through on any book, will bring you to its details page. Showing its description, price and availability.

![Book Show component](https://media.git.generalassemb.ly/user/17636/files/fea47900-a4ad-11e9-9c4f-3919d4de6fad)

Clicking on the 'Add to Basket' button will add this to your basket, and the button will change.

![Button when item is in basket](https://media.git.generalassemb.ly/user/17636/files/973af900-a4ae-11e9-851b-7a59cf3d0427)

You can adjust purchase quantity from here, or continue to your basket with the link in the nav.

![Basket with item](https://media.git.generalassemb.ly/user/17636/files/d0736900-a4ae-11e9-8284-6160aaaca8a6)

Now that there's an item in your basket you can add more, remove it, or checkout.

![Basket post-checkout](https://media.git.generalassemb.ly/user/17636/files/1fb99980-a4af-11e9-8b96-f99619426542)

Clicking on 'Checkout' empties your basket and displays a 'Thank you' message.

## Challenges

It was tough to try and fit as much functionality as I could in such a small timeframe and such, some of my code isn't as DRY as I'd like it to be, as I prioritised having the features work over them being elegant. An example is the function that adds items to the basket from the `BookShow` component:

```javascript
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
```

Given some more time, I'd like to take another pass at this function, and go through some refactoring, especially since the function is basically repeated in the `Basket` component. It'd probably be better to have this function live in the main `App` component and pass it down to the other components with state. But having realised this, I thought I'd probably waste too much time getting it to work rather than producing something presentable.

It would've been nice to spend more time on the look and feel of the app too. React Bootstrap took care of the layouts, but I usually like to work with SCSS to customise things a bit more.

## Wins

Given how quickly this app was thrown together, I'm pretty happy with how it turned out. It was fun to work on and I managed to get most of my ideas to work, like having the 'Add to basket' button become a quantity picker:

```javascript
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
```

I was also quite happy with how the low stock "alert" turned out:

![Low stock message](https://media.git.generalassemb.ly/user/17636/files/e8002100-a4b1-11e9-9943-db5713080d62)

```javascript
<Col>
  <p>
    {stockAmount < 5 && stockAmount !== 0 ?
      `Only ${stockAmount} left!`
      :''}
  </p>
</Col>
```

## Future features

Given more time to work on this, I'd work on feedback to the user first. Such as a message or something saying you can't add more of a particular item due to stock restrictions, or maybe a modal on checkout instead of just changing the message displayed on the component. Following those features I'd love to fine-tune the styling and make things look a little cleaner, though overall I'm happy with what I've achieved.
