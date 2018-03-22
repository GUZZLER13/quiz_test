function populate() {
    if(quiz.isEnded()){
        showScores();
    }
    else {
        // show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " / " + quiz.questions.length;

}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showScores() {
    let gameOverHtml = "<h1>Result</h1>";
    gameOverHtml+= "<h2 id='score'> Your scores : " + quiz.score + " / " + questions.length + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

let questions = [
    new Question("Comment s'appelle le chien du Dr Emmett Brown en 1955 ?", ["Galilée", "Einstein", "Copernic", "Newton"], "Copernic"),
    new Question("En quelle année a été réalisé le dernier épisode de l'arme fatale ?", ["1996", "1997", "1945", "1998"], "1998"),
    new Question("Comment codent les étudiants de la Wild Code School ?", ["En slip", "En kilt", "En chaussettes", "A poil..."], "En chaussettes"),
    new Question("A quel concours Charlie Chaplin a participé sans pourtant le gagner ?", ["Un concours de danse", "Un concours de sosie", "Un concours de mime", "Un tournoi de belote"], "Un concours de sosie"),
    new Question("Qu'est-ce qu'est une bibitte au Québec ?", ["Une sorte de papillon", "un \"zizi\"", "une bestiole", "un plat mijoté"], "une bestiole"),
    new Question("Le Dr Peter Venkman et chasseur de fantômes est interprété par l'acteur ...", ["Dan Aykroyd", "Bill Murray", "Harold Ramis", "Jean-Claude Van damme"], "Bill Murray"),
    new Question("Si je suis la soeur du pere du frere de ta mère...", ["Je suis ta grand-mère", "Je suis ton cousine", "Je suis ta grande tante", "Je suis dans la merde"], "Je suis ta grande tante"),
    new Question("En quelle année est sorti ES6 ?", ["2012", "1997", "2015", "2004"], "2015"),
    new Question("Le prénom de Demis Roussos est le diminutif de :", ["Ethymios", "Artemios", "Argyris", "Jean-Jacques"], "Artemios"),
    new Question("De qui Luke Skywalker est-il le fils ?", ["Mimie Mathy", "Dark Vador", "Maître Yoda", "Princesse Leia"], "Dark Vador")
];

var quiz = new Quiz(questions);

populate();
