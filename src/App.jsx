import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { compose } from 'recompose';
import withBooleanProp from './with-boolean-prop';
import Alert from './Alert.jsx';

const greeting = ({
    greeting1Visible, setGreeting1VisibleToTrue: show1,
    greeting2Visible, setGreeting2VisibleToTrue: show2,  
  }) => {
  return (
    <div>
      <Alert type="info" visible={greeting1Visible} message="Hello from React Bootstrap" />
      <Button onClick={show1}>Show Alert</Button> <br />
      <Alert type="info" visible={greeting2Visible} message="Hello from React Bootstrap again" />
      <Button onClick={show2}>Show Alert</Button>
    </div>
  );
};

const enhance = compose(
  withBooleanProp('greeting1Visible'),
  withBooleanProp('greeting2Visible')
)

export default enhance(greeting);
