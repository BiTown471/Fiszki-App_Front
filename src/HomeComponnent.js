import React from "react";

class HomeComponnent extends React.Component{
    render() {
        return (
            <div className="App">
              <header className="App-header">
                  <p>Nazwa użytkownika</p>
                    <input type="text"/>
                  <p>Hasło</p>
                    <input type="text"/>
                  <button onClick={() => this.props.history.push('/logapp')}>zaloguj</button>
                  <button onClick={() => this.props.history.push('/addflashcard')}>stwórz fiszkę</button>
                  <button onClick={() => this.props.history.push('/topicselect')}>wypróbuj bez konta </button>
              </header>
            </div>
          );
    }

}

export default HomeComponnent