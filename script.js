// 悬浮动画效果
document.querySelectorAll('.card, .btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    });
});

// 点击粒子特效
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const particles = document.createElement('div');
        particles.className = 'particles';
        document.body.appendChild(particles);
        
        // 粒子动画
        setTimeout(() => {
            particles.remove();
        }, 1000);
    });
});

// 动态背景粒子
const canvas = document.createElement('canvas');
document.querySelector('.particles-background').appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 移动粒子
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    });
    requestAnimationFrame(animate);
}

animate();
