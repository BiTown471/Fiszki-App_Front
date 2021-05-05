import React from "react";
import {withRouter} from 'react-router';

class HomeComponnent extends React.Component{
    GoToNonLogApp(){
        this.props.history.push('/nonlogapp');
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                  <p>Nazwa użytkownika</p>
                    <input type="text"/>
                  <p>Hasło</p>
                    <input type="text"/>
                  <button onClick={() => this.props.history.push('/logapp')}>zaloguj</button>
                  <button onClick={() => this.props.history.push('/nonlogapp')}>stwórz konto</button>
                  <button onClick={() => this.props.history.push('/nonlogapp')}>wypróbuj bez konta </button>
              </header>
            </div>
          );
    }

}

export default HomeComponnent