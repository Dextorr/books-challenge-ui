import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/common/Navigation'
import BooksIndex from './components/books/BooksIndex'

import 'bootstrap/dist/css/bootstrap.css'
import './style.scss'

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <main>
          <Navigation />

          <Switch>
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
