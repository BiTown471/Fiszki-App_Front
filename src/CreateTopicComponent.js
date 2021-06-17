import React from "react";
import $ from 'jquery';
import CreateFlashcardComponent from "./CreateFlashcardComponent";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";


class CreateTopicComponent extends React.Component{


    state = {
        name : "",
    }

    updateName(event){
        this.setState({
            name : event.target.value
        });
    }

    render() {
        return(
            <div>
                <p>Tutaj mozesz dodać swój własny temat</p>
                <label>Podaj temat: </label>
                <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
                <br/>
                <input onClick={this.save.bind(this)} type="submit" />
                <br/>

            </div>
        )
    }

    save() {
        var context = this;
        console.log(this.state.name)
        $.ajax({
            url: "http://localhost:8080/topic?name="+ this.state.name,
            method: "POST",
            data: {
                name: context.state.id,
            },
            success: function(response) {
                alert("Successfully saved record!");
            },
            error: function(response) {
                alert("Error in saving record!");
            }
        });
    }

}

export default CreateTopicComponent;