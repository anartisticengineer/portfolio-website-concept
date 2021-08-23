/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import errorContent from '../content/error-occured.json';

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
    const { title, subtitle } = errorContent;

    if (hasError) {
      return (
        <main className="container errorpage">
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
          <figure>
            <img src={errorContent['funny-gif']} alt="gif showing an error" />
            <figcaption>{ errorContent['funny-caption'] }</figcaption>
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
