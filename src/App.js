import React, { Component } from 'react';
import {MdStar} from 'react-icons/md';
import {IoMdLogOut} from 'react-icons/io'
import SongList from './components/SongList';
import { Grid,Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

const titles = [
  "Bogota, col",
  "Buenos Aires, ar",
  "Mexico, mex",
  "Lima, pe"
];

class App extends Component {
 render(){
  return (
    <Grid responsive="true">
      <Row>
        <AppBar position="sticky">
          <Toolbar>
            <Col>
              <Typography>
               AppMusic
              </Typography>
            </Col>
            <Col>
              <p>user</p>
            </Col>
            <Col>
              <Typography>
               <MdStar/>
              </Typography>
            </Col>
            <Col xs = {3}>
              <Typography>
               <IoMdLogOut/>
              </Typography>
            </Col>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
      <SongList titles={titles}/>
      </Row>
    </Grid>
  );
 }
}

export default App;
