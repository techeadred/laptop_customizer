import React from 'react';
import SummaryOptions from './SummaryOptions/SummaryOptions';
import SummaryTotal from './SummaryTotal/SummaryTotal';
import './MainSummary.css';


class MainSummary extends React.Component {
    render() {
        return (
            <section class="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions 
                    Selected={this.props.selected}
                    USCurrency={this.USCurrencyFormat}/>
                <SummaryTotal 
                    Selected={this.props.selected}
                    USCurrency={this.USCurrencyFormat}/>
            </section>
        )
    }
};


export default MainSummary;