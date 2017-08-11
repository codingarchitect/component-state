import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import withVisible from './with-visible';
import Alert from './Alert.jsx';

const greeting = ({visible, show}) => {
  return (
    <div>
      <Alert type="info" visible={true} message="Hello from React Bootstrap" />
      <Alert type="info" visible={visible} message="Hello from React Bootstrap again" />
      <Button onClick={show}>Show Alert</Button>
    </div>
  );
};

export default withVisible(greeting);