import React from "react";
import './sass/NonLogApp.css';
import FlashcardService from "./service/FlashcardService";
import TopicService from "./service/TopicService";


class FreeAppComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            topicId : this.props.topicId,
            flashcards : [{
                id : "",
                englishWord: "",
                englishWordDesc: "",
                polishWord: "",
            }],
            availableCards : [],
            score : 0 ,
            answers : [],
            flashcardsId : [],
        }
    }

    componentDidMount() {
        FlashcardService.getFlashcards()
            .then(item => {
                this.setState({
                        // flashcards: item.data,
                        // availableCards : item.data['length'],
                        // flashcardsId : item.data,
                        answers : [...item.data],
                    }
                )
            })
        console.log(this.state.topicId)
        FlashcardService.getFlashcardByTopicId(this.state.topicId)
            .then(item => {
                this.setState({
                        flashcards: item.data,
                        availableCards : item.data['length'],
                        flashcardsId : item.data,
                        // answers : [...item.data],
                    }
                )
            })

    }

    generateAnswers(list,quest){
        const j = [{
            id : "",
            englishWord: "",
            englishWordDesc: "",
            polishWord: "",
        }]
        if(list.length>1){
            j.pop()
            j.push(quest)
            for (var i = 0 ; i < 3 ; i++){

                var nr = Math.floor((Math.random() * (list.length))) ;

                while(j.find(element => element === list[nr] ) ){
                    nr = Math.floor((Math.random() * (list.length))) ;
                }
                j.push(list[nr]);
            }
        }

        return j;
    }
    checkingHandler(answer ,word,array){
        const correct = answer.polishWord === word;
        if (correct) {
            this.setState({
                score : this.state.score + 1,
            })

            const index = array.indexOf(answer);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

    }
    shuffleArray(array){
        for (var i = array.length-1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    render() {
        const fcList = this.state.flashcards
        const alist = this.state.answers
        this.shuffleArray(fcList)
        var quest = null
        fcList.length !== 0 ?  quest = fcList[0] :  quest = [{
            id : "",
            englishWord: "",
            englishWordDesc: "",
            polishWord: "",
        }]
        const answerList = this.generateAnswers(alist,quest)
        const correctAnswer = answerList[0].polishWord
        this.shuffleArray(answerList)

        return (
                    <div>
                        <div>
                            <div>Wynik {this.state.score}/{this.state.availableCards}</div>
                            <p >{quest.englishWord}</p>
                            <p>{quest.englishWordDesc}</p>
                            <div>
                                {fcList.length>0?answerList.map((answer) => (
                                    <button onClick={() => this.checkingHandler(answer,correctAnswer,fcList)}>{answer.polishWord}</button>
                                )):"potrafisz juz wszystko"}
                            </div>
                        </div>
                    </div>
        )
    }


}

export default FreeAppComponent;