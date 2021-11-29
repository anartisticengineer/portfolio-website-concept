import React, { FunctionComponent } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading: FunctionComponent = () => (
  <div className="loading">
    <span className="loading__block">
      <span className="loading__text">
        Loading...
        <FontAwesomeIcon icon={faSpinner} spin speed={5} />
      </span>
    </span>
  </div>
);

export default Loading;
