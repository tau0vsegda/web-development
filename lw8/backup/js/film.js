const numberOfFilms = 10;
let column = [1, 2, 3, 4]

function onLeft() {
  for (let index = 1; index <= numberOfFilms; index++) {
    document.getElementById("film_" + index).className = "invisible_film";
  }
  for (let index = 0; index <= 3; index++) {
    column[index]--;
    if (column[index] == 0) {
      column[index] = numberOfFilms;
    }
    document.getElementById("film_" + column[index]).className = "visible_film_" + (index+1);
  }
}

function onRight() {
  for (let index = 1; index <= numberOfFilms; index++) {
    document.getElementById("film_" + index).className = "invisible_film";
  }
  for (let index = 0; index <= 3; index++) {
    column[index]++;
    if (column[index] == numberOfFilms + 1) {
      column[index] = 1;
    }
    document.getElementById("film_" + column[index]).className = "visible_film_" + (index+1);
  }
}
