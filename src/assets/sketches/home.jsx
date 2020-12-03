import React from 'react';
import Sketch from 'react-p5';

const SketchForHome = (props) => {
    const N = 128;
    const setup = (p5, canvasParentRef) =>{
        p5.createCanvas(p5.windowWidth,200).parent(canvasParentRef);
        p5.noFill();
    }

    const draw = (p5) => {
        p5.background(0,0);
        p5.beginShape()
        for (let index = 0; index < N; index++) {
            const x = p5.norm(index,0,N) * p5.width;
            const y = p5.map(Math.sin(Math.PI*2*index),-1,1,0,p5.height);
            p5.curveVertex(x,y);
        }
        p5.endShape();
    }

    const windowResized = (p5) => {

    }

    return <Sketch setup={setup} draw={draw}/>;
}
 
export default SketchForHome;