import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';
import Table_Header from './Table_Header';
import Table_Entry from './Table_Entry';
import Team_Matches from './Team_Matches';
import Match from './Match';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            standings: null,
            teams: null,
						matches: null,
						teamSelectedGames: null,
						// Only one of the following three properties should be 'not null' at any given time.  
						// This determines which component should be rendered.
						teamSelected: null,
						table: null,
						match: null
				};
				this.fetchStandings = this.fetchStandings.bind(this);
				this.fetchTeams = this.fetchTeams.bind(this);
				this.fetchMatches = this.fetchMatches.bind(this);
				this.getTeamNameFromTableRow = this.getTeamNameFromTableRow.bind(this);
				this.renderComponentBasedOnState = this.renderComponentBasedOnState.bind(this);
				this.getTeamMatches = this.getTeamMatches.bind(this);
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
							table: "display"
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

		getTeamNameFromTableRow(teamName) {
			this.setState({
				teamSelected: teamName,
				table: null
			})
		}

		// every game is getting pushed to the array, still not pulling out only games that match the selected game
		// getTeamMatches(team, allMatches) {
		// 	const teamMatches = [];
		// 		for (let i = 0; i < allMatches.length; i++) {
		// 			let match = allMatches[i];
		// 				if(match.awayTeam === team) {
		// 					teamMatches.push(match)
		// 				}
		// 	}
		// 	console.log("from method getTeamMatches", teamMatches)
		// }

		getTeamMatches(team, allMatches) {
			const teamMatches = [];
			allMatches.forEach(((match) => {
				if(match.awayTeam || match.homeTeam === team) {
					teamMatches.push(match);
				}	
			}))
			console.log("forEach method - ", teamMatches)
		}

		renderComponentBasedOnState() {
			if (this.state.table) {
				return(
					<div>
							<table width="750">
								<tbody>
									<Table_Header/>
										{
											this.state.standings.standings[0].table.map((item, i) => 
												<Table_Entry
													getTeamNameFromTableRow={this.getTeamNameFromTableRow}
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
						</div>
				)
			}
			else if (this.state.teamSelected) {
					return(
						<div> 
							<Team_Matches
								getTeamMatches={this.getTeamMatches}
								teamName={this.state.teamSelected}
								matches={this.state.matches.matches}
							/>
						</div>
				)
			}
			else if (this.state.match) {
				return(
					<div> Details of a particular match </div>
				)
			}
			else {
				<div>Loading</div>
			}
		}

    render() {
        return (
					<div>
						{this.renderComponentBasedOnState()}
					</div>
        )
    }

}	

export default App;

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;