import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

const HexagonBallAnimation = () => {
  const scene = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, World, Body, Events } = Matter;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1; // simulate earth gravity

    // Set canvas dimensions
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Hexagon container parameters
    const hexRadius = 150;  // distance from center to vertex
    const wallThickness = 10;
    const apothem = hexRadius * Math.cos(Math.PI / 6);
    const wallLength = 2 * hexRadius * Math.sin(Math.PI / 6);

    // Create renderer with a transparent background
    const render = Render.create({
      element: scene.current,
      engine: engine,
      canvas: document.createElement('canvas'),
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',  // use transparent background
      },
    });

    // Create six wall bodies to form the hexagon container.
    const walls = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 2 * Math.PI) / 6;
      const x = centerX + apothem * Math.cos(angle);
      const y = centerY + apothem * Math.sin(angle);
      const wall = Bodies.rectangle(x, y, wallLength, wallThickness, {
        isStatic: true,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#333',
        },
      });
      Body.setAngle(wall, angle + Math.PI / 2);
      walls.push(wall);
    }

    // Create a compound body for the hexagon container.
    const hexContainer = Body.create({
      parts: walls,
      isStatic: true,
    });
    World.add(world, hexContainer);

    // Create the ball inside the container.
    const ball = Bodies.circle(centerX, centerY - 50, 15, {
      restitution: 0.9,
      friction: 0.005,
      frictionAir: 0.01,
      density: 0.004,
      render: {
        fillStyle: '#ff5722',
      },
    });
    World.add(world, ball);

    Engine.run(engine);
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Rotate the hexagon container as a whole.
    const angularSpeed = 0.08;
    Events.on(engine, 'beforeUpdate', () => {
      Body.setAngle(hexContainer, hexContainer.angle + angularSpeed);
    });

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={scene} />;
};

export default HexagonBallAnimation;
