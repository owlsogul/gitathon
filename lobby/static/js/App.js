import React, { Component } from 'react';
import LoginMain from './Login';

const metaInfo = [
    {
      gitathonLogo : "../../../img/gitathonLogo.png",
      userName : "wkdthf21",
      hackathonLogo : "/../../../img/hackathonLogo.png",
      profileLogo : "/../../../img/profileLogo.png"
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginMain
                    gitathonLogo = {metaInfo[0].gitathonLogo}
		    numHack = {3}
		    numTeam = {20}
                />
            </div>
        );
    }
}

export default App;
