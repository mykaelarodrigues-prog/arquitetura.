document.addEventListener('DOMContentLoaded', () => {

  /* --- Menu Mobile --- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  /* --- Gráficos (Chart.js) --- */
  
  // Gráfico 1: Áreas de Atuação (Rosca)
  const ctxAreas = document.getElementById('areasChart');
  if (ctxAreas) {
    new Chart(ctxAreas, {
      type: 'doughnut',
      data: {
        labels: [
          'Projeto de Edificações',
          'Design de Interiores',
          'Planejamento Urbano',
          'Paisagismo',
          'Restauro / Patrimônio'
        ],
        datasets: [{
          data: [45, 20, 15, 12, 8],
          backgroundColor: [
            '#c2593f',
            '#2c3e50',
            '#e67e22',
            '#27ae60',
            '#95a5a6'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              font: { family: 'Plus Jakarta Sans' }
            }
          }
        }
      }
    });
  }

  // Gráfico 2: Competências Tecnológicas (Barras)
  const ctxTech = document.getElementById('techChart');
  if (ctxTech) {
    new Chart(ctxTech, {
      type: 'bar',
      data: {
        labels: ['BIM (Revit/ArchiCAD)', 'Modelagem 3D', 'Sustentabilidade/LEED', 'Gestão de Obras'],
        datasets: [{
          label: 'Nível de Relevância no Mercado (%)',
          data: [92, 85, 78, 70],
          backgroundColor: '#c2593f',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  /* --- Modal de Zoom da Galeria --- */
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.querySelector('.modal-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const captionText = item.getAttribute('data-caption');

      if (modal && modalImg && modalCaption) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        modalCaption.textContent = captionText;
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
