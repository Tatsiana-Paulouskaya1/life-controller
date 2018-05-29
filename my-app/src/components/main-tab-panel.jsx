import React, { Component } from 'react';
// import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import AppBar from 'material-ui/AppBar';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import tabs from '../constants/tabs-data';

const STYLES = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    marginTop: theme.spacing.unit * 2,
  },
});


class MainTabPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    return this.setState({ value });
  }

  render() {
    return (
      <div >
        <MuiThemeProvider>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            {tabs.map(({ title }) => <Tab label={title} key={title} />)}
          </Tabs>
        </MuiThemeProvider>
        {this.state.value === 0 && <div>Item One</div>}
        {this.state.value === 1 && <div>Item Two</div>}
        {this.state.value === 2 && <div>Item Three</div>}
        {this.state.value === 3 && <div>Item fore</div>}
        {this.state.value === 4 && <div>Item five</div>}
        {this.state.value === 5 && <div>Item six</div>}
        {this.state.value === 6 && <div>Item seven</div>}
        {this.state.value === 7 && <div>Item eight</div>}
        {this.state.value === 8 && <div>Item nine</div>}
        {this.state.value === 9 && <div>Item ten</div>}
        {this.state.value === 10 && <div>Item eleven</div>}
        {this.state.value === 11 && <div>Item Twelve</div>}
      </div>
    );
  }
}

export default withStyles(STYLES)(MainTabPanel);
