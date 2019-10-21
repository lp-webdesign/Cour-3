import Isotope from 'isotope-layout';

export function sort() {
    var elem = document.querySelector('.grid');

    var iso = new Isotope( elem, {
      itemSelector: '.grid-item',
      getSortData: {
        category: '[data-category]',
      },
      sortBy: 'category',
      percentPosition: true,
      layoutMode: 'masonry'
    });
};