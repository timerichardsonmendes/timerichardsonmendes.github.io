document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('draggableContainer');
    
    let isDragging = false;
    let startY = 0;
    let currentY = 0;
    let dragY = 0;

    // Fator de resistência elástica (Rubber-band effect)
    const resistance = 0.35;

    // Eventos Pointer
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    function onPointerDown(e) {
        // Evita interferir no clique caso o usuário clique em um link/botão diretamente sem arrastar
        isDragging = true;
        startY = e.clientY;
        container.style.transition = 'none'; // Desativa transição para resposta instantânea ao arrasto
    }

    function onPointerMove(e) {
        if (!isDragging) return;

        const deltaY = e.clientY - startY;
        
        // Aplica resistência de borracha à distância percorrida
        dragY = deltaY * resistance;

        // Move a tela verticalmente
        container.style.transform = `translate3d(0, ${dragY}px, 0)`;
    }

    function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;

        // Animação de retorno elástico suave (estilo iOS)
        container.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        container.style.transform = 'translate3d(0, 0, 0)';
        
        dragY = 0;
    }
});
