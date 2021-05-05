import React from "react";
import './sass/NonLogApp.css';

class NonLogApp extends React.Component{

    state = {

    }

    render() {
        return (
            <div className="flashcardLearn">
                <div className="flashcard">
                    <p>Name</p>
                    <br/>
                    <p>Description</p>
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
        )
    }
}

export default NonLogApp;