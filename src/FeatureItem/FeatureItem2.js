import React, {Component} from 'react';
import { render } from '@testing-library/react';
import slugify from 'slugify';
import FeatureItemOptions2 from '../FeatureItemOptions/FeatureItemOptions2'

class FeatureItem2 extends Component {
   render(){
   
    const featureItemOptions=this.props.featureItemOptions.map((part, index) => {
            
        return(
            <FeatureItemOptions2
            key={index}
            part={part}
            onSelect={this.props.onSelect}
            featureName={part.name}
            featureItemOptions={this.props.featureItems}
            selected={this.props.selected}
            features={this.props.features}
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

export default FeatureItem2