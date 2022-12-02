// let offset = new Date().getTimezoneOffset()
// console.log(offset)
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
console.log(timezone)

let hour7 = "07:00"
let hour10 = "10:00"
let hour12 = "12:00"
let hour13 = "13:00"
let hour16 = "16:00"

if (timezone === "America/Sao_Paulo") {
  hour7 = "07:00"
  hour10 = "10:00"
  hour12 = "12:00"
  hour13 = "13:00"
  hour16 = "16:00"
}

if (timezone === "Europe/Lisbon") {
  hour7 = "10:00"
  hour10 = "13:00"
  hour12 = "15:00"
  hour13 = "16:00"
  hour16 = "19:00"
}

if (timezone === "Europe/Berlin") {
  hour7 = "11:00"
  hour10 = "14:00"
  hour12 = "16:00"
  hour13 = "17:00"
  hour16 = "20:00"
}

if (timezone === "America/New_York") {
  hour7 = "05:00"
  hour10 = "08:00"
  hour12 = "10:00"
  hour13 = "11:00"
  hour16 = "14:00"
}

if (timezone === "America/Toronto") {
  hour7 = "05:00"
  hour10 = "08:00"
  hour12 = "10:00"
  hour13 = "11:00"
  hour16 = "14:00"
}

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
  createGame("qatar", "0 X 2", "ecuador")
)

document.querySelector("#cards").innerHTML = abertura

let grupoA =
  createCard(
    "grupoA",
    "21/11",
    "segunda",
    createGame("senegal", "0 X 2", "netherlands")
  ) +
  createCard(
    "grupoA",
    "25/11",
    "sexta",
    createGame("qatar", "1 X 3", "senegal") +
      createGame("netherlands", "1 X 1", "ecuador")
  ) +
  createCard(
    "grupoA",
    "29/11",
    "terça",
    createGame("netherlands", "2 X 0", "qatar") +
      createGame("ecuador", "1 X 2", "senegal")
  )
delay = 0

let grupoB =
  createCard(
    "grupoB",
    "21/11",
    "segunda",
    createGame("england", "6 X 2", "iran") +
      createGame("united states", "1 X 1", "wales")
  ) +
  createCard(
    "grupoB",
    "25/11",
    "sexta",
    createGame("wales", "0 X 2", "iran") +
      createGame("england", "0 X 0", "united states")
  ) +
  createCard(
    "grupoB",
    "29/11",
    "terça",
    createGame("iran", "0 X 1", "united states") +
      createGame("wales", "0 X 3", "england")
  )
delay = 0

let grupoC =
  createCard(
    "grupoC",
    "22/11",
    "terça",
    createGame("argentina", "1 X 2", "saudi arabia") +
      createGame("mexico", "0 X 0", "poland")
  ) +
  createCard(
    "grupoC",
    "26/11",
    "sábado",
    createGame("poland", "2 X 0", "saudi arabia") +
      createGame("argentina", "2 X 0", "mexico")
  ) +
  createCard(
    "grupoC",
    "30/11",
    "quarta",
    createGame("poland", "0 X 2", "argentina") +
      createGame("saudi arabia", "1 X 2", "mexico")
  )
delay = 0

let grupoD =
  createCard(
    "grupoD",
    "22/11",
    "terça",
    createGame("denmark", "0 X 0", "tunisia") +
      createGame("france", "4 X 1", "australia")
  ) +
  createCard(
    "grupoD",
    "26/11",
    "sábado",
    createGame("tunisia", "0 X 1", "australia") +
      createGame("france", "2 X 1", "denmark")
  ) +
  createCard(
    "grupoD",
    "30/11",
    "quarta",
    createGame("tunisia", "1 X 0", "france") +
      createGame("australia", "1 X 0", "denmark")
  )
delay = 0

let grupoE =
  createCard(
    "grupoE",
    "23/11",
    "quarta",
    createGame("germany", "1 X 2", "japan") +
      createGame("spain", "7 X 0", "costa rica")
  ) +
  createCard(
    "grupoE",
    "27/11",
    "domingo",
    createGame("japan", "0 X 1", "costa rica") +
      createGame("spain", "1 X 1", "germany")
  ) +
  createCard(
    "grupoE",
    "01/12",
    "quinta",
    createGame("japan", "2 X 1", "spain") +
      createGame("costa rica", "2 X 4", "germany")
  )
delay = 0

let grupoF =
  createCard(
    "grupoF",
    "23/11",
    "quarta",
    createGame("morocco", "0 X 0", "croatia") +
      createGame("belgium", "1 X 0", "canada")
  ) +
  createCard(
    "grupoF",
    "27/11",
    "domingo",
    createGame("belgium", "0 X 2", "morocco") +
      createGame("croatia", "4 X 1", "canada")
  ) +
  createCard(
    "grupoF",
    "01/12",
    "quinta",
    createGame("croatia", hour12, "belgium") +
      createGame("canada", hour12, "morocco")
  )
delay = 0

let grupoG =
  createCard(
    "groupG",
    "24/11",
    "quinta",
    createGame("switzerland", "1 X 0", "cameroon") +
      createGame("brasil", "2 X 0", "serbia")
  ) +
  createCard(
    "groupG",
    "28/11",
    "segunda",
    createGame("cameroon", "3 X 3", "serbia") +
      createGame("brasil", "1 X 0", "switzerland")
  ) +
  createCard(
    "groupG",
    "02/12",
    "sexta",
    createGame("brasil", hour16, "cameroon") +
      createGame("serbia", hour16, "switzerland")
  )
delay = 0

let grupoH =
  createCard(
    "grupoH",
    "24/11",
    "quinta",
    createGame("uruguay", "0 X 0", "south korea") +
      createGame("portugal", "3 X 2", "ghana")
  ) +
  createCard(
    "grupoH",
    "28/11",
    "segunda",
    createGame("south korea", "2 X 3", "ghana") +
      createGame("portugal", "2 X 0", "uruguay")
  ) +
  createCard(
    "grupoH",
    "02/12",
    "sexta",
    createGame("south korea", hour12, "portugal") +
      createGame("ghana", hour12, "uruguay")
  )
delay = 0

function criarGrupo(evt) {
  if (evt.target.value === "GRUPO") {
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

// criar por data

let novembro20 = createCard(
  "grupoA",
  "20/11",
  "domingo",
  createGame("qatar", "0 X 2", "ecuador")
)
delay = 0
let novembro21 = createCard(
  "grupoA",
  "21/11",
  "segunda",
  createGame("england", "6 X 2", "iran") +
    createGame("senegal", "0 X 2", "netherlands") +
    createGame("united states", "1 X 1", "wales")
)
delay = 0
let novembro22 = createCard(
  "grupoA",
  "22/11",
  "terça",
  createGame("argentina", "1 X 2", "saudi arabia") +
    createGame("denmark", "0 X 0", "tunisia") +
    createGame("mexico", "0 X 0", "poland") +
    createGame("france", "4 X 1", "australia")
)
delay = 0
let novembro23 = createCard(
  "grupoA",
  "23/11",
  "quarta",
  createGame("morocco", "0 X 0", "croatia") +
    createGame("germany", "1 X 2", "japan") +
    createGame("spain", "7 X 0", "costa rica") +
    createGame("belgium", "1 X 0", "canada")
)
delay = 0
let novembro24 = createCard(
  "grupoA",
  "24/11",
  "quinta",
  createGame("switzerland", "1 X 0", "cameroon") +
    createGame("uruguay", "0 X 0", "south korea") +
    createGame("portugal", "3 X 2", "ghana") +
    createGame("brasil", "2 X 0", "serbia")
)
delay = 0
let novembro25 = createCard(
  "grupoA",
  "25/11",
  "sexta",
  createGame("wales", "0 X 2", "iran") +
    createGame("qatar", "1 X 3", "senegal") +
    createGame("netherlands", "1 X 1", "ecuador") +
    createGame("england", "0 X 0", "united states")
)
delay = 0
let novembro26 = createCard(
  "grupoA",
  "26/11",
  "sábado",
  createGame("tunisia", "0 X 1", "australia") +
    createGame("poland", "2 X 0", "saudi arabia") +
    createGame("france", "2 X 0", "denmark") +
    createGame("argentina", "2 X 0", "mexico")
)
delay = 0
let novembro27 = createCard(
  "grupoA",
  "27/11",
  "domingo",
  createGame("japan", "0 X 1", "costa rica") +
    createGame("belgium", "0 X 2", "morocco") +
    createGame("croatia", "4 X 1", "canada") +
    createGame("spain", "1 X 1", "germany")
)
delay = 0
let novembro28 = createCard(
  "grupoA",
  "28/11",
  "segunda",
  createGame("cameroon", "3 X 3", "serbia") +
    createGame("south korea", "2 X 3", "ghana") +
    createGame("brasil", "1 X 0", "switzerland") +
    createGame("portugal", "2 X 0", "uruguay")
)
delay = 0
let novembro29 = createCard(
  "grupoA",
  "29/11",
  "terça",
  createGame("ecuador", "1 X 2", "senegal") +
    createGame("netherlands", "2 X 0", "qatar") +
    createGame("iran", "0 X 1", "united states") +
    createGame("wales", "0 X 3", "england")
)
delay = 0
let novembro30 = createCard(
  "grupoA",
  "30/11",
  "quarta",
  createGame("tunisia", "1 X 0", "france") +
    createGame("australia", "1 X 0", "denmark") +
    createGame("poland", "0 X 2", "argentina") +
    createGame("saudi arabia", "1 X 2", "mexico")
)
delay = 0
let dezembro01 = createCard(
  "grupoA",
  "01/12",
  "quinta",
  createGame("croatia", "0 X 0", "belgium") +
    createGame("canada", "1 X 2", "morocco") +
    createGame("japan", "2 X 1", "spain") +
    createGame("costa rica", "2 X 4", "germany")
)
delay = 0
let dezembro02 = createCard(
  "grupoA",
  "02/12",
  "sexta",
  createGame("south korea", hour12, "portugal") +
    createGame("ghana", hour12, "uruguay") +
    createGame("serbia", hour16, "switzerland") +
    createGame("cameroon", hour16, "brasil")
)

function criarData(evt) {
  if (evt.target.value === "DATA") {
    document.querySelector("#cards").innerHTML = abertura
  }
  if (evt.target.value === "20/11") {
    document.querySelector("#cards").innerHTML = novembro20
  }
  if (evt.target.value === "21/11") {
    document.querySelector("#cards").innerHTML = novembro21
  }
  if (evt.target.value === "22/11") {
    document.querySelector("#cards").innerHTML = novembro22
  }
  if (evt.target.value === "23/11") {
    document.querySelector("#cards").innerHTML = novembro23
  }
  if (evt.target.value === "24/11") {
    document.querySelector("#cards").innerHTML = novembro24
  }
  if (evt.target.value === "25/11") {
    document.querySelector("#cards").innerHTML = novembro25
  }
  if (evt.target.value === "26/11") {
    document.querySelector("#cards").innerHTML = novembro26
  }
  if (evt.target.value === "27/11") {
    document.querySelector("#cards").innerHTML = novembro27
  }
  if (evt.target.value === "28/11") {
    document.querySelector("#cards").innerHTML = novembro28
  }
  if (evt.target.value === "29/11") {
    document.querySelector("#cards").innerHTML = novembro29
  }
  if (evt.target.value === "30/11") {
    document.querySelector("#cards").innerHTML = novembro30
  }
  if (evt.target.value === "01/12") {
    document.querySelector("#cards").innerHTML = dezembro01
  }
  if (evt.target.value === "02/12") {
    document.querySelector("#cards").innerHTML = dezembro02
  }
}
