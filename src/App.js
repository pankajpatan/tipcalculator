import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      service: "20",
      tip: "",
      name: "",
      customerlist: [],
      count: 0,
      totaltip: ""
    };
  }

  tipCalc = () => {
    let ttip = (this.state.amount * this.state.service) / 100;
    this.setState((prevstate) => ({
      customerlist: [
        ...prevstate.customerlist,
        { tip: ttip, name: this.state.name }
      ]
    }));
    this.setState({ name: "" });
  };
  totaltips = () => {
    this.setState({
      count: this.state.customerlist.length,
      totaltip: this.state.customerlist.reduce((accum, arr) => {
        return accum + arr.tip;
      }, 0)
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center bg-primary text-white">
              TIP CALCULATOR
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div class="form-group">
              <p className="text-center">Enter Your Bill Amount</p>
              <input
                type="text"
                class="form-control"
                value={this.state.amount}
                onChange={(event) =>
                  this.setState({ amount: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <p className="">How Was The Service</p>
            <select
              className="w-25"
              value={this.state.service}
              onChange={(event) => {
                this.setState({ service: event.target.value });
              }}
            >
              <option value="20">Excellent 20%</option>
              <option value="10">Moderate 10%</option>
              <option value="5">bad 5 %</option>
            </select>
            <input
              type="text"
              className="ml-2 "
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <button className="btn btn-primary ml-2" onClick={this.tipCalc}>
              Add Customer
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2 className="text-center">Customer List</h2>
          </div>
          <div className="col">
            <ul
              className=" h5 list-unstyled text-center"
              style={{ marginBottom: "200px" }}
            >
              {this.state.customerlist.map((item) => {
                return (
                  <li>{`${item.name} offering a tip of ${item.tip} rupees`}</li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center"></div>
          <button
            className="btn btn-success "
            style={{ margin: "auto" }}
            onClick={this.totaltips}
          >
            Calculate Tip & customer
          </button>
        </div>
        <div className="row ">
          <div className="col-12">
            <table className="table table-bordered">
              <tr>
                <th>Total customer</th>
                <th>Tip</th>
              </tr>
              <tr>
                <th>{this.state.count}</th>
                <th>{this.state.totaltip}</th>
              </tr>
            </table>
          </div>
        </div>
        <div id="footer" className="footer">
          <div className="container">
            <p className=" credit text-white text-center">
              @2020 Tip CALCULATOR .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
