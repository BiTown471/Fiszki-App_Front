import React from "react";
import $ from "jquery";

class CreatePosComponent extends React.Component{


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
                <p>Tutaj mozesz dodać swoją własną cześć mowy </p>
                <label>Podaj część mowy: </label>
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
            url: "http://localhost:8080/partofspeech?name="+ this.state.name,
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

export default CreatePosComponent;