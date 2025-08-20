// Original effect by Kjetil Midtgarden Golid
// https://github.com/kgolid/p5ycho/blob/master/trunk/sketch.js

import React, { useRef, useState, useEffect } from 'react';
import p5 from 'p5'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


const Background = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
      // Create the p5 instance
      const sketch = (p) => {
        const THE_SEED: number = 4;
        const particle_set_size: number = 100000;
        const number_of_sets: number = 1;
        const band_width: number = 0.06;
        const band_dist: number = 0.068;
        const zoom: number = 1.8;

        let particle_sets: Particle[][] = [];
        let i = 0;
        let delayMs = 2000;
        let startMs = new Date().getTime();

        p.setup = () => {
          p.createCanvas(height, height);
          p.background('#ffffff');

          p.randomSeed(4);

          // p.stroke(25, 35, 60, 20);
          p.stroke(25, 35, 60, 20);
          p.strokeWeight(0.5);
          p.smooth();

          for (let j = 0; j < number_of_sets; j++) {
            let set: Particle[] = [];
            for (let i = 0; i < particle_set_size; i++) {
              set.push(
                new Particle(
                  p.randomGaussian(p.width / 2, 140),
                  p.randomGaussian(p.height / 2, 140),
                  p.random(p.TWO_PI)
                )
              );
            }
            particle_sets.push(set);
          }
        };

        p.draw = () => {
          if ((new Date().getTime() - startMs) > delayMs) {
            particle_sets.forEach((particles, index) => {
              particles.forEach((particle) => {
              particle.update(index);
                if (i % 2 == 0) {
                  particle.display();
                }
              });
            });
            
            i++
          }
        };

        class Particle {
          pos: p5.Vector;
          angle: number;
          altitude: number;
          val: number;

          constructor(x: number, y: number, angle: number) {
            this.pos = p.createVector(x, y);
            this.angle = angle;
            this.altitude = 0;
            this.val = 0;
          }

          update(index: number) {
            this.pos.x += p.cos(this.angle);
            this.pos.y += p.sin(this.angle);

            let nx: number = zoom * p.map(this.pos.x, 0, p.width, -1, 1);
            let ny: number = zoom * p.map(this.pos.y, 0, p.height, -1, 1);

            this.altitude =
              p.noise(nx + 423.2, ny - 231.1) +
              0.1 * p.noise(nx * 15 + 113.3, ny * 15 + 221.1);

            this.val = (this.altitude + band_dist * (index - number_of_sets / 2)) % 1;
            this.angle += 3 * p.map(this.val, 0, 1, -1, 1);
          }

          display() {
            if (this.val > 0.5 - band_width / 2 && this.val < 0.5 + band_width / 2) {
              p.point(this.pos.x, this.pos.y);
            }
          }
        }
      };
  
      const sketchRef = new p5(sketch, containerRef.current);
  
      // Cleanup the p5 instance on component unmount
      return () => {
        sketchRef.current.remove();
      };
    }, []);
  
    return <div id="p5-canvas" ref={containerRef} />;
  };
  
export default Background;