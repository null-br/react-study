import React, { Component } from 'react';
import ButtonOne from './ButtonOne';
import ButtonTwo from './ButtonTwo';
import ButtonWithHOC from './ButtonWithHOC';

class Index extends Component {
  render() {
    return (
      <div>
        <ButtonOne />
        <ButtonTwo disable />
        <ButtonWithHOC disable />
      </div>
    );
  }
}

export default Index;
