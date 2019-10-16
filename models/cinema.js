const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfTitles = function () {
  const actual = this.films.map((film) => {
    return film.title;
});
}

Cinema.prototype.findFilmByTitle = function (title) {
  let foundTitle = ""
  const actual = this.films.find((title) => {
    return title = foundTitle
  })
};
module.exports = Cinema;
