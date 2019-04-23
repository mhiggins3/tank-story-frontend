import React, { Component } from 'react';
import axios from "axios";
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import TankLevel from './components/TankLevel';
import UsageGraph from './components/UsageGraph';
import RemainingCounter from './components/RemainingCounter';
import MonthlySummary from './components/MonthlySummary';
import './App.css';


class App extends Component {

    state = {
        summary: {},
        samples: []
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios
            .get("https://475lrvm7v7.execute-api.us-east-1.amazonaws.com/production/summary/d2f702a1-36f8-11e9-8305-acde48001122")
            .then(response => {
                const newState = Object.assign({}, this.state, {
                    summary: JSON.parse(response.data.body)
                })
                this.setState(newState);
             })
             .catch(error => console.log(error));
        axios
            .get("https://475lrvm7v7.execute-api.us-east-1.amazonaws.com/production/sample/d2f702a1-36f8-11e9-8305-acde48001122/?startDate=2019-02-01&endDate=2019-02-28")
            .then(response => {
                const newState = Object.assign({}, this.state, {
                    samples: response.data
                })
                this.setState(newState);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
      return (
       <div>
          <Navigation/>
          <div className="container">
              <h1>Tank Story</h1>
              <RemainingCounter summary={ this.state.summary }/>
              <div className="row">
                  <div className="col-md-8">
                  <div className="row">
                      <div className="col-md-6">
                          <TankLevel summary={ this.state.summary }/>
                      </div>
                      <div className="col-md-6"></div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <Summary summary={ this.state.summary }/>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-12" align="center">
                  <hr/>
                  <UsageGraph samples={this.state.samples}/>
              </div>
          </div>
          <div className="row">
              <div className="col-12" align="center">
                  <MonthlySummary/>
              </div>
          </div>
       </div>

      );
    }
}

export default App;
