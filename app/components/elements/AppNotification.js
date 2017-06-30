import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from 'material-ui/Dialog';

export default function AppNotification (props) {
    return (
      <Dialog
        title={props.title}
        modal={false}
        open={props.isOpened}
        onRequestClose={props.onClose}>
          {props.message}
      </Dialog>
    )
}
