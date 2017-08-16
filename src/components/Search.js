import React, { Component } from 'react';
import ConditionLocation from './ConditionLocation';
// import ListBooked from './ListBooked';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      where: "",
      matchedSearch: this.props.locations
    }
  }

  newWhereChange (e) {
    this.setState({
      where: e.target.value
    });
    console.log(this.state.where);
  }

  // newWhenChange (e) {
  //   this.setState({
  //     when: e.target.value
  //   });
  //   console.log(this.state.when);
  // }
  //
  // newGuestsChange (e) {
  //   this.setState({
  //     guests: e.target.value
  //   });
  //   console.log(this.state.guests);
  // }

  searchLocations(e) {
    let matchedSearchArray = [];

    for (var i = 0; i < this.props.locations.length; i++) {
      if (this.props.locations[i].location === this.state.where) {
        console.log("match");
        matchedSearchArray.push(this.props.locations[i]);
      }
    }
    this.setState({
      matchedSearch: matchedSearchArray
    });
    console.log(this.state.matchedSearch);
    e.preventDefault();
  }

  render() {
    let matchedSearch = this.state.matchedSearch

    const matchedSearchList = matchedSearch.map( (item, index) => (
      <ConditionLocation conditions={matchedSearch[index]} key={index} />
    ))

    return (
      <div>
        <form onSubmit={this.searchLocations}>
          <label htmlFor="where">Where</label>
          <input type="text"
            placeholder="Anywhere"
            onChange={(e) => this.newWhereChange(e)}
            value={this.state.where}
            id="where"
          />
          <button onClick={(e) => this.searchLocations(e)}>Search</button>
        </form>
        {/* This will search results by city - should route to new page */}
        <ul>
          {matchedSearchList}
        </ul>
      </div>
    );
  }
}

export default Search;
