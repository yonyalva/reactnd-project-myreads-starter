import React, { Component } from 'react'
import Shelf from '../components/shelf'
import * as BooksAPI from '../BooksAPI'

class home extends Component {
		
		constructor (props) {
			super (props);
			this.state = {
				books: []
			}
		}
		componentDidMount () {
		BooksAPI.getAll().then((abooks) => {
				console.log(abooks)
				this.setState({books: abooks})
			})
		}

		render(){
			return (
			 <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
			<Shelf title="Currently Reading" books={this.state.books.filter(a => a.shelf === "currentlyReading")}/>
			<Shelf title="Want to Read" books={this.state.books.filter(a => a.shelf === "wantToRead")}/>
			<Shelf title="Read" books={this.state.books.filter(a => a.shelf === "read")}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
		)
	}
}


export default home