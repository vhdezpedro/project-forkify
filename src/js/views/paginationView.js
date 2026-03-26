import View from './View';
const icons = new URL('../../img/icons.svg', import.meta.url).href;

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );
    /* Revisar el pagination se salta las paginas */
    console.log(currPage, numPages);

    if (currPage === 1 && numPages === 1) {
      return '';
    } else if (currPage === 1 && numPages > 1) {
      return `
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
          <span>${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    } else if (currPage > 1 || currPage < numPages) {
      return `
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
          <span>${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>${currPage - 1}</span>
        </button>
      `;
    }
    if (currPage === numPages) {
      return `
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>${currPage - 1}</span>
        </button>
      `;
    }
  }
}

export const paginationView = new PaginationView();
