import React, { Component } from 'react';
import ConditionReport from './ConditionReport';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      where: "",
      matchedSearch: this.props.locations
    }
    this.newWhereChange = this.newWhereChange.bind(this);
  }

  newWhereChange (e) {
    this.setState({
      where: e.target.value
    });
  }

  searchLocations(e) {
    let matchedSearchArray = [];

    for (var i = 0; i < this.props.locations.length; i++) {
      if (this.props.locations[i].location === this.state.where) {
        matchedSearchArray.push(this.props.locations[i]);
      } else if (this.state.where === "All Locations" || this.state.where === "") {
        matchedSearchArray.push(this.props.locations[i]);
      }
    }
    this.setState({
      matchedSearch: matchedSearchArray
    });
    e.preventDefault();
  }

  render() {
    let matchedSearch = this.state.matchedSearch

    const matchedSearchList = matchedSearch.map( (item, index) => (
        <ConditionReport
          location={item.location}
          swellHeightMin={item.swell.minBreakingHeight}
          swellHeightMax={item.swell.maxBreakingHeight}
          swellUnit={item.swell.unit}
          swellDirection={item.swell.components.combined.compassDirection}
          windSpeed={item.wind.speed}
          windDirection={item.wind.compassDirection}
          windUnit={item.wind.unit}
          temperature={item.condition.temperature}
          temperatureUnit={item.condition.unit}
          key={index}
        />
        ))

    const locationSearch = this.props.locations

    const dropdown = locationSearch.map( (item, index) => (
      <option value={item.location} key={index}>{item.location}</option>
    ))

    return (
      <div>
        <form onSubmit={this.searchLocations}>
          {/* <label htmlFor="where">Where</label>
            <input type="text"
            placeholder="Anywhere"
            onChange={(e) => this.newWhereChange(e)}
            value={this.state.where}
            id="where"
          /> */}

          <label htmlFor="where">
            Select a location
            <select value={this.state.value} onChange={this.newWhereChange} id="where">
              <option>All Locations</option>
              {dropdown}
            </select>
          </label>

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
