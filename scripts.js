filterObjects('all');

const boxes = Array.from(document.querySelectorAll('.btn'));

boxes.forEach( box => {
  box.addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;
    filterObjects(target.dataset.keyword);
  })
})

function filterObjects(c) {
  let x, index;
  x = Array.from(document.querySelectorAll('.box'));
  // si la valeur c est égale à "all" donc on c est vide
  c == "all" ? c = "" : null;

  for (index = 0; index < x.length; index++) {
    //const element = x[index];
    //on appel la fonction removeClass(element, class)
    removeClass(x[index], "show");
    
    // si la class de l'élément est la même que c, on déclenche la fonction addClass(element, class)
    x[index].className.indexOf(c) > -1 ? addClass(x[index], "show") : null;

  }

}

function addClass(element, name) {
  let index, arr1, arr2;

  // on affecte a arr1 = element
  arr1 = element.className.split(' ');
  // on affecte a arr2 = name
  arr2 = name.split(' ');
  console.log(arr1, arr2);
  for (index = 0; index < arr2.length; index++) {
    //const element = arr2[index];
    if(arr1.indexOf(arr2[index] == -1)) {
      element.className += " " + arr2[index];
    }
  }
}

function removeClass(element, name) {
  let index, arr1, arr2;

  // on affecte a arr1 = element
  arr1 = element.className.split(' ');
  // on affecte a arr2 = name
  arr2 = name.split(' ');
  //console.log(arr1, arr2);
  for (index = 0; index < arr2.length; index++) {
    // const element = arr2[index];
    while (arr1.indexOf(arr2[index]) > -1 ) {
        arr1.splice(arr1.indexOf(arr2[index]), 1);
    }
  }

  element.className = arr1.join(' ');
}

