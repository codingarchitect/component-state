import React from 'react';
import BootstrapAlert from 'react-bootstrap/lib/Alert';
import { withStateHandlers, branch, renderNothing, compose } from 'recompose';
import PropTypes from 'prop-types';

const initialVisibilityHandler = ({ initialVisibility }) => ({
    visible: initialVisibility
  });
  
const closeHandler = {
    close: () => () => ({
      visible: false,
    })
  };

const closeable = withStateHandlers(
  initialVisibilityHandler, 
  closeHandler
);

const hideIfNoDataOrNotVisible = hasNoDataOrNotVisible =>
  branch(
    hasNoDataOrNotVisible,
    renderNothing
  );

const hideable = hideIfNoDataOrNotVisible(
  ({message, visible}) => !visible || !message
)

const Alert =  closeable(hideable(({ message, type, close, visible }) => {
    if (visible && message) {
      return (
        <BootstrapAlert bsStyle={type} onDismiss={close}>
          {message}
        </BootstrapAlert>
      );
    }
    return null;
  }));

Alert.propTypes = {
  /** message to display */
  message: PropTypes.string,
  /** Alert component display type, can be success, warning, danger, info
   *  Defalt is info
   */
  type: PropTypes.string,
  /**
   * Initial Visibility for the alert. Defaults to false
   */
  initialVisibility: PropTypes.bool,
};

Alert.defaultProps = {
  message: null,
  type: 'info',
  visible: false,
};

export default Alert;
