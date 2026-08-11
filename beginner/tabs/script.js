const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {

    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('hidden', 'true');
    });


    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');

   
    const targetPanelId = button.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);

    targetPanel.classList.add('active');
    targetPanel.removeAttribute('hidden');
  });
});