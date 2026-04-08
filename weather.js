const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

const apiKey = '1c95139e8fe15a7afb49de020f701cfd'

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