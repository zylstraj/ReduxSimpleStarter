import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}
// Anything returned from this function will end up as props
// on the BookList container
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
// Whenever selectBook is called - the result should be passed to all of our reducer_books
//dispatch takes all the actions and spits it out to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
