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
  Collapse
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
    let { title, year, genre, actors, plot, poster } = this.props.movie;
    return (
      <div>
        <a href="/star_wars_episode/<%= movies[i].episode_number %>" />
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
            <CardSubtitle>{year}</CardSubtitle>
            <CardSubtitle>{actors}</CardSubtitle>
            <CardText />
            <Button
              color="primary"
              onClick={this.togglecollapse}
              style={{ marginBottom: '1rem' }}
            >
              More
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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <CardImg
              onClick={this.toggle}
              top
              width="100%"
              src={poster}
              alt="Card image cap"
            />
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
