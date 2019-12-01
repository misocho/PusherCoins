import React, { Component } from "react";
import axios from "axios";
import "./today.css";

class Today extends Component {
  constructor() {
    super();
    this.state = {
      btcprice: "",
      ltcprice: "",
      ethprice: ""
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&api_key=5a9627ca6cd3c0305e000e92e6cc2316bd9049c62a725c9fe26378324eed978c",
        {
          headers: {
            authorization:
              "Apikey {5a9627ca6cd3c0305e000e92e6cc2316bd9049c62a725c9fe26378324eed978c}"
          }
        }
      )
      .then(response => {
        this.setState({ btcprice: response.data.BTC.USD });
        this.setState({ ethprice: response.data.ETH.USD });
        this.setState({ ltcprice: response.data.LTC.USD });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="today--section container">
        <h2>Current Price</h2>
        <div className="columns today--section__box">
          <div className="column coin--section">
            <h5>${this.state.btcprice}</h5>
            <p>1 BTC</p>
          </div>
          <div className="column coin--section">
            <h5>${this.state.ethprice}</h5>
            <p>1 ETH</p>
          </div>
          <div className="column ltc--section">
            <h5>${this.state.ltcprice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
