import React from 'react';
import './App.css';
import Head from './Head/Head';
import MainSummary from './MainSummary/MainSummary';
import MainForm from './MainForm/MainForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }}

    render() {
      const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      return (
        <div className="App">
          <Head />
          <main>
            <MainForm 
              features={this.props.features}
              selected={this.state.selected}
              currencyFormat={USCurrencyFormat}/>
            <MainSummary
              selected={this.state.selected}
              currencyFormat={USCurrencyFormat}/>
          </main>
        </div>
      );
    }
  }
  

  export default App;


  // handleUpdateFeature = {(feature, newValue)=>this.updateFeature(feature, newValue)}/