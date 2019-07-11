import React from 'react'
import axios from 'axios'

class BooksIndex extends React.Component{

  componentDidMount(){
    axios.get('http://booksontap.azurewebsites.net/api/Books')
      .then(res => this.setState({ books: res.data.results }))
  }

  render(){
    return(
      <h1>Books</h1>
    )
  }
}

export default BooksIndex
