import React from 'react';
import BootstrapAlert from 'react-bootstrap/lib/Alert';
import PropTypes from 'prop-types';

import withBooleanProp from './with-boolean-prop';

const Alert =  withBooleanProp('visible')(({ message, type, setVisibleToFalse: hide, visible }) => 
  (visible && message) && (<BootstrapAlert bsStyle={type} onDismiss={hide}>
    {message}
  </BootstrapAlert>));
 
Alert.propTypes = {
  /** message to display */
  message: PropTypes.string,
  /** Alert component display type, can be success, warning, danger, info
   *  Default is info
   */
  type: PropTypes.string,
  /**
   * Visibility for the alert. 
   */
  visible: PropTypes.bool.isRequired,
  /** @ignore */
  hide: PropTypes.func,
};

Alert.defaultProps = {
  message: null,
  type: 'info'
};

export default Alert;
