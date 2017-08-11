import React from 'react';
import BootstrapAlert from 'react-bootstrap/lib/Alert';
import PropTypes from 'prop-types';

import withVisible from './with-visible';

const Alert =  withVisible(({ message, type, hide, visible }) => 
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
