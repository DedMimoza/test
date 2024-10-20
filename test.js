const cube = document.getElementById('cube');
    let position = 0;
    let direction = 1;
    const speed = 2; // Speed of movement
    const maxWidth = window.innerWidth - 50; // Width of the screen minus the cube width

    function moveCube() {
      position += direction * speed;

      // Change direction if the cube reaches the edge
      if (position >= maxWidth || position <= 0) {
        direction *= -1;
      }

      // Update the position of the cube
      cube.style.left = position + 'px';

      // Continue moving the cube
      requestAnimationFrame(moveCube);
    }

    // Start the animation
    moveCube();