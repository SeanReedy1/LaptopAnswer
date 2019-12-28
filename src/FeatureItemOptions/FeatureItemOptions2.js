import React, {Component} from 'react';
import slugify from 'slugify';
import { render } from '@testing-library/react';

class FeatureItemOptions2 extends Component {

    render(){

 
      const features = Object.keys(this.props.features).map((feature, idx) => {
        
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.featureName)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({(item.cost)})
              </label>
            </div>
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
        <div>       
        {features} 
        <p>ECW</p>
        </div>
      )
  }
}

  export default FeatureItemOptions2

