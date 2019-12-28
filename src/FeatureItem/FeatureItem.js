import React, {Component} from 'react';
import FeatureItemOption from '../FeatureItemOptions/FeatureItemOptions'

class FeatureItem extends Component {
    render () {
        const featureItemOptions=this.props.featureItemOptions.map((part, index) => {
            
        return(
            <FeatureItemOption
            key={index}
            part={part}
            onSelect={this.props.onSelect}
            featureName={part.name}
            />
        )
       

    }
         )
     return (
            <div>
                <div className="feature_item_name">
                    <ul className="feature_item_options">
                        {featureItemOptions}
                    </ul>
                </div>
                
            </div>
    
    )
}
}

export default FeatureItem