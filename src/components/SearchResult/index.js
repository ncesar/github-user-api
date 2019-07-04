/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header';
import SearchForm from '../SearchForm';
import ProfileInfo from './components/ProfileInfo';
import UserRepositories from './components/UserRepositories';

import Loading from '../../utils/Loading';

import './sass/SearchResult.scss';

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
      githubOrg: [],
      githubRepo: [],
      loaded: false,
      error: false,
    };
  }

  componentDidMount() {
    this.loadItems(this.props.location.state.userName);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.state.userName !== this.props.location.state.userName
    ) {
      this.loadItems(nextProps.location.state.userName);
    }
  }

  loadItems(userName) {
    axios
      .get(`${api.baseUrl}/users/${userName}`)
      .then((res) => {
        console.log('res', res);
        this.setState({ githubData: res.data, loaded: true, error: false });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.setState({ error: true, loaded: true });
        }
      });

    axios
      .get(`${api.baseUrl}/users/${userName}/orgs`)
      .then((org) => {
        console.log('org', org);
        if (org.data.length <= 0) {
          this.setState({ githubOrg: '' });
        } else {
          this.setState({ githubOrg: org.data[0].login });
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.setState({ error: true, loaded: true });
        }
      });

    axios
      .get(`${api.baseUrl}/users/${userName}/repos`)
      .then((repo) => {
        console.log('repo', repo);
        if (repo.data.length <= 0) {
          this.setState({ githubRepo: '' });
        } else {
          this.setState({ githubRepo: repo.data });
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.setState({ error: true, loaded: true });
        }
      });
  }

  render() {
    const {
      githubData, githubOrg, githubRepo, loaded, error,
    } = this.state;
    const style = {
      fontFamily: 'Raleway Regular',
      fontSize: 40,
      color: '#ac53f2',
      paddingTop: 118,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    };
    return (
      <div className="search-result">
        <div className="row">
          {loaded === false ? <Loading /> : true}
          <div className="col-md-4">
            <Header spacing={0} size={40} />
          </div>
          <div className="col-md-8">
            <SearchForm nameField={githubData.login} />
          </div>
        </div>
        {error === true ? (
          <h1 style={style}>User not found :(</h1>
        ) : (
          <section id="user-infos">
            <div className="row">
              <div className="col-md-4">
                <ProfileInfo
                  key={githubData.id}
                  id={githubData.id}
                  bio={githubData.bio}
                  imageUrl={githubData.avatar_url}
                  name={githubData.name}
                  userName={githubData.login}
                  organization={githubOrg}
                  location={githubData.location}
                  repoCount={githubData.public_repos}
                  followers={githubData.followers}
                  following={githubData.following}
                />
              </div>
              <div className="col-md-8">
                {githubRepo
                  .sort((a, b) => {
                    if (a.stargazers_count < b.stargazers_count) return 1;
                    if (a.stargazers_count > b.stargazers_count) return -1;
                    return 0;
                  })
                  .map(name => (
                    <UserRepositories
                      key={name.id}
                      repoName={name.name}
                      repoDescription={name.description}
                      starNumber={name.stargazers_count}
                    />
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default SearchResult;
