/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './sass/SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      redirect: false
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchUser = () => {
      this.setState({ redirect: true });
  }



  render() {
    const { userName } = this.state;
    return (
      <div className="search-form">
        <div className="row">
          <div className="col-md-10 p-0">
            <input
              type="text"
              name="userName"
              className="input-field"
              value={userName}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="col-md-2 p-0">
            <button
              type="button"
              className="btn-search"
              onClick={this.searchUser}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {this.state.redirect ? (
              <Redirect
                to={{
                  pathname: '/search-results',
                  search: `?user=${userName}`,
                  state: { userName: this.state.userName }
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
