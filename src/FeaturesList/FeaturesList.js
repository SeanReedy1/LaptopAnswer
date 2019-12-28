import React, {Component} from 'react'
import FeatureItem from '../FeatureItem/FeatureItem';

class FeaturesList extends Component {
    render(){
        
        const featureItems=Object.keys(this.props.features).map((key, idx) => {
        
            return(
            <FeatureItem
            key={key}
            name={key}
            selected={this.props.selected}
            onSelect={this.props.onSelect}
            featureItemOptions={this.props.features[key]}
            
            />
            )
        })

        return(
            <main className="feature_item">
                {featureItems}
                
            </main>
        )

       
        
    }

}

export default FeaturesList