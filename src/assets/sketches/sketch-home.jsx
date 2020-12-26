import React from 'react';
import Sketch from 'react-p5';

const SketchHome = () => {
    let drawing;

    const setup = (p5,canvasParentRef) => {
        p5.createCanvas(window.innerWidth/2,window.innerHeight/2).parent(canvasParentRef);
        p5.background(p5.color('#1d1d1d'));
        p5.textAlign(p5.CENTER,p5.CENTER);
        p5.strokeWeight(0.5);
        drawing = new Drawing(p5,p5.height/4);
    }

    const draw = (p5) => { 
        drawing.update(p5);
        if (!drawing.isDone()){
            drawing.draw(p5);
        } else{
            p5.noLoop();
        }
    }
    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth/2,window.innerHeight/2,true);
    }
    return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
};

export default SketchHome;

//
class Drawing{
    constructor(p5,sqSize){
        const halfSize = sqSize/2;
        this.cornerA = p5.createVector(halfSize,-halfSize);
        this.cornerB = p5.createVector(-halfSize,halfSize);
        this.fromA = p5.createVector(-halfSize,-halfSize);
        this.toB = p5.createVector(halfSize,halfSize);
        this.currentPos = this.fromA.copy();
        this.noiseOffset = p5.createVector(0,0);
        this.index = 0.0;
    }
    update(p5){
        this.currentPos.x = p5.lerp(this.fromA.x,this.toB.x,this.index);
        this.currentPos.y = p5.lerp(this.fromA.y,this.toB.y,this.index);
        this.noiseOffset.x = this.cornerA.x - this.cornerB.x;
        this.noiseOffset.y = this.cornerB.y - this.cornerB.y;
        this.noiseOffset.normalize().mult(p5.lerp(-200,200,p5.noise(p5.frameCount*0.005)));
        this.index += 0.001;
    }
    draw(p5){
        const offsetVector = () => {
            return p5.createVector(this.currentPos.x + this.noiseOffset.x,this.currentPos.y + this.noiseOffset.y);
        }
        p5.push();
        p5.translate(p5.width/2,p5.height/2);
        p5.rotate(Math.PI/4);
        p5.stroke(p5.lerpColor(p5.color('#279af1'),p5.color('#ff337a'),this.index));
        p5.line(this.cornerA.x,this.cornerA.y,offsetVector().x,offsetVector().y);
        p5.line(this.cornerB.x,this.cornerB.y,offsetVector().x,offsetVector().y);
        p5.pop();
    }
    isDone(){
        return this.index >= 1.0;
    }
}