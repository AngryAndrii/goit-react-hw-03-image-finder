import { Component } from 'react';
import { StyledForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  };

  makeQuery = event => {
    event.preventDefault();
    this.props.changeQuery(this.state.inputValue);
  };

  render() {
    return (
      <StyledForm onSubmit={this.makeQuery}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChangeInput}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </StyledForm>
    );
  }
}
