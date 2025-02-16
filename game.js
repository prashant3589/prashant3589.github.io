let x = 50;
let y = 50;
const speed = 5;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update position
    x += speed;
    if (x > canvas.width) {
        x = 0;
    }

    // Draw rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);
}


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            y -= speed;
            break;
        case 'ArrowDown':
            y += speed;
            break;
        case 'ArrowLeft':
            x -= speed;
            break;
        case 'ArrowRight':
            x += speed;
            break;
    }
});

const img = new Image();
img.src = './3d-render-little-boy-with-laptop-tools.jpg';

img.onload = function() {
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image
        ctx.drawImage(img, x, y, 50, 50);
    }
}
