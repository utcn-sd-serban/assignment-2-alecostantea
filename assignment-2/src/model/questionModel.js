import {EventEmitter} from "events";

 class QuestionModel extends EventEmitter {
     constructor() {
         super();
         this.state = {
             questions: [{
                title: "titlu frumos",
                text: "Cum fac asta?",
                author: "alexpopa09",
                tags: "cool tags are for cool kids",
                creationDate: Date("2019-09-16")
             },{
                 title: "lalala",
                 text: "Ajutor",
                 author: "maria97",
                 tags:"tags cool ceva",
                 creationDate: Date("2018-10-2")
             
             }],
             newQuestion: {
                title: "",
                text: "",
                tags: ""
             }
            };
         }

         addQuestion(title, text, author, tags){
            this.state = {
                ...this.state,
                questions: this.state.questions.concat([{
                    title: title,
                    text: text,
                    author: author,
                    tags: tags,
                    creationDate: Date.now()
                }])
            };
            this.emit("change", this.state);
         }

         changeNewQuestionProperty(property, value){
            this.state = {
                ...this.state,
                newQuestion: {
                    ...this.state.newQuestion,
                    [property]: value
                }
            };
            this.emit("change", this.state);
         }
         }
     
 

 const questionModel = new QuestionModel();

 export default questionModel;