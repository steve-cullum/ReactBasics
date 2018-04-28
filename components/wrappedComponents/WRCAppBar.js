import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const WRCAppBar = props => (
  <MuiThemeProvider>
    <AppBar {...props} />
  </MuiThemeProvider>
);

export default WRCAppBar;
