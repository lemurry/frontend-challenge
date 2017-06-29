import React from 'react';
import {Link} from 'react-router-dom';

export function CloseButton(props) {

  const closeEmployee = () => {
    props.history.push('/');
    props.onClose();
  }

  return (<div className="close-button" onClick={closeEmployee}/>);
}
