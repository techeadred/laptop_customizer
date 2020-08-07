import React from 'react';
import SummaryOptions from './SummaryOptions/SummaryOptions';
import SummaryTotal from './SummaryTotal/SummaryTotal';
import './MainSummary.css';


class MainSummary extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions 
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}/>
                <SummaryTotal 
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}/>
            </section>
        )
    }
};


export default MainSummary;