function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//exercicio 1
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let dias = document.getElementById("days");

function calendario() {
  for (index of decemberDaysList) {
    todosOsDias = index;
  }
  let diasListados = document.createElement("li");

  if (todosOsDias === 25) {
    diasListados.className = "holiday friday";
    dias.appendChild(diasListados);
  } else if (todosOsDias === 24 || todosOsDias === 31) {
    diasListados.classNAme = "holiday";
    dias.appendChild(diasListados);
  } else if (todosOsDias === 4 || todosOsDias === 11 || todosOsDias === 18) {
    diasListados.className = "friday";
  }else {
    dias.appendChild(diasListados)
  }
  diasListados.innerText = todosOsDias;
}
