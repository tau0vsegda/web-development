let column = [1, 2, 3, 4]

function onLeft() {

  for (let index = 0; index <= 3; index++) {

    column[index]--;
    if (column[index] == -1) {
      column[index] = 9;
    }

    document.getElementById("i" + (index + 1)).src = images[column[index]];
    document.getElementById("n" + (index + 1)).innerText = names[column[index]];
    document.getElementById("d" + (index + 1)).innerText = descriptions[column[index]];

  }

}

function onRight() {

  for (let index = 0; index <= 3; index++) {
    column[index]++;
    if (column[index] == 10) {
      column[index] = 0;
    }
  }
    /*document.getElementById("i" + (index + 1)).src = images[column[index]];
    document.getElementById("n" + (index + 1)).innerText = names[column[index]];
    document.getElementById("d" + (index + 1)).innerText = descriptions[column[index]]; */
  }

}