import React from "react";
import './sass/NonLogApp.css';
import WordService from "./service/WordService";

class NonLogApp extends React.Component{

    state = {
        word :"",
        description: "",
        corectAnswer: false,

    }
    componentDidMount() {
        const apiUrl = 'http://localhost:8080/oneflashcard';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState(
                {
                        word: data.englishWord,
                        description: data.englishWordDesc,
                    }
                )
            );

                }

    render() {
        return (
            <div className="flashcardLearn">
                <div className="flashcard">
                  <div>
                      <p>{this.state.word}</p>

                      <p>{this.state.description}</p>
                  </div>
                <div>
                    <ul>
                        <li className="AnswerWord">
                            odp 1
                        </li>
                        <li className="AnswerWord">
                            odp 2
                        </li>
                        <li className="AnswerWord">
                            odp 3
                        </li>
                        <li className="AnswerWord">
                            odp 4
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default NonLogApp;