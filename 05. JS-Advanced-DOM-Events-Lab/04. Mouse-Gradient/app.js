function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    
    gradient.addEventListener('mousemove', (event) => {
        const x = event.offsetX;
        const percent = Math.floor((x / gradient.clientWidth) * 100);
        result.textContent = `${percent}%`;
    });
    
    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    })
    }