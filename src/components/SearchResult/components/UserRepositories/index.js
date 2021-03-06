import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as Star } from '@fortawesome/free-solid-svg-icons';

import './sass/UserRepositories.scss';

const UserRepositories = props => (
  <div className="user-repos">
    <a href={props.repoUrl} target="_blank" rel="noopener noreferrer">
    <ul>
      <li>
        <h2 className="repo-name">{props.repoName}</h2>
      </li>
      <li>
        
        {props.repoDescription != null ? <p className="repo-description">{props.repoDescription.substring(0, 50)}...</p> : <p className="repo-description">Sem descrição disponível</p>}
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={Star} className="icon" />
          <span className="star-number">{props.starNumber}</span>
        </span>
      </li>
    </ul>
    </a>
  </div>
);

UserRepositories.propTypes = {
  repoName: PropTypes.string.isRequired,
  starNumber: PropTypes.number.isRequired,
};

export default UserRepositories;
