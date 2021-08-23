/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class ErrorBoundary extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <main className="container">
          <h1>Something screwed up :P</h1>
          <h2>Hold on tight...</h2>
          <figure>
            {/* <img src=""/> */}
            <figcaption>Test</figcaption>
          </figure>
        </main>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
function logErrorToMyService(_error: any, _errorInfo: any) {
  throw new Error('Function not implemented.');
}
