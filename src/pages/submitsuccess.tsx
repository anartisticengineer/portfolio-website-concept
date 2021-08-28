import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { EffectHookFunctions } from '../types/componentprops';

const SubmitSuccess: FunctionComponent<EffectHookFunctions> = ({ onStart, onEnd }) => {
  const history = useHistory();
  useEffect(() => {
    document.title = 'Success!';
    onStart();
    setTimeout(() => history.push('/'), 3000);
    return onEnd;
  }, []);

  return (
    <main className="container">
      <h1>Thanks!</h1>
      <h2>Just received your submission.</h2>
      <h3>Going home...</h3>
    </main>
  );
};

export default SubmitSuccess;
