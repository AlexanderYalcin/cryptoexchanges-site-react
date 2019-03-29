import React, { Component } from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import HeadJumbotron from "./Jumbotron";
import NavBar from "./NavBar";

const exchangesToInclude = [
  "ANX",
  "BitBay",
  "Bitfinex",
  "bitFlyer",
  "Bithumb",
  "BitKonan",
  "Bitso",
  "Bitstamp",
  "bleutrade",
  "Bittrex",
  "bx_thailand",
  "C-CEX",
  "coin_exchange",
  "Coincheck",
  "Coinone",
  "coinbase Pro",
  "HitBTC",
  "itBit",
  "Korbit",
  "Kraken",
  "LakeBTC",
  "livecoin"
];

let classRed = "red";
let classGreen = "green";

const url =
  "https://api.coingecko.com/api/v3/exchanges";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(results => results.json())
      .then(results => results)
      .then(results =>
        this.setState({
          data: results.filter(exchange => {
            return exchangesToInclude.some(exchangeName => exchangeName === exchange.name);
          })
        })
      );
  }

  render() {
    let exchanges = this.state.data.map(exchange => (
      <React.Fragment>
        <tr key={exchange.symbol}>
          <td>
            <img src={exchange.image} alt={exchange.name} height="30" width="30" />
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href={exchange.url}>{exchange.name}</a>
          </td>
          <td
            className={
              exchange.trade_volume_24h_btc < 0 ? classRed : classGreen
            }
          >
            {" "}
            $ {Number(exchange.trade_volume_24h_btc).toFixed(2)}
          </td>
          <td>{exchange.country || <span class="na-span">N/A</span>}</td>
          <td>{exchange.year_established || <span class="na-span">N/A</span>}</td>
        </tr>
      </React.Fragment>
    ));
    return (
      <div className="container">
        <NavBar />
        <HeadJumbotron />
        <div className="container2">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Volume(24h)</th>
                <th>Country</th>
                <th>Launched</th>
              </tr>
            </thead>
            <tbody>{exchanges}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
