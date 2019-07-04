import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding as Building,
  faMapMarker as Map,
  faStar as Star,
  faArchive as Repositories,
  faUsers as Followers,
  faUserPlus as Following,
  faAddressCard as Bio
} from '@fortawesome/free-solid-svg-icons';

import './sass/ProfileInfo.scss';

const ProfileInfo = (props) => {
  return (
    <div className="profile-info" key={props.id}>
      <img src={props.imageUrl} alt={props.name} className="img-fluid" />
      <h2 className="name">{props.name}</h2>
      <h3 className="username">{props.userName}</h3>

      <div className="user-info">
        <ul>
          <li>
            <FontAwesomeIcon icon={Building} className="icon" />{' '}
            {props.organization != '' ? (
              <span>{props.organization}</span>
            ) : (
              <span>Sem organização</span>
            )}{' '}
          </li>
          <li>
            <FontAwesomeIcon icon={Map} className="icon" />{' '}
            {props.location != '' ? (
              <span>{props.location}</span>
            ) : (
              <span>Sem localização</span>
            )}
          </li>
          <li>
            <FontAwesomeIcon icon={Star} className="icon" /> {props.stars}
          </li>
          <li>
            <FontAwesomeIcon icon={Repositories} className="icon" />{' '}
            {props.repoCount}
          </li>
          <li>
            <FontAwesomeIcon icon={Followers} className="icon" />{' '}
            {props.followers}
          </li>
          <li>
            <FontAwesomeIcon icon={Following} className="icon" />{' '}
            {props.following}
          </li>
          <li>
            <FontAwesomeIcon icon={Bio} className="icon" />{' '}
            {props.bio != null ? (
              <span>{props.bio}</span>
            ) : (
              <span>Sem bio</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  organization: PropTypes.string.isRequired
};

export default ProfileInfo;
