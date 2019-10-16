const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfTitles = function () {
  const actual = this.films.map((film) => {
    return film.title;
});
}

Cinema.prototype.findFilmByTitle = function (title) {
  return films.title.filter((findFilmByTitle => {
  return findFilmByTitle;
  });

};
module.exports = Cinema;
