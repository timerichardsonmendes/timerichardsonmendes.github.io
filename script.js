document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('draggableContainer');
    
    let isDragging = false;
    let startY = 0;
    const resistance = 0.35;

    container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startY = e.clientY;
        container.style.transition = 'none';
    });

    window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY;
        container.style.transform = `translate3d(0, ${deltaY * resistance}px, 0)`;
    });

    const resetPosition = () => {
        if (!isDragging) return;
        isDragging = false;
        container.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        container.style.transform = 'translate3d(0, 0, 0)';
    };

    window.addEventListener('pointerup', resetPosition);
    window.addEventListener('pointercancel', resetPosition);
});
