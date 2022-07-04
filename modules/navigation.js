/* eslint-disable import/extensions */

export default class Navigation {
  constructor() {
    this.allSection = document.querySelectorAll('.section');
    this.allLinks = document.querySelector('.nav-links');
    this.year = document.querySelector('.date');
  }

  navigate() {
    this.allLinks.addEventListener('click', (e) => {
      const clicked = e.target;
      if (!clicked.classList.contains('link')) return;
      this.allSection.forEach((section) => {
        section.classList.remove('active');
      });
      document
        .querySelector(`.section-${clicked.dataset.link}`)
        .classList.add('active');
    });
  }
}

// export default new Navigation();
