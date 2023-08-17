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

  render() {
    const { changeQuery } = this.props;
    return (
      <StyledForm onSubmit={changeQuery}>
        <input type="text" onChange={this.handleChangeInput} />
        <button type="submit">Search</button>
      </StyledForm>
    );
  }
}
