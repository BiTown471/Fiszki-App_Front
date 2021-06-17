import React from "react";
import $ from "jquery";
import TopicService from "./service/TopicService";
import LevelService from "./service/LevelService"
import FlashcardService from "./service/FlashcardService";

class CreateFlashcardComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            englishWord : '',
            englishWordDesc : '',
            polishWord : '',
            polishWordDesc : '',
            topicsList : [{id:'',name:''}],
            topicId : 1,
            levelsList : [],
            levelId: 1,
            partsOfSpeechId : 1,
            partsOfSpeech : [],

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        TopicService.getTopics()
            .then(item => {
                this.setState({
                    topicsList : item.data
                })
                // console.log(this.state.topicsList)
            })
        LevelService.getLevels()
            .then(item => {
                this.setState({
                    levelsList : item.data
                })
                // console.log(this.state.levelsList)
            })
        let apiUrl = 'http://localhost:8080/partofspeech'
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                    this.setState({
                        partsOfSpeech : this.state.partsOfSpeech.concat(data),
                    })
                }
            );

    }
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    handleSubmit(event) {
        const fc = {
            englishWord : this.state.englishWord,
            englishWordDesc : this.state.englishWordDesc,
            polishWord : this.state.polishWord,
            polishWordDesc : this.state.polishWordDesc,
            topicId : this.state.topicId,
            levelId: this.state.levelId,
            partsOfSpeechId : this.state.partsOfSpeechId,

        }
        console.log(fc)
        FlashcardService.postFlashcard(fc)
            .then(res =>{
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        event.preventDefault();
        window.location.reload();
    }

    render() {
        const fc = {
            englishWord : '',
            englishWordDesc : '',
            polishWord : '',
            polishWordDesc : '',
            topicId : 1,
            levelId: 1,
            partsOfSpeechId : 1,

        }
        // console.log(this.state.levels)
       return (
               <form onSubmit={this.handleSubmit}>
                   <label>
                       Polska nazwa:
                       <input
                           type="text"
                           name="polishWord"
                           value={this.state.polishWord} onChange={this.handleChange} />
                   </label>
                   <label>
                       Polski opis:
                       <input
                           type="text"
                           name="polishWordDesc"
                           value={this.state.polishWordDesc}
                           onChange={this.handleChange} />
                   </label>
                   <br/>

                   <label>
                       Angielska nazwa:
                       <input
                           type="text"
                           name="englishWord"
                           value={this.state.englishWord}
                           onChange={this.handleChange} />
                   </label>
                   <label>
                       Angielski opis:
                       <input
                           type="text"
                           name="englishWordDesc"
                           value={this.state.englishWordDesc}
                           onChange={this.handleChange} />
                   </label>
                   <br/>
                   <label>Temat:
                       <select
                           name="topicId"
                           value={this.state.topicId}
                           onChange={this.handleChange}>
                           {this.state.topicsList.map(topic => <option value={topic.id}>{topic.name}</option>)}
                       </select>
                   </label>
                        <button onClick={() => this.props.history.push('/addtopic')}>Dodaj nowy</button>
                   <br/>
                   <label>Poziom:
                       <select
                           name="levelId"
                           value={this.state.levelId}
                           onChange={this.handleChange}>
                           {this.state.levelsList.map((level) => <option value={level.id} >{level.name}</option>)}
                       </select>
                   </label>
                   <br/>
                   <label>Część mowy:
                       <select
                           name="partsOfSpeechId"
                           value={this.state.partsOfSpeechId}
                           onChange={this.handleChange}>
                           {this.state.partsOfSpeech.map((pos) => <option value={pos.id}>{pos.name}</option>)}
                       </select>
                        <button onClick={() => this.props.history.push('/addpos')}>Dodaj nowy</button>
                   </label>
                   <br/>
                   <br/>
                   <input type="submit" value="Dodaj"/>
               </form>

       );
    }




    // save() {
    //     var context = this;
    //     console.log(this.state)
    //     $.ajax({
    //         url: "http://localhost:8080/flashcard?englishWordDesc="+ this.state.englishWordDesc +
    //             "&englishWord="+ this.state.englishWord
    //             +"&level="+ this.state.levelId
    //             +"&partOfSpeech="+ this.state.partsOfSpeechId
    //             +"&polishWord="+ this.state.polishWord
    //             +"&topic="+ this.state.topicId
    //             +"&polishWordDesc=" +this.state.polishWordDesc,
    //         method: "POST",
    //         // data: {
    //         //     englishWord: context.state.englishWord,
    //         //     polishWord: context.state.polishWord,
    //         //     topics: context.state.topics,
    //         //     levels: context.state.levels,
    //         //     partsOfSpeech: context.state.partsOfSpeech.id,
    //         // },
    //         success: function(response) {
    //             console.log(this.url)
    //             alert("Successfully saved record!");
    //         },
    //         error: function(response) {
    //             alert("Error in saving record!");
    //         }
    //     });
    // }
}

export default CreateFlashcardComponent