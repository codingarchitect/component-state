import React from 'react';
import Alert from './Alert.jsx';

const greeting = () => {
  return (
    <div>
      <Alert type="info" initialVisibility={true} message="Hello from React Bootstrap">        
      </Alert>
    </div>
  );
};

export default greeting;