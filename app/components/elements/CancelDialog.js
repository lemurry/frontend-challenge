import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default function CancelDialog (props) {
  const cancelActions = [
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
        title="Cancel changes?"
        actions={cancelActions}
        modal={false}
        open={props.isOpened}
        onRequestClose={props.onClose}>
          Are you sure you want to cancel changes?
      </Dialog>
    )
}
