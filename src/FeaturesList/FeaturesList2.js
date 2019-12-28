import React, {Component} from 'react'
import FeatureItem from '../FeatureItem/FeatureItem';
import FeatureItem2 from '../FeatureItem/FeatureItem2'
import FeatureItem3 from '../FeatureItem/FeatureItem3'

class FeaturesList2 extends Component{

render(){


        return(
        <FeatureItem3
        features={this.props.features}
        key={Math.random()}
        name={"Joe"}
        selected={this.props.selected}
        onSelect={this.props.onSelect}
      
        
        />
        )
    }

    
    
}

export default FeaturesList2