import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default function AppDialog (props) {
  const actions = [
    <FlatButton
      label="NO"
      primary={true}
      onTouchTap={props.onNo}
    />,
    <FlatButton
      label="YES"
      primary={true}
      keyboardFocused={true}
      onTouchTap={props.onYes}
    />,
  ];

    return (
      <Dialog
        title={props.title}
        actions={actions}
        modal={false}
        open={props.isOpened}
        onRequestClose={props.onClose}>
          {props.message}
      </Dialog>
    )
}
