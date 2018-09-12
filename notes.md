Add an onClick event to the Tr in <Table_Entry/> that takes the name of team that has been clicked on and adds it to state.

Use this name to render <Matches/> using this.state.teamSelected as the team name to filter by. 

To navigate back to standings screen, return this.state.teamSelected to null? Render stadnigns screen based on this.state.teamSelected being null.