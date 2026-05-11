const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const s = size;

  // Background
  ctx.fillStyle = '#0f0f0f';
  ctx.beginPath();
  ctx.roundRect(0, 0, s, s, s * 0.22);
  ctx.fill();

  // Triangle
  const cx = s * 0.5, cy = s * 0.52;
  const ts = s * 0.33;
  ctx.beginPath();
  ctx.moveTo(cx, cy - ts);
  ctx.lineTo(cx + ts * 0.87, cy + ts * 0.5);
  ctx.lineTo(cx - ts * 0.87, cy + ts * 0.5);
  ctx.closePath();
  ctx.strokeStyle = '#d4a853';
  ctx.lineWidth = s * 0.04;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Center line
  ctx.beginPath();
  ctx.moveTo(cx, cy - ts * 0.3);
  ctx.lineTo(cx, cy + ts * 0.5);
  ctx.strokeStyle = 'rgba(212,168,83,0.5)';
  ctx.lineWidth = s * 0.025;
  ctx.stroke();

  // Dots
  [[cx, cy - ts], [cx + ts * 0.87, cy + ts * 0.5], [cx - ts * 0.87, cy + ts * 0.5]].forEach(([x, y]) => {
    ctx.beginPath(); ctx.arc(x, y, s * 0.028, 0, Math.PI * 2);
    ctx.fillStyle = '#d4a853'; ctx.fill();
  });

  return canvas.toBuffer('image/png');
}

[192, 512].forEach(size => {
  const buf = drawIcon(size);
  fs.writeFileSync(path.join(dir, `icon-${size}.png`), buf);
  console.log(`Generated icon-${size}.png`);
});
