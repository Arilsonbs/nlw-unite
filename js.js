
let participantes = [
  {
    nome: "Carlos",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "pedro",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2021, 4, 7, 17, 15),
    dataCheckIn: null
  },
  {
    nome: "Fulano",
    email: "fulano@gmail.com",
    dataInscricao: new Date(2023, 7, 5, 10, 30),
    dataCheckIn: new Date(2023, 7, 17, 11, 45)
  },
  {
    nome: "Ciclano",
    email: "ciclano@hotmail.com",
    dataInscricao: new Date(2022, 11, 5, 14, 40),
    dataCheckIn: new Date(2022, 11, 10, 16, 20)
  },
  {
    nome: "Beltrano",
    email: "beltrano@yahoo.com",
    dataInscricao: new Date(2024, 0, 8, 8, 0),
    dataCheckIn: null
  },
  {
    nome: "Maria",
    email: "maria@hotmail.com",
    dataInscricao: new Date(2023, 2, 17, 13, 20),
    dataCheckIn: new Date(2023, 2, 20, 15, 45)
  },
  {
    nome: "João",
    email: "joao@gmail.com",
    dataInscricao: new Date(2022, 5, 12, 20, 10),
    dataCheckIn: new Date(2022, 5, 15, 22, 30)
  },
  {
    nome: "Pedro",
    email: "pedro@yahoo.com",
    dataInscricao: new Date(2023, 8, 25, 11, 50),
    dataCheckIn: new Date(2023, 8, 28, 13, 15)
  },
  {
    nome: "Ana",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 3, 2, 9, 30),
    dataCheckIn: null
  },
  {
    nome: "Carla",
    email: "carla@hotmail.com",
    dataInscricao: new Date(2022, 6, 30, 16, 50),
    dataCheckIn: new Date(2022, 7, 2, 18, 25)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
        Confirmar Check-In
       </button>  
    `
  }
     return ` 
     <tr>
          <td> <strong> ${participante.nome} </strong>
            <br> <small> ${participante.email} </small>
          </td>
          
          <td> ${dataInscricao}</td>
          <td> ${dataCheckIn}</td>
        </tr>
        `

      }

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  
  document.querySelector('tbody').innerHTML = output
}

atualizarLista (participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

const dadosDoFormulario = new FormData(event.target)

const participante = {
  nome: dadosDoFormulario.get('nome'),
  email: dadosDoFormulario.get('email'),
  dataInscricao: new Date (),
  dataCheckIn: null
}


  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email
  }
  )
    if(participanteExiste){
      alert('E-mail já cadastrado!')
      return
    }


  participantes =[participante, ...participantes]
  atualizarLista(participantes)


  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}




  const fazerCheckIn = (event) => {

    const mensagemConfirmacao = 'Tem certeza que desejar realizar o Check-In?'
    if(confirm(mensagemConfirmacao) == false){
      return
    }

    const participante = participantes.find((p) => {
      return p.email == event.target.dataset.email
    })

    participante.dataCheckIn = new Date()

    atualizarLista(participantes)

  }