import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';
import Table_Header from './Table_Header';
import Table_Entry from './Table_Entry';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            standings: null,
            teams: null,
            matches: null
				};
				this.fetchStandings = this.fetchStandings.bind(this);
				this.fetchTeams = this.fetchTeams.bind(this);
				this.fetchMatches = this.fetchMatches.bind(this);
    }

    componentWillMount() {
				this.fetchStandings();
				this.fetchTeams();
				this.fetchMatches();
		}

    fetchStandings() {
      fetch(`http://api.football-data.org/v2/competitions/2021/standings`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              standings: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
		}		

		fetchTeams() {
      fetch(`http://api.football-data.org/v2/competitions/2021/teams`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              teams: data
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
		}		

		fetchMatches() {
      fetch(`http://api.football-data.org/v2/competitions/2021/matches`, 
        { 
            headers : {
                'X-Auth-Token': authToken
            }
        } )
          .then(response => response.json())
          .then(data =>
            this.setState({
              matches: data
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
		}

    render() {
        return (
					// ternery statement gives access to API data once state has updated
					this.state.standings ? 
						<div>
							<table width="750">
								<tbody>
									<Table_Header/>
										{
											this.state.standings.standings[0].table.map((item, i) => 
												<Table_Entry
													key={i}
													position={item.position}
													team={item.team.name}
													played={item.playedGames}
													won={item.won}
													drawn={item.draw}
													lost={item.lost}
													gf={item.goalsFor}
													ga={item.goalsAgainst}
													gd={item.goalDifference}
													points={item.points}
												/>)
										}
								</tbody>
							</table>																						
						</div> : <div>Loading</div>
					
        )
    }

}	

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;