const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        console.log(searchInput.value);
        searchInput.value = '';
        searchInput.blur();
    }
})

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
        console.log(searchInput.value);
        searchInput.value = '';
        searchInput.blur();
    }
})