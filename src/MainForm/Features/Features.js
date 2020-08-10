import React from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions/FeatureOptions'
import './Features.css';


class Features extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                   <FeatureOptions 
                        feature={this.feature}
                        item={this.item}
                        features={this.features}
                        selected={this.props.selected}
                        itemHash={this.itemHash}
                    />
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            (features)
        )
    }
};


export default Features;