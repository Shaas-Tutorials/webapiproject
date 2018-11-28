//snippet rce
import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Media,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

export class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);

    this.togglecollapse = this.togglecollapse.bind(this);
    this.statecollapse = { collapse: false };
  }

  togglecollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let {
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      director,
      writer,
      actors,
      plot,
      language,
      country,
      awards,
      poster,
      imdbrating,
      imdbvotes,
      boxoffice,
      production,
      website
    } = this.props.movie;
    return (
      <div>
        <Card>
          <CardImg
            onClick={this.toggle}
            top
            width="100%"
            src={poster}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>
              {runtime} - {genre}
            </CardSubtitle>
            <CardSubtitle />
            <CardSubtitle>Rating: {imdbrating}</CardSubtitle>
            <CardSubtitle>
              <Button color="link" href={website}>
                Website
              </Button>
            </CardSubtitle>
            <CardText />
            <Button
              outline
              color="info"
              onClick={this.togglecollapse}
              style={{ marginBottom: '1rem' }}
            >
              PLOT
            </Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  <CardText>{plot}</CardText>
                </CardBody>
              </Card>
            </Collapse>
          </CardBody>
          <Button color="primary" onClick={() => this.props.removeMovie(title)}>
            Delete
          </Button>
        </Card>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {title} ---- {year}
          </ModalHeader>
          <ModalBody>
            <Media>
              <Media left href="#">
                <Media src={poster} alt="Card image cap" />
              </Media>
              <Media body>
                <ListGroup flush>
                  <ListGroupItem> Rated: {rated}</ListGroupItem>
                  <ListGroupItem> Release date: {released}</ListGroupItem>
                  <ListGroupItem> Runtime: {runtime}</ListGroupItem>
                  <ListGroupItem> Genre: {genre}</ListGroupItem>
                  <ListGroupItem> Country: {country}</ListGroupItem>
                  <ListGroupItem> Language: {language}</ListGroupItem>
                </ListGroup>
              </Media>
            </Media>
            <ListGroup flush>
              <ListGroupItem> Director: {director}</ListGroupItem>
              <ListGroupItem> Writer: {writer}</ListGroupItem>
              <ListGroupItem> Stars: {actors}</ListGroupItem>
              <ListGroupItem> Awards: {awards}</ListGroupItem>
              <ListGroupItem> Box Office: {boxoffice}</ListGroupItem>
              <ListGroupItem> Production: {production}</ListGroupItem>
              <ListGroupItem color="warning">{website}</ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.removeMovie(title)}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MovieCard;
