/* script.js */
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettis = [];
const colors = ['#FFC0CB','#FFD700','#ADFF2F','#87CEFA','#FF69B4'];

for(let i = 0; i < 120; i++){
  confettis.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height, r: Math.random() * 6 + 4, color: colors[Math.floor(Math.random() * colors.length)], vy: Math.random() * 3 + 2, vx: Math.random() - 0.5, rotation: Math.random() * 360 });
}

function drawConfetti(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => {
    ctx.save();
    ctx.fillStyle = c.color;
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotation * Math.PI / 180);
    ctx.fillRect(-c.r/2, -c.r/2, c.r, c.r);
    ctx.restore();

    c.y += c.vy;
    c.x += c.vx;
    c.rotation += 3;

    if(c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Lightbox pour zoom sur les images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  lightbox.style.display = 'none';
}

lightbox.onclick = function(event) {
  if(event.target === lightbox) {
    lightbox.style.display = 'none';
  }
}
