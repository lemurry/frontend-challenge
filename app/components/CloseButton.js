import React from 'react';
import {Link} from 'react-router-dom';

export function CloseButton(props) {

  return (
      <Link to="/">
        <div className="close-button" />
      </Link>
    );
  }
