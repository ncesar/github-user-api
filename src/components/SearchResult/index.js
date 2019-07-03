/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from '../SearchForm';

const api = {
  baseUrl: 'https://api.github.com',
  client_id: 'a2a58519bc365d25a8ce',
  client_secret: '8ef87d05b2aee0e1d1ad712d4f3d9008a84feff3'
};

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${api.baseUrl}/users/${this.props.location.state.userName}`)
      .then((res) => {
        console.log('res', res);
        this.setState({ githubData: res.data });
      });
  }

  render() {
    const { githubData } = this.state;
    console.log(githubData)
    return (
      <div className="search-result">
        { githubData.name }
      </div>
    );
  }
}

export default SearchResult;
