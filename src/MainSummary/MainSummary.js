import React from 'react';
import SummaryOptions from './SummaryOptions/SummaryOptions';
import SummaryTotal from './SummaryTotal/SummaryTotal';
import './MainSummary.css';


class MainSummary extends React.Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return (
            <section class="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions 
                    selected={this.props.selected}
                    USCurrency={USCurrencyFormat}/>
                <SummaryTotal 
                    selected={this.props.selected}
                    USCurrency={USCurrencyFormat}/>
            </section>
        )
    }
};


export default MainSummary;