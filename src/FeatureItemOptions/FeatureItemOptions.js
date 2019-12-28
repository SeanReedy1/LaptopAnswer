import React, {Component} from 'react';

class FeatureItemOption extends Component {
    render(){
        return(
            <div>
            <li>
            <button ref="button" onClick={e => this.props.onSelect(this.props.featureName, this.props.part)}>
                {this.props.featureName}
                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.part.cost) })
                
            </button>
            </li>
            </div>
       )
    }
}

export default FeatureItemOption