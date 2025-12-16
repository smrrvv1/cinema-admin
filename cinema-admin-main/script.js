const showFilmsBtn = document.getElementById('show-films-btn')
const addFilmBtn = document.getElementById('add-film-btn')
const searchFilmBtn = document.getElementById('search-film-btn')
const markFilmBtn = document.getElementById('mark-film-btn')
const contentBlock = document.getElementById('content')

const movies = [
  { title: 'Inception', isAvailable: true },
  { title: 'The Dark Knight', isAvailable: true },
  { title: 'Avatar', isAvailable: false },
  { title: 'Titanic', isAvailable: true },
  { title: 'Avengers: Endgame', isAvailable: false },
]

const clearContent = () =>{
    contentBlock.innerHTML = ''
};

const showFilms = () =>{
    clearContent();

    const moviesList = document.createElement('ul');
    contentBlock.append(moviesList);
    
    for (const movie of movies) {
        console.log(movie.title)
        const movieItem = document.createElement('li')
        movieItem.textContent = `${movie.title} - ${movie.isAvailable ? 'Доступен' : 'Не доступен'}`
        moviesList.append(movieItem);
    }
}

const showAddFilm = () => {
    clearContent()
    
    const form = document.createElement('div')
    
    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.placeholder = 'Название фильма'
    titleInput.style.width = '100%'
    titleInput.style.marginBottom = '10px'
    titleInput.style.padding = '8px'
    
    const addButton = document.createElement('button')
    addButton.textContent = 'Добавить'
    addButton.style.padding = '10px 20px'
    
    addButton.addEventListener('click', () => {
        const title = titleInput.value.trim()
        if (title) {
            movies.push({ title: title, isAvailable: true })
            showFilms()
        }
    })
    
    form.append(titleInput, addButton)
    contentBlock.append(form)
}


showFilmsBtn.addEventListener('click', showFilms)
addFilmBtn.addEventListener('click', showAddFilm)