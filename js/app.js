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
        const wayne = generateTeamMember('Wayne Barnett', 'Founder & CEO', './img/wayne-barnett-founder-ceo.jpg' ); //object
        const angelaC = generateTeamMember('Angela Caroll', 'Chief Editor', './img/angela-caroll-chief-editor.jpg' ); //object
        const walter = generateTeamMember('Walter Gordon', 'Office Manager', './img/walter-gordon-office-manager.jpg' ); //object
        const angelaL = generateTeamMember('Angela Lopez', 'Social Media Manager', './img/angela-lopez-social-media-manager.jpg' ); //object
        const scott = generateTeamMember('Scott Estrada', 'Developer', './img/scott-estrada-developer.jpg' ); //object
        const barbara = generateTeamMember('Barbara Ramos', 'Graphic Designer', './img/barbara-ramos-graphic-designer.jpg' ); //object

    // pusho nell'array gli oggetti che ho creato 
    teamMembers.push(wayne, angelaC, walter, angelaL, scott, barbara);

//stampo a console l'array
console.log(teamMembers);

//MILESTONE 1 / MILESTONE 2 
// stampare su console per ogni membro le informazioni contenute nelle proprietà dell'oggetto / stampare gli oggetti sul DOM
// inizializzo una variabile associata all'elemerto row del dom
const rowMembers = document.querySelector('.row') // DOM object

    //creo un ciclo che scorre tutta la lunghezza dell'array
    for (let i = 0; i < teamMembers.length; i++){
        // dichiaro una variabile che mi serve per generare un nuovo elemento nel dom
        const cardData = document.createElement('div');

        // dichiaro la classe dell'elemento appena creato
        cardData.className = ('card');

        //dichiaro una variabile che contiene l'elemento attuale dell'array alla posizione i
        const thisTeamMember = teamMembers[i];

        // inserisco all'interno dell'html le stringhe contenute nei valori dell'oggetto alla posizione i dell array                
        cardData.innerHTML = thisTeamMember.imgPath;
        cardData.innerHTML += thisTeamMember.name;
        cardData.innerHTML += thisTeamMember.role;
        
        //inserisco l'elemento creato all'interno del DOM
        rowMembers.append(cardData);
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