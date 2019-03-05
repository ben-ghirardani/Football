import React, { Component } from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch"

import App from './App'

describe('App render', () => {

    it('should render', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
      });

  });

  describe('App function tests', () => {

    // beforeEach mount App?
    // afterEach unmount App?

    it('switchViewComponent should update state', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({display: null});
        wrapper.instance().switchViewComponent('testView');
        const displayState = wrapper.state('display')
        expect(displayState).toBe('testView');
      });
    
    it('getTeamNameFromTableRow updates State - display', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({display: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('display')
        expect(teamNameState).toBe('teamSelected');
      });

      it('getTeamNameFromTableRow updates State - lastUsedTeamName', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({lastUsedTeamName: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('lastUsedTeamName');
        expect(teamNameState).toBe('Arsenal');
      });

      it('getMatchID updates State - singleMatchID', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({singleMatchID: null});
        wrapper.instance().getMatchID(123);
        const singleMatchIDState = wrapper.state('singleMatchID');
        expect(singleMatchIDState).toBe(123);
      });

      it('useMatchIDToFilterGame sorts an array of objects and returns one', () => {
        let wrapper = mount(<App/>);
        const matches = {
            matches: [
                {id: 1, name: 'Team1'},
                {id: 2, name: 'Team2'}
            ]
        }
        wrapper.setState({matches})
        const test1 = wrapper.instance().useMatchIDToFilterGame(1)
        expect(test1).toEqual([{id: 1, name: 'Team1'}]);
      });

      it('sendReturnedMatchToState updates State - singleMatch', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({singleMatch: null});
        wrapper.instance().sendReturnedMatchToState('Test data');
        const singleMatchState = wrapper.state('singleMatch');
        expect(singleMatchState).toBe('Test data');
      });

      it('setTeamSeasonGames updates State - teamSeasonGames', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({teamSeasonGames: null});
        wrapper.instance().setTeamSeasonGames('Test data');
        const teamSeasonGames = wrapper.state('teamSeasonGames');
        expect(teamSeasonGames).toBe('Test data');
      });

        it('combineHomeAndAway splits one teams games from all games and orders them by gameweek', () => {
            let wrapper = mount(<App/>);
            const allMatches = [
                {
                    matchday: 1,
                    homeTeam: {
                        name: 'Man City'
                    },
                    awayTeam: {
                        name: 'Watford'
                    }
                },
                {
                    matchday: 3,
                    homeTeam: {
                        name: 'Arsenal'
                    },
                    awayTeam: {
                        name: 'Everton'
                    }
                },
                {
                    matchday: 2,
                    homeTeam: {
                        name: 'Man City'
                    },
                    awayTeam: {
                        name: 'Arsenal'
                    }
                },
                {
                    matchday: 2,
                    homeTeam: {
                        name: 'Watford'
                    },
                    awayTeam: {
                        name: 'Man Utd'
                    }
                },
                {
                    matchday: 3,
                    homeTeam: {
                        name: 'Southampton'
                    },
                    awayTeam: {
                        name: 'Crystal Palace'
                    }
                },
                {
                    matchday: 1,
                    homeTeam: {
                        name: 'Arsenal'
                    },
                    awayTeam: {
                        name: 'Man Utd'
                    }
                }
            ]
            const orderedMatches = wrapper.instance().combineHomeAndAway('Arsenal', allMatches);
            expect(orderedMatches).toEqual(
                    [
                        {
                            matchday: 1,
                            homeTeam: {
                                name: 'Arsenal'
                            },
                            awayTeam: {
                                name: 'Man Utd'
                            }
                        },
                        {
                            matchday: 2,
                            homeTeam: {
                                name: 'Man City'
                            },
                            awayTeam: {
                                name: 'Arsenal'
                            }
                        },
                        {
                            matchday: 3,
                            homeTeam: {
                                name: 'Arsenal'
                            },
                            awayTeam: {
                                name: 'Everton'
                            }
                        }
                    ]
                );
          });

          it('renderComponentBasedOnState should render different components depending on state', () => {
            // set to various states, check that unique components  have rendered
            const component = shallow(<App/>);
            expect(component).toMatchSnapshot();
          });

  });