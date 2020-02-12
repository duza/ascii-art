import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;

    return this.props.children(hasError);
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.func.isRequired,
};
export default ErrorBoundary;
