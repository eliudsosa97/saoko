const boton = document.getElementById('btn');

const irParticipantes = () => {
    irCargar()
    const localData = JSON.parse(localStorage.getItem("users"))
    localData && localData.time > Date.now() ?
    imprimirPart(localData.content) :
        irParticipantesApi()
}

const irParticipantesApi = () => {
    fetch("https://reqres.in/api/users?delay=2")
        .then(response => response.json())
        .then(participantes => {
            imprimirPart(participantes.data)
            guardarLocalStorage(participantes.data)
        })
}

const imprimirCargar= () => 
`<div class="container-sm">
    <div class="row justify-content-center">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-4 text-center">
            <img ></img>
        </div>
    <div/>
</div>`

const irCargar = () => {
    const container = document.getElementById("users-container")
    container.innerHTML = imprimirCargar()
}

const imprimirParticipante = ({ avatar, id, email, first_name, last_name }) => {
    return `<div class="row border-bottom p-2">
                <div class="col-md-1 justify-content-center">
                    <p class="text-center">${id}</p>
                </div>
                <div class="col-md-4 justify-content-center">
                    <p class="text-center"><a href='#'>${email}</a></p>
                </div>
                <div class="col-md-3 justify-content-center">
                    <p class="text-center">${first_name}</p>
                </div>
                <div class="col-md-3 justify-content-center">
                    <p class="text-center"> ${last_name}</p>
                </div>
                <div class="col-md-1 justify-content-center text-center">
                    <img 
                        src="${avatar}"
                        class="rounded-circle mx-auto"
                        style="width: 50px"
                    ></img>
                </div>
            <div/>`
}

const part1= 
    `<div class="row border-bottom border-1 border-dark" >
        <div class="col-md-1 justify-content-center">
            <p class="text-center"><b>Id</b></p>
        </div>
        <div class="col-md-4 justify-content-center">
            <p class="text-center"><b>Email</b></p>
        </div>
        <div class="col-md-3 justify-content-center">
            <p class="text-center"><b>First name</b></p>
        </div>
        <div class="col-md-3 justify-content-center">
            <p class="text-center"><b>Last name</b></p>
        </div>
        <div class="col-md-1 justify-content-center">
            <p class="text-center"><b>Image</b></p>
        </div>
    </div>`

const imprimirPart = (participantes) => {
    const container = document.getElementById("users-container")
    container.innerHTML = part1
    participantes.forEach(u => container.innerHTML += imprimirParticipante(u))
}

const guardarLocalStorage = data => {
    const participantes = {
        content: [...data],
        time: Date.now() + 60000
    }
    localStorage.setItem('users', JSON.stringify(participantes))
}

boton.addEventListener("click", irParticipantes)