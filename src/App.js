import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/common/Navigation'
import BooksIndex from './components/books/BooksIndex'
import BookShow from './components/books/BookShow'
import Basket from './components/basket/Basket'

import 'bootstrap/dist/css/bootstrap.css'
import './style.scss'

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <main>
          <Navigation />

          <Switch>
            <Route path="/books/:id" component={BookShow} />
            <Route path="/basket" component={Basket} />
            <Route path="/" component={BooksIndex} />
          </Switch>

        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
