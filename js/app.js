// Utizizzando i dati forniti creare un arry di oggetti per rappresentare i membri del team
// MILESTONE 0 creare l'array di oggetti
// MILESTONE 1 stampare su console per ogni membro le informazioni 
// MILESTONE 2 stampare le stesse informazioni nel DOM come stringhe
// BONUS 1 trasformare la stringa foto in un immagine effettiva
// BONUS 2 organizzare i singoli membri in card/schede

// MILESTONE 0
// inizializzazione della variabile array vuota
const teamMembers = []; //array

// inserimento dei dati tramite funzione
    //richiamo la funzione che popola l'oggetto passando come parametri i dati che abbiamo in tabella
        //dichiaro per ogni elemento che devo inserire una variabile
        const wayne = generateTeamMember('Wayne Barnett', 'Founder & CEO', './css/img/wayne-barnett-founder-ceo.jpg' ); //object
        const angelaC = generateTeamMember('Angela Caroll', 'Chief Editor', './css/img/angela-caroll-chief-editor.jpg' ); //object
        const walter = generateTeamMember('Walter Gordon', 'Office Manager', './css/img/walter-gordon-office-manager.jpg' ); //object
        const angelaL = generateTeamMember('Angela Lopez', 'Social Media Manager', './css/img/angela-lopez-social-media-manager.jpg' ); //object
        const scott = generateTeamMember('Scott Estrada', 'Developer', './css/img/scott-estrada-developer.jpg' ); //object
        const barbara = generateTeamMember('Barbara Ramos', 'Graphic Designer', './css/img/barbara-ramos-graphic-designer.jpg' ); //object

    // pusho nell'array gli oggetti che ho creato 
    teamMembers.push(wayne, angelaC, walter, angelaL, scott, barbara);


//MILESTONE 1 / MILESTONE 2 
// stampare su console per ogni membro le informazioni contenute nelle proprietà dell'oggetto / stampare gli oggetti sul DOM
// inizializzo una variabile associata all'elemerto row del dom
const rowMembers = document.querySelector('.row') // DOM object

    //creo un ciclo che scorre tutta la lunghezza dell'array
    for (let i = 0; i < teamMembers.length; i++){   
       //passo alla funzione l'elemento attuale dell'array alla posizione i
         createCard(teamMembers[i]);         
    }

//funzione che genera gli oggetti con i dati passati 
function generateTeamMember(newName, newRole, newImgPath){
    //dichiaro una variabile ogetto che avrà come parametri i dati passati dalla funzione
    const teamMember = {
        name: newName, //string
        role: newRole, //string
        imgPath: newImgPath //string
    }

    return teamMember;
}

function createCard(memberAtCurrentIndex){
    // dichiaro una variabile che mi serve per generare un nuovo elemento nel dom
    const cardCol = document.createElement('div');

    // dichiaro la classe dell'elemento appena creato
    cardCol.className = ('col-4');

    // inserisco all'interno dell'html le stringhe contenute nei valori dell'oggetto alla posizione i dell array                
    cardCol.innerHTML = `
        <div class="card">
            <div class="card-head">
                <img src="${memberAtCurrentIndex.imgPath}">
            </div>
            <div class="card-body">
                <h3> ${memberAtCurrentIndex.name}</h3>
                <h4> ${memberAtCurrentIndex.role}</h4>
            </div>
        </div>
    ` 
    //inserisco l'elemento creato all'interno del DOM
    rowMembers.append(cardCol);
}