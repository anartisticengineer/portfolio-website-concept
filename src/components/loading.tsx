/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent } from 'react';
import Sketch from 'react-p5';

const Loading: FunctionComponent = () => {
  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(50, 50).parent(canvasParentRef);
  };

  const draw = (p5: any) => {
    p5.background('#f8f8ff');
    p5.noFill();
    const t: number = p5.frameCount * 0.01;
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(t * p5.TWO_PI);
    for (let index = 0; index < 10; index += 1) {
      const r = p5.norm(index, 0, 10) * p5.width * 0.5;
      const f = p5.log(p5.norm(index, 0, 10));
      p5.arc(0, 0, r, r, p5.sin(t * p5.TWO_PI * f) + 1 * p5.PI, p5.PI);
    }
    p5.pop();
  };

  return (
    <div className="loading">
      <span className="loading__block">
        <span className="loading__text">Loading...</span>
        <Sketch className="loading__spinner" setup={setup} draw={draw} />
      </span>
    </div>
  );
};

export default Loading;
