/* =========================================================
   RICHARDSON MENDES 15800 — Liquid Glass interactions
   1) Arrastar o painel para cima/baixo (efeito Central de
      Notificações do iPhone, com resistência elástica).
   2) Brilho "líquido" que percorre o botão ao tocar.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1) PAINEL ARRASTÁVEL ESTILO NOTIFICAÇÕES DO IPHONE
  --------------------------------------------------------- */
  const sheet = document.getElementById("sheet");

  const DRAG_LIMIT_UP = 40;     // quanto o painel pode subir (px)
  const DRAG_LIMIT_DOWN = 90;   // quanto o painel pode "esticar" para baixo (px)
  const RESISTANCE = 0.45;      // efeito elástico (quanto menor, mais "preso")

  let startY = 0;
  let currentY = 0;
  let dragging = false;
  let pointerId = null;

  function clampWithResistance(delta) {
    if (delta > 0) {
      // puxando para baixo
      return Math.min(delta * RESISTANCE, DRAG_LIMIT_DOWN);
    }
    // empurrando para cima
    return Math.max(delta * RESISTANCE, -DRAG_LIMIT_UP);
  }

  function onPointerDown(e) {
    // Ignora se o toque começou em cima de um botão (deixa o clique do botão funcionar)
    if (e.target.closest(".glass-btn")) return;

    dragging = true;
    pointerId = e.pointerId;
    startY = e.clientY;
    sheet.classList.add("dragging");
    sheet.setPointerCapture(pointerId);
  }

  function onPointerMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    currentY = e.clientY - startY;
    const offset = clampWithResistance(currentY);
    sheet.style.transform = `translateY(${offset}px)`;
  }

  function onPointerUp(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    dragging = false;
    sheet.classList.remove("dragging");
    sheet.style.transform = "translateY(0px)";
    currentY = 0;
  }

  sheet.addEventListener("pointerdown", onPointerDown);
  sheet.addEventListener("pointermove", onPointerMove);
  sheet.addEventListener("pointerup", onPointerUp);
  sheet.addEventListener("pointercancel", onPointerUp);

  /* ---------------------------------------------------------
     2) BRILHO LÍQUIDO AO TOCAR NOS BOTÕES
  --------------------------------------------------------- */
  const buttons = document.querySelectorAll(".glass-btn");

  buttons.forEach((btn) => {
    const trigger = () => {
      btn.classList.remove("animate-sheen");
      // força reflow para permitir reexecutar a animação
      void btn.offsetWidth;
      btn.classList.add("animate-sheen");
    };

    btn.addEventListener("pointerdown", trigger);

    btn.addEventListener("click", (e) => {
      // Links ainda não configurados: evita navegação quebrada.
      // Troque data-target pelo link real de cada seção quando estiver pronto.
      const target = btn.getAttribute("data-target");
      if (btn.getAttribute("href") === "#") {
        e.preventDefault();
        console.log("Botão tocado:", target, "— defina o link real em index.html");
      }
    });
  });
})();
