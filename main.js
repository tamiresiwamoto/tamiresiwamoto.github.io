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
    createGame("senegal", hour13, "netherlands")
  ) +
  createCard(
    "grupoA",
    "25/11",
    "sexta",
    createGame("qatar", hour10, "senegal") +
      createGame("netherlands", hour13, "ecuador")
  ) +
  createCard(
    "grupoA",
    "29/11",
    "terça",
    createGame("netherlands", hour12, "qatar") +
      createGame("ecuador", hour12, "senegal")
  )
delay = 0

let grupoB =
  createCard(
    "grupoB",
    "21/11",
    "segunda",
    createGame("england", "6 X 2", "iran") +
      createGame("united states", hour16, "wales")
  ) +
  createCard(
    "grupoB",
    "25/11",
    "sexta",
    createGame("wales", hour7, "iran") +
      createGame("england", hour16, "united states")
  ) +
  createCard(
    "grupoB",
    "29/11",
    "terça",
    createGame("iran", hour16, "united states") +
      createGame("wales", hour16, "england")
  )
delay = 0

let grupoC =
  createCard(
    "grupoC",
    "22/11",
    "terça",
    createGame("argentina", hour7, "saudi arabia") +
      createGame("mexico", hour13, "poland")
  ) +
  createCard(
    "grupoC",
    "26/11",
    "sábado",
    createGame("poland", hour10, "saudi arabia") +
      createGame("argentina", hour16, "mexico")
  ) +
  createCard(
    "grupoC",
    "30/11",
    "quarta",
    createGame("poland", hour16, "argentina") +
      createGame("saudi arabia", hour16, "mexico")
  )
delay = 0

let grupoD =
  createCard(
    "grupoD",
    "22/11",
    "terça",
    createGame("denmark", hour10, "tunisia") +
      createGame("france", hour16, "australia")
  ) +
  createCard(
    "grupoD",
    "26/11",
    "sábado",
    createGame("tunisia", hour7, "australia") +
      createGame("france", hour13, "denmark")
  ) +
  createCard(
    "grupoD",
    "30/11",
    "quarta",
    createGame("tunisia", hour12, "france") +
      createGame("australia", hour12, "denmark")
  )
delay = 0

let grupoE =
  createCard(
    "grupoE",
    "23/11",
    "quarta",
    createGame("germany", hour10, "japan") +
      createGame("spain", hour13, "costa rica")
  ) +
  createCard(
    "grupoE",
    "27/11",
    "domingo",
    createGame("japan", hour7, "costa rica") +
      createGame("spain", hour16, "germany")
  ) +
  createCard(
    "grupoE",
    "01/12",
    "quinta",
    createGame("japan", hour16, "spain") +
      createGame("costa rica", hour16, "germany")
  )
delay = 0

let grupoF =
  createCard(
    "grupoF",
    "23/11",
    "quarta",
    createGame("morocco", hour7, "croatia") +
      createGame("belgium", hour16, "canada")
  ) +
  createCard(
    "grupoF",
    "27/11",
    "domingo",
    createGame("belgium", hour10, "morocco") +
      createGame("croatia", hour13, "canada")
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
    createGame("switzerland", hour7, "cameroon") +
      createGame("brasil", hour16, "serbia")
  ) +
  createCard(
    "groupG",
    "28/11",
    "segunda",
    createGame("cameroon", hour7, "serbia") +
      createGame("brasil", hour13, "switzerland")
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
    createGame("uruguay", hour10, "south korea") +
      createGame("portugal", hour13, "ghana")
  ) +
  createCard(
    "grupoH",
    "28/11",
    "segunda",
    createGame("south korea", hour10, "ghana") +
      createGame("portugal", hour16, "uruguay")
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
    createGame("senegal", hour13, "netherlands") +
    createGame("united states", hour16, "wales")
)
delay = 0
let novembro22 = createCard(
  "grupoA",
  "22/11",
  "terça",
  createGame("argentina", hour7, "saudi arabia") +
    createGame("denmark", hour10, "tunisia") +
    createGame("mexico", hour13, "poland") +
    createGame("france", hour16, "australia")
)
delay = 0
let novembro23 = createCard(
  "grupoA",
  "23/11",
  "quarta",
  createGame("morocco", hour7, "croatia") +
    createGame("germany", hour10, "japan") +
    createGame("spain", hour13, "costa rica") +
    createGame("belgium", hour16, "canada")
)
delay = 0
let novembro24 = createCard(
  "grupoA",
  "24/11",
  "quinta",
  createGame("switzerland", hour7, "cameroon") +
    createGame("uruguay", hour10, "south korea") +
    createGame("portugal", hour13, "ghana") +
    createGame("brasil", hour16, "serbia")
)
delay = 0
let novembro25 = createCard(
  "grupoA",
  "25/11",
  "sexta",
  createGame("wales", hour7, "iran") +
    createGame("qatar", hour10, "senegal") +
    createGame("netherlands", hour13, "ecuador") +
    createGame("england", hour16, "united states")
)
delay = 0
let novembro26 = createCard(
  "grupoA",
  "26/11",
  "sábado",
  createGame("tunisia", hour7, "australia") +
    createGame("poland", hour10, "saudi arabia") +
    createGame("france", hour13, "denmark") +
    createGame("argentina", hour16, "mexico")
)
delay = 0
let novembro27 = createCard(
  "grupoA",
  "27/11",
  "domingo",
  createGame("japan", hour7, "costa rica") +
    createGame("belgium", hour10, "morocco") +
    createGame("croatia", hour13, "canada") +
    createGame("spain", hour16, "germany")
)
delay = 0
let novembro28 = createCard(
  "grupoA",
  "28/11",
  "segunda",
  createGame("cameroon", hour7, "serbia") +
    createGame("south korea", hour10, "ghana") +
    createGame("brasil", hour13, "switzerland") +
    createGame("portugal", hour16, "uruguay")
)
delay = 0
let novembro29 = createCard(
  "grupoA",
  "29/11",
  "terça",
  createGame("ecuador", hour12, "senegal") +
    createGame("netherlands", hour12, "qatar") +
    createGame("iran", hour16, "united states") +
    createGame("wales", hour16, "england")
)
delay = 0
let novembro30 = createCard(
  "grupoA",
  "30/11",
  "quarta",
  createGame("tunisia", hour12, "france") +
    createGame("australia", hour12, "denmark") +
    createGame("poland", hour16, "argentina") +
    createGame("saudi arabia", hour16, "mexico")
)
delay = 0
let dezembro01 = createCard(
  "grupoA",
  "01/12",
  "quinta",
  createGame("croatia", hour12, "belgium") +
    createGame("canada", hour12, "morocco") +
    createGame("japan", hour16, "spain") +
    createGame("costa rica", hour16, "germany")
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
