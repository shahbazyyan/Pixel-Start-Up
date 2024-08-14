"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const pixelsSection = document.querySelector(".pixels");
  for (let i = 0; i < 20000; i++) {
    const pixelCell = document.createElement("div");
    pixelCell.classList.add("pixel-cell");
    pixelsSection.appendChild(pixelCell);
  };

  document.getElementById("buyPixelsBtn").addEventListener("click", () => openModal('buyPixelsModal'));
  document.getElementById("howItWorksBtn").addEventListener("click", () => openModal('howItWorksModal'));
  document.getElementById("contactBtn").addEventListener("click", () => openModal('contactModal'));
  // Add this to your existing JavaScript code
  document.getElementById("pixelModelBtn").addEventListener("click", () => openModal('pixelModelModal'));
  document.getElementById("closePixelModel").addEventListener("click", () => closeModal('pixelModelModal'));


  document.getElementById("cancelBuyPixels").addEventListener("click", () => closeModal('buyPixelsModal'));
  document.getElementById("confirmBuyPixels").addEventListener("click", buyPixels);

  document.getElementById("closeHowItWorks").addEventListener("click", () => closeModal('howItWorksModal'));

  document.getElementById("cancelContact").addEventListener("click", () => closeModal('contactModal'));
  document.getElementById("submitContact").addEventListener("click", submitContactForm);

  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  function buyPixels() {
    closeModal('buyPixelsModal');
  }

  function submitContactForm() {
    closeModal('contactModal');
  }

  let isMouseDown = false;
  let selectedPixels = [];
  const pixelsSectionModal = document.querySelector(".pixels-box");
  const price = document.querySelector(".price-modal");

  for (let i = 0; i < 15000; i++) {
    const pixelCellModal = document.createElement("div");
    pixelCellModal.classList.add("pixel-cell-modal");
    pixelsSectionModal.appendChild(pixelCellModal);

    pixelCellModal.addEventListener("mousedown", (event) => {
      isMouseDown = true;
      togglePixelSelection(pixelCellModal);
      updatePrice();
    });

    pixelCellModal.addEventListener("mouseover", () => {
      if (isMouseDown) {
        togglePixelSelection(pixelCellModal);
        updatePrice();
      }
    });
  }

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  function togglePixelSelection(pixelCellModal) {
    const index = selectedPixels.indexOf(pixelCellModal);
    if (index === -1) {
      selectedPixels.push(pixelCellModal);
      pixelCellModal.classList.add("selected");
    } else {
      selectedPixels.splice(index, 1);
      pixelCellModal.classList.remove("selected");
    }
  }

  function updatePrice() {
    price.textContent = selectedPixels.length * 100;
  }




});







