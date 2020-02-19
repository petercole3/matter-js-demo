'use strict';


function startSimulation() {
  // Matter.Engine
  const engine = Matter.Engine.create();
  // Matter.Render
  const renderer = Matter.Render.create({
    engine: engine,
    canvas: document.getElementById("scene"),
    options: {
      width: 300,
      height: 300,
      wireframes: false
    }
  });
  // Matter.Bodies
  const box = Matter.Bodies.rectangle(150, 150, 50, 50);
  const box2 = Matter.Bodies.rectangle(140, 0, 50, 50);
  const floor = Matter.Bodies.rectangle(150, 280, 500, 3, {
    isStatic: true
  });
  const mouseConstraint =  Matter.MouseConstraint.create(engine);
  
  // Matter.World
  Matter.World.add(engine.world, box);
  Matter.World.add(engine.world, box2);
  Matter.World.add(engine.world, floor);
  Matter.World.add(engine.world, mouseConstraint);

  Matter.Engine.run(engine);
  Matter.Render.run(renderer);
}
