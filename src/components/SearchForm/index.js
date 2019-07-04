/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './sass/SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: ''
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { userName } = this.state;
    const { nameField } = this.props;

    return (
      <div className="search-form">
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              name="userName"
              className="input-field"
              placeholder={nameField}
              onChange={this.onChangeHandler}
              value={userName}
              required
            />
            <Link
              className="btn-search"
              to={{
                pathname: `/search-results/${userName}`,
                state: { userName: this.state.userName }
              }}
            >
              <FontAwesomeIcon
                icon={faSearch}
                style={{ transform: 'rotate(90deg)' }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
