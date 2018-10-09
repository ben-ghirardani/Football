import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';
import TableHeader from './TableHeader';
import TableEntry from './TableEntry';
import TeamMatches from './TeamMatches';
import SingleMatch from './SingleMatch';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            standings: null,
            teams: null,
						matches: null,
						singleMatchID: null,
						singleMatch: null,
						teamSelectedGames: null,
						teamSeasonGames: null,
						lastUsedTeamName: null,
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
				this.combineHomeAndAway = this.combineHomeAndAway.bind(this);
				this.setTeamSeasonGames = this.setTeamSeasonGames.bind(this);
				this.switchViewComponent = this.switchViewComponent.bind(this);
				this.getMatchID = this.getMatchID.bind(this);
				this.useMatchIDToFilterGame = this.useMatchIDToFilterGame.bind(this);
				this.sendReturnedMatchToState = this.sendReturnedMatchToState.bind(this);
    }

    componentWillMount() {
				this.fetchStandings();
				this.fetchTeams();
				this.fetchMatches();
		}

		// combine all fetch requests into a Promise? Render loading component until Promise is met, then render

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

		// refactor at some point to use below endpoint to get lineup of players, need to filter game out
		// http://api.football-data.org/v2/teams/759/matches

		// fetchSingleMatch(matchID) {
    //   fetch(`http://api.football-data.org/v2/matches/`+matchID, 
    //     { 
    //         headers : {
    //             'X-Auth-Token': authToken
    //         }
    //     } )
    //       .then(response => response.json())
    //       .then(data =>
    //         this.setState({
    //           singleMatch: data
    //         })
    //       )
		// 			.catch(error => this.setState({ error, isLoading: false }));
		// }

		// create state: lastUsedTeamName in order to naviagte back to previously selected teams games

		switchViewComponent(nameOfView) {
			if (nameOfView === "table") {
				this.setState({
					table: "display",
					teamSelected: null,
					match: null
				})
			} else if (nameOfView === "teamSelected") {
					this.setState({
						table: null,
						teamSelected: lastUsedTeamName,
						match: null  
					})
			} else if (nameOfView === "match") {
				this.setState({
					table: null,
					teamSelected: null,
					match: "display"
				})
			}
			else return
		}

		// does this get replaced by switchViewComponent?
		getTeamNameFromTableRow(teamName) {
			this.setState({
				teamSelected: teamName,
				lastUsedTeamName: teamName,
				table: null
			})
		}

		getMatchID(ID) {
			this.setState({
				singleMatchID: ID
			})
		}

		// way to avoid using an array just for one object?
		useMatchIDToFilterGame(ID) {
			let matches = this.state.matches.matches
			let matchedMatch = [];
			matches.forEach((match) => {
				if(match.id === ID) {
					matchedMatch.push(match)
				}
			})
			return matchedMatch
		}

		sendReturnedMatchToState(data) {
			this.setState({
				singleMatch: data
			})
		} 

		setTeamSeasonGames(seasonData) {
			this.setState({teamSeasonGames: seasonData})
		}

		combineHomeAndAway(team, allMatches) {
			const homeMatches = [];
			const awayMatches = [];
			const orderedMatches = [];

			allMatches.forEach((match) => {
				if(match.homeTeam.name === team) {
					homeMatches.push(match);
				}	
			}) 

			allMatches.forEach(((match) => {
				if(match.awayTeam.name === team) {
					awayMatches.push(match);
				}	
			}))
			let comboMatches = homeMatches.concat(awayMatches);

			comboMatches.forEach((match) => {
				orderedMatches.splice(match.matchday - 1, 0, match)		
			})
			// don't setState here as it will re-render infinitely
			return orderedMatches;
		}

		renderComponentBasedOnState() {

			// create a loading component, if !all three display components, then loading, else if table then table, etc 
			if (this.state.isLoading === true) {
				<h1>
					Placeholder Loading Page!
				</h1>
			}

			else if (this.state.table) {
				return(
					<div>
							<table width="750">
								<tbody>
									<TableHeader/>
										{
											this.state.standings.standings[0].table.map((item, i) => 
												<TableEntry
													getTeamNameFromTableRow={this.getTeamNameFromTableRow}
													combineHomeAndAway={this.combineHomeAndAway}
													matches={this.state.matches}
													setTeamSeasonGames={this.setTeamSeasonGames}
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
							<TeamMatches
								teamSelected={this.state.teamSelected}
								teamSeasonGames={this.state.teamSeasonGames}
								switchViewComponent={this.switchViewComponent}
								getMatchID={this.getMatchID}
								useMatchIDToFilterGame={this.useMatchIDToFilterGame}
								sendReturnedMatchToState={this.sendReturnedMatchToState}
								singleMatch={this.state.singleMatch}
							/>	
						</div>
				)
			}
			else if (this.state.match) {
				return(
					<div>
							<SingleMatch
								singleMatch={this.state.singleMatch[0]}
							/>
					</div>
				)
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