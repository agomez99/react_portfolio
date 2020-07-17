import React, {Component} from 'react'
import './About.css'
import ParticlesBg from "particles-bg";



class AboutMe extends Component {
  render() {

    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      random:20
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }


    return (
      <div className="about">
        <ParticlesBg type="custom" config={config} bg={true} />
        <h1 className="p1">About me</h1>
        <div className="background">
        <p className="p2">My name is Austine, I currently reside in San Antonio, Texas and I enjoy solving problems and love to write code. 
        I have bachelors degree in computer science and currently just finished a full-stack web development boot camp. 
        </p>
        </div>
      </div>
    )
  }
}

export default AboutMe;