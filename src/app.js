import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';
import Table_Header from './Table_Header';
import Table_Entry from './Table_Entry';
import Team_Matches from './Team_Matches';

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
						// Only one of the following three properties should be not null at any given time.  
						// This determines which component shuld be rendered.
						teamSelected: null,
						table: null,
						match: null
				};
				this.fetchStandings = this.fetchStandings.bind(this);
				this.fetchTeams = this.fetchTeams.bind(this);
				this.fetchMatches = this.fetchMatches.bind(this);
				this.getTeamNameFromTableRow = this.getTeamNameFromTableRow.bind(this);
				this.renderComponentBasedOnState = this.renderComponentBasedOnState.bind(this);
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
				let allMatches = this.state.matches;
				// let thisTeamMatches = allMatches.map
				console.log(allMatches.matches)
					return(
						<div> 
							Team Matches
							{
								
							} 
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