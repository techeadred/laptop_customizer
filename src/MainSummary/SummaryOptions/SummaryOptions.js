import React from 'react';
import './SummaryOptions.css';


class SummaryOptions extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.Selected[feature];

            return (

                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });
        return (
            {summary}
        )
    }
};


export default SummaryOptions;