import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './book'

class shelf extends Component {
	
	componentDidMount () {
	 console.log(this);
			}

		render(){
			return (
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					{
                    this.props.books.map((book, key) => <Book book={book} key={key} />)
					}
                    </ol>
                  </div>
                </div>
		)
	}
}


export default shelf