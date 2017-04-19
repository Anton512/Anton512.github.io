var body = document.body;  
var input = document.createElement('input');
var label = document.createElement('label');
input.setAttribute('type', 'checkbox');
label.appendChild(input);


                    
var test = {
    div: document.createElement('div'),
    button: document.createElement('button'),
    header: document.createElement('h4'),
    question: {
        question_1: {
            answer_1: label.cloneNode(true),
            answer_2: label.cloneNode(true),
            answer_3: label.cloneNode(true)
        },
        
        question_2: {
            answer_1: label.cloneNode(true),
            answer_2: label.cloneNode(true),
            answer_3: label.cloneNode(true)
        },
        
        question_3: {
            answer_1: label.cloneNode(true),
            answer_2: label.cloneNode(true),
            answer_3: label.cloneNode(true)
        }
        
        
    },
    
    innerQuestion: function(){
                //        ANSWER_1
        this.question.question_1.answer_1.innerHTML += 'Ответ №1';
        this.question.question_1.answer_2.innerHTML += 'Ответ №2';
        this.question.question_1.answer_3.innerHTML += 'Ответ №3';
                //        ANSWER_2
        this.question.question_2.answer_1.innerHTML += 'Ответ №1';
        this.question.question_2.answer_2.innerHTML += 'Ответ №2';
        this.question.question_2.answer_3.innerHTML += 'Ответ №3';
                //        ANSWER_3
        this.question.question_3.answer_1.innerHTML += 'Ответ №1';
        this.question.question_3.answer_2.innerHTML += 'Ответ №2';
        this.question.question_3.answer_3.innerHTML += 'Ответ №3';
                //        QUESTION
        this.arrP[0].innerHTML = 'Вопрос №1';
        this.arrP[1].innerHTML = 'Вопрос №2';
        this.arrP[2].innerHTML = 'Вопрос №3';
                //        BUTTON
        this.button.innerHTML = 'Проверить ответы';
                //        HEADER
        this.header.innerHTML = 'Тест по программированию'
        
    },
        
    
    button: document.createElement('button'),
    p: document.createElement('p'),
    arrP: [],
    outTest: function(){
        body.appendChild(this.div);
        this.div.appendChild(this.header);
        for(var i = 1; i <= Object.keys(this.question).length; i++){
                this.arrP.push(this.p.cloneNode(true));
                this.div.appendChild(this.arrP[i - 1]);
            for(var key in test.question['question' + '_' + i + '']){
                this.div.appendChild(this.question['question' + '_' + i + ''][key]);  
            }
        }
        this.div.appendChild(this.button);
        this.innerQuestion();
    }

};
   


test.outTest();


