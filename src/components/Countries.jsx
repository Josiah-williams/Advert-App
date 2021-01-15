import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import styled from 'styled-components'

class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div className="countries">
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} 
          style={{ 
            height:'34px',
            position:'absolute',
            left:'33px',
            width:'220px'
          }}
          />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
          style={{
            height:'33px',
            position:'absolute',
            left:'251px',
            width:'121px'
          }}

          />
      </div>
    );
  }
}
export default Example