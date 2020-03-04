'use strict';

function refresh() {
  location.reload();
}

// https://brm.io/matter-js/docs/classes/Bodies.html

function startSimulation() {
  // Matter.Engine
  const engine = Matter.Engine.create();
  // Matter.Render
  const renderer = Matter.Render.create({
    engine: engine,
    canvas: document.getElementById("scene"),
    options: {
      width: 800,
      height: 600,
      wireframes: false
    }
  });

  // The Bodies
  const box = Matter.Bodies.rectangle(200, 150, 100, 100);
  const box2 = Matter.Bodies.rectangle(100, 150, 80, 80);
  const circle = Matter.Bodies.circle(400, 150, 40);
  const polygon = Matter.Bodies.polygon(500, 150, 7, 42, {
    render: {
      fillStyle: 'green',
      strokeStyle: 'goldenrod',
      lineWidth: 7
    }
  });

  // The Walls
  const floor = Matter.Bodies.rectangle(400, 590, 800, 77, {
    isStatic: true
  });
  const ceiling = Matter.Bodies.rectangle(400, 10, 800, 77, {
    isStatic: true
  });
  const wallL = Matter.Bodies.rectangle(10, 300, 77, 600, {
    isStatic: true
  });
  const wallR = Matter.Bodies.rectangle(790, 300, 77, 600, {
    isStatic: true
  });

  const mouseConstraint = Matter.MouseConstraint.create(engine);

  // Matter.World
  Matter.World.add(engine.world, box);
  Matter.World.add(engine.world, box2);
  Matter.World.add(engine.world, circle);
  Matter.World.add(engine.world, polygon);
  Matter.World.add(engine.world, floor);
  Matter.World.add(engine.world, ceiling);
  Matter.World.add(engine.world, wallL);
  Matter.World.add(engine.world, wallR);
  Matter.World.add(engine.world, mouseConstraint);

  Matter.Engine.run(engine);
  Matter.Render.run(renderer);
}
