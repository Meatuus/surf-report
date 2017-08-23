import React, {Component} from 'react';

class CurrentConditions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentConditions: this.props.conditions
    }

    // this.getCurrent = this.getCurrent.bind(this);
  }

  // getCurrent() {
  //   let locationArray = [];
  //   let date = new Date();
  //
  //   for (var i = 0; i < this.props.conditions.length; i++) {
  //     if (this.props.conditions[i].timestamp > date) {
  //       locationArray.push(this.props.conditions[i])
  //
  //     }
  //   }
  //
  //   // this.props.conditions.map((item) => (
  //   //   if (item.timestamp > Time.now()) {
  //   //     locationArray.push(item)
  //   //   }
  //   // ))
  //
  //   this.setState({
  //     currentConditions: locationArray,
  //   });
  // }


  // componentDidMount() {
  //   // setTimeout(this.getCurrent(), 5000);
  //   this.getCurrent();
  //
  //   // this.setState({
  //   //   currentConditions: ['test', false],
  //   // });
  // }

  render() {
    // let locationArray = [];
    // let date = new Date();
    //
    // for (var i = 0; i < this.props.conditions.length; i++) {
    //   if (this.props.conditions[i].timestamp > date) {
    //     locationArray.push(this.props.conditions[i])
    //   }
    // }
    // const locations = locationArray[0].timestamp || "nothing"
    // const locationOne = this.props.locationOneConditions
    // let locationArray = []
    // const locationOneArray = locationOne.map((item, index) => (
    //   <CurrentConditions conditions={item} key={index}/>
    //
    //   if (item.timestamp > Time.now()) {
    //     locationArray.push(item, index)
    //   }
    // ))

    const locationArray = [];
    let date = new Date();
    const locations = this.state.currentConditions;
    const future = locations.filter((f) => (
      f > date
    ))
console.log(future);

    return(
      <div>
        <h2>Current Conditions</h2>
        {/* <h3>{locations}</h3> */}
        {/* {future[0].timestamp} */}
      </div>
    );
  }
}

export default CurrentConditions;
