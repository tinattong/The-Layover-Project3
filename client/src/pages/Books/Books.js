import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12 md-6 lg-6">
            <h2 className="places-title text-center">Please enter your favorite place</h2>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Destination"
              />
            </form>
            <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit 
              </FormBtn>
          </Col>
          <Col size="sm-12 md-6 lg-6">
              <h2 className="places-title  text-center">Interesting Places</h2>
          </Col>
</Row>
<Row>

<Col size="sm-12 md-6 lg-6">
              <TextArea className="display-list"
                value={this.state.displaylist}
                onChange={this.handleInputChange}
                name="displaylist"
                placeholder=""
                />
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
              </Col>
              <Col size="sm-12 md-6 lg-6">
              <TextArea className="favoriteplace"
              value={this.state.favoriteplace}
              onChange={this.handleInputChange}
              name="favoriteplace"
              placeholder=""
              />
          </Col>
        </Row>
        </Container>
      );
    }
  }

export default Books;
