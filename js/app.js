// Utizizzando i dati forniti creare un arry di oggetti per rappresentare i membri del team
// MILESTONE 0 creare l'array di oggetti
// MILESTONE 1 stampare su console per ogni membro le informazioni 
// MILESTONE 2 stampare le stesse informazioni nel DOM come stringhe
// BONUS 1 trasformare la stringa foto in un immagine effettiva
// BONUS 2 organizzare i singoli membri in card/schede

// MILESTONE 1
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