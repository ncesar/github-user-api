import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding as Building,
  faMapMarker as Map,
  faArchive as Repositories,
  faUsers as Followers,
  faUserPlus as Following,
  faAddressCard as Bio
} from '@fortawesome/free-solid-svg-icons';

import './sass/ProfileInfo.scss';

const API = {
  link: 'https://github.com/',
  maps: 'https://www.google.com/maps/place/',
}

const ProfileInfo = (props) => {
  return (
    <div className="profile-info" key={props.id}>
      <a href={API.link + props.userName} target="_blank" rel="noopener noreferrer">
        <img src={props.imageUrl} alt={props.name} className="img-fluid" />
        <h2 className="name">{props.name}</h2>
        <h3 className="username">{props.userName}</h3>
      </a>

      <div className="user-info">
        <ul>
          
            <li>
              <FontAwesomeIcon icon={Building} className="icon" />{" "}
              {props.organization !== "" ? (
                <a href={API.link + props.organization} target="_blank" rel="noopener noreferrer">
                <span>{props.organization}</span>
                </a>
              ) : (
                <span>Sem organização</span>
              )}{" "}
            </li>
          
          <li>
            <FontAwesomeIcon icon={Map} className="icon" />{" "}
            {props.location !== "" ? (
              <a href={API.maps + props.location}>{props.location}</a>
            ) : (
              <span>Sem localização</span>
            )}
          </li>
          <li>
            <FontAwesomeIcon icon={Repositories} className="icon" />{" "}
            {props.repoCount}
          </li>
          <li>
            <FontAwesomeIcon icon={Followers} className="icon" />{" "}
            {props.followers}
          </li>
          <li>
            <FontAwesomeIcon icon={Following} className="icon" />{" "}
            {props.following}
          </li>
          <li>
            <FontAwesomeIcon icon={Bio} className="icon" />{" "}
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


export default ProfileInfo;
