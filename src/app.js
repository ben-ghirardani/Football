import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import authToken from './auth_token';
import TableHeader from './TableHeader';
import TableEntry from './TableEntry';
import TeamMatches from './TeamMatches';
import SingleMatch from './SingleMatch';
import BackgroundDiv from './StyledComponents/BackgroundDiv';
import OpaqueBackground from './StyledComponents/OpaqueBackground';
import Table from './StyledComponents/Table';
import OpaqueHeader from './StyledComponents/OpaqueHeader';
import Logo from './StyledComponents/Logo';
import TeamMatchesInfo from './TeamMatchesInfo';
import BackButton from './BackButton';

export default class App extends Component {

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

			teamSelected: null,
			table: null,
			match: null,
			// display replaces teamSelected, table & match. setState of display to "table", 
			display: null
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

    componentDidMount() {
		this.fetchStandings();
		this.fetchTeams();
		this.fetchMatches();
	}

		// combine all fetch requests into a Promise? Render loading component until Promise is met

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
				display: "table"
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

		switchViewComponent(nameOfView) {
				this.setState({
					display: nameOfView
				})
		}

		// does this get replaced by / combined with switchViewComponent?
		getTeamNameFromTableRow(teamName) {
			this.setState({
				display: "teamSelected",
				lastUsedTeamName: teamName
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

			else if (this.state.display === "table") {
				return(
					<OpaqueBackground>
						<Table>
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
						</Table>
					</OpaqueBackground>
				)
			}
			else if (this.state.display === "teamSelected") {
					return(
						<OpaqueBackground> 
							<BackButton
								switchViewComponent={this.switchViewComponent}
								display={this.state.display}
							/>
								<TeamMatchesInfo
									team={this.state.lastUsedTeamName}
									allTeams={this.state.teams.teams}
								/>
								<TeamMatches
									switchViewComponent={this.switchViewComponent}
									teamSelected={this.state.lastUsedTeamName}
									teamSeasonGames={this.state.teamSeasonGames}
									getMatchID={this.getMatchID}
									useMatchIDToFilterGame={this.useMatchIDToFilterGame}
									sendReturnedMatchToState={this.sendReturnedMatchToState}
									singleMatch={this.state.singleMatch}
								/>	
						</OpaqueBackground>
				)
			}
			else if (this.state.display === "match") {
				return(
					<OpaqueBackground>
						<BackButton
							switchViewComponent={this.switchViewComponent}
							display={this.state.display}
						/>
						<SingleMatch
							singleMatch={this.state.singleMatch[0]}
						/>
					</OpaqueBackground>
				)
			}
		}

    render() {
        return (
					<BackgroundDiv>
						<OpaqueHeader>
							<Logo/>
						</OpaqueHeader>
							{this.renderComponentBasedOnState()}
					</BackgroundDiv>
        )
    }

}

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;