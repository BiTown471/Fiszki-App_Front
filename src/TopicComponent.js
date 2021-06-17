import React from "react";
import './sass/NonLogApp.css';
import TopicService from "./service/TopicService";
import FreeAppComponent from "./FreeAppComponent";


class TopicComponent extends React.Component{


    constructor(props) {
        super(props);
        this.state={
            topics : [],
            flashcards : [],
            topicId : -1,
            topicLength: 0,
        }
    }

    componentDidMount() {
        TopicService.getTopics()
            .then(item => {
                this.setState({
                    topics : item.data
                })
            })
    }

    renderTopic(t ){
        this.setState({
            topicId : t,
            topics : [],
        })
        // console.log(t)


    }
    render() {
        const topicsL = this.state.topics.map(t => {
            return <button onClick={() => this.renderTopic(t.id)}>{t.name}</button>
        })
        // console.log(this.state.topicLength)
        return(
            <div className="flashcardLearn">
                <div className="flashcard">
                    {this.state.topicId === -1 ? <p> Wybierz tematyke fiszek</p> : <FreeAppComponent topicId ={this.state.topicId}/>}
                    <div>{topicsL}</div>
                </div>
            </div>
        );
    }
}


export default TopicComponent