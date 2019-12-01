import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import "./history.css";

class History extends Component {
  constructor() {
    super();
    this.state = {
      todayprice: {},
      yesterdayprice: {},
      twodaysprice: {},
      threedaysprice: {},
      fourdaysprice: {}
    };
  }

  getETHPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=" +
        date,
      {
        headers: {
          authorization:
            "Apikey 5a9627ca6cd3c0305e000e92e6cc2316bd9049c62a725c9fe26378324eed978c"
        }
      }
    );
  };

  getBTCPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" +
        date,
      {
        headers: {
          authorization:
            "Apikey 5a9627ca6cd3c0305e000e92e6cc2316bd9049c62a725c9fe26378324eed978c"
        }
      }
    );
  };

  getLTCPrices = date => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=" +
        date,
      {
        headers: {
          authorization:
            "Apikey 5a9627ca6cd3c0305e000e92e6cc2316bd9049c62a725c9fe26378324eed978c"
        }
      }
    );
  };

  getTodayPrice() {
    let t = moment().unix();

    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };

          this.setState({ todayprice: f });
        })
      );
  }

  getYesterdayPrice() {
    let t = moment()
      .subtract(1, "days")
      .unix();
    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };

          this.setState({ yesterdayprice: f });
        })
      );
  }

  getTwoDaysPrice() {
    let t = moment()
      .subtract(2, "days")
      .unix();

    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };

          this.setState({ twodaysprice: f });
        })
      );
  }

  getThreeDaysPrice() {
    let t = moment()
      .subtract(3, "days")
      .unix();

    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };

          this.setState({ threedaysprice: f });
        })
      );
  }

  getFourDaysprice() {
    let t = moment()
      .subtract(4, "days")
      .unix();

    axios
      .all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(
        axios.spread((eth, btc, ltc) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth.data.ETH.USD,
            btc: btc.data.BTC.USD,
            ltc: ltc.data.LTC.USD
          };

          this.setState({ fourdaysprice: f });
        })
      );
  }

  componentWillMount() {
    this.getTodayPrice();
    this.getYesterdayPrice();
    this.getTwoDaysPrice();
    this.getThreeDaysPrice();
    this.getFourDaysprice();
  }

  render() {
    return (
      <div className="history--section container">
        <h2>History (Past 5 days)</h2>
        <div className="history--section__box">
          <div className="history--section__box__inner">
            <h4>{this.state.todayprice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.todayprice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.todayprice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.todayprice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.yesterdayprice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.twodaysprice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.twodaysprice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.twodaysprice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.threedaysprice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.threedaysprice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.threedaysprice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.fourdaysprice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
