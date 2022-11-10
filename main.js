function createGame(player1, hour, player2) {
  return `
    <li>
      <span class="tooltip">
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <span class="tooltiptext">${player1}</span>
      </span>
        <strong class="hour">${hour}</strong>
      <span class="tooltip">
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        <span class="tooltiptext">${player2}</span>
      </span>
    </li>
 
  `
}

// ;<div class="tooltip">
//   <img src="joe.jpg" />
//   <span class="tooltiptext">Tooltip text</span>
// </div>

let delay = 0

function createCard(group, date, day, games) {
  delay += 0.2
  return `
    <div class="card ${group}" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

function createCardAbertura(title, date, day, games) {
  delay += 0.2
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h3>${title}</h3>
      <h2 class="card-abertura">${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

let abertura = createCardAbertura(
  "ABERTURA",
  "20/11",
  "domingo",
  createGame("qatar", "13:00", "ecuador")
)

document.querySelector("#cards").innerHTML = abertura

let grupoA =
  createCard(
    "grupoA",
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "grupoA",
    "25/11",
    "sexta",
    createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador")
  ) +
  createCard(
    "grupoA",
    "29/11",
    "terça",
    createGame("netherlands", "12:00", "qatar") +
      createGame("ecuador", "12:00", "senegal")
  )
delay = 0

let grupoB =
  createCard(
    "grupoB",
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "wales")
  ) +
  createCard(
    "grupoB",
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("england", "16:00", "united states")
  ) +
  createCard(
    "grupoB",
    "29/11",
    "terça",
    createGame("iran", "16:00", "united states") +
      createGame("wales", "16:00", "england")
  )
delay = 0

let grupoC =
  createCard(
    "grupoC",
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createCard(
    "grupoC",
    "26/11",
    "sábado",
    createGame("poland", "10:00", "saudi arabia") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "grupoC",
    "30/11",
    "quarta",
    createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  )
delay = 0

let grupoD =
  createCard(
    "grupoD",
    "22/11",
    "terça",
    createGame("denmark", "10:00", "tunisia") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "grupoD",
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("france", "13:00", "denmark")
  ) +
  createCard(
    "grupoD",
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark")
  )
delay = 0

let grupoE =
  createCard(
    "grupoE",
    "23/11",
    "quarta",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica")
  ) +
  createCard(
    "grupoE",
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "grupoE",
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  )
delay = 0

let grupoF =
  createCard(
    "grupoF",
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "croatia") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "grupoF",
    "27/11",
    "domingo",
    createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada")
  ) +
  createCard(
    "grupoF",
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco")
  )
delay = 0

let grupoG =
  createCard(
    "groupG",
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brasil", "16:00", "serbia")
  ) +
  createCard(
    "groupG",
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brasil", "13:00", "switzerland")
  ) +
  createCard(
    "groupG",
    "02/12",
    "sexta",
    createGame("brasil", "16:00", "cameroon") +
      createGame("serbia", "16:00", "switzerland")
  )
delay = 0

let grupoH =
  createCard(
    "grupoH",
    "24/11",
    "quinta",
    createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "grupoH",
    "28/11",
    "segunda",
    createGame("south korea", "10:00", "ghana") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "grupoH",
    "02/12",
    "sexta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay")
  )
delay = 0

function criarGrupo(evt) {
  if (evt.target.value === "SELECIONE O GRUPO") {
    document.querySelector("#cards").innerHTML = abertura
  }

  if (evt.target.value === "GRUPO A") {
    document.querySelector("#cards").innerHTML = grupoA
  }

  if (evt.target.value === "GRUPO B") {
    document.querySelector("#cards").innerHTML = grupoB
  }

  if (evt.target.value === "GRUPO C") {
    document.querySelector("#cards").innerHTML = grupoC
  }

  if (evt.target.value === "GRUPO D") {
    document.querySelector("#cards").innerHTML = grupoD
  }

  if (evt.target.value === "GRUPO E") {
    document.querySelector("#cards").innerHTML = grupoE
  }

  if (evt.target.value === "GRUPO F") {
    document.querySelector("#cards").innerHTML = grupoF
  }

  if (evt.target.value === "GRUPO G") {
    document.querySelector("#cards").innerHTML = grupoG
  }

  if (evt.target.value === "GRUPO H") {
    document.querySelector("#cards").innerHTML = grupoH
  }
}
