document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.querySelector('#show-more-btn');
    const hiddenContent = document.querySelector('#hidden-content');

    showMoreBtn.addEventListener('click', () => {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
            showMoreBtn.textContent = 'Скрыть';
        } else {
            hiddenContent.style.display = 'none';
            showMoreBtn.textContent = 'Показать больше';
        }
    });
});
