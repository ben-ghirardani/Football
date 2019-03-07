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
        wrapper.unmount();
      });
    
    it('getTeamNameFromTableRow updates State - display', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({display: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('display')
        expect(teamNameState).toBe('teamSelected');
        wrapper.unmount();
      });

      it('getTeamNameFromTableRow updates State - lastUsedTeamName', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({lastUsedTeamName: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('lastUsedTeamName');
        expect(teamNameState).toBe('Arsenal');
        wrapper.unmount();
      });

      it('getMatchID updates State - singleMatchID', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({singleMatchID: null});
        wrapper.instance().getMatchID(123);
        const singleMatchIDState = wrapper.state('singleMatchID');
        expect(singleMatchIDState).toBe(123);
        wrapper.unmount();
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
        wrapper.unmount();
      });

      it('sendReturnedMatchToState updates State - singleMatch', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({singleMatch: null});
        wrapper.instance().sendReturnedMatchToState('Test data');
        const singleMatchState = wrapper.state('singleMatch');
        expect(singleMatchState).toBe('Test data');
        wrapper.unmount();
      });

      it('setTeamSeasonGames updates State - teamSeasonGames', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({teamSeasonGames: null});
        wrapper.instance().setTeamSeasonGames('Test data');
        const teamSeasonGames = wrapper.state('teamSeasonGames');
        expect(teamSeasonGames).toBe('Test data');
        wrapper.unmount();
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
                wrapper.unmount();
          });

          it('renderComponentBasedOnState should render loading placeholder if state.loading is true', () => {
            const wrapper = mount(<App/>);
            wrapper.setState({display: null, loading: true});
            const result = wrapper.instance().renderComponentBasedOnState();
            expect(result).toEqual(<h1>Placeholder Loading Page!</h1>)
            wrapper.unmount();
          });

        //   AARRGGHH!!!! How can I check if it renders?!?!?!
        //   it('renderComponentBasedOnState should render table if state.display is table', () => {
        //     const wrapper = mount(<App/>)
        //     wrapper.setState({display: "table", loading: false})
        //   });

  });