import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render(){
    return(
    <div style={{width: '100', margin: 'auto'}}>
      <Grid className='landing-grid'>
      <Cell col={12}>
      <img src=
      "https://img.pngio.com/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png"
      alt='avatar'
      className='avatar'/>

      <div className='banner-text'>
        <h1>React Native Mobile Developer</h1>

        <hr/>
        <p> HTML/CSS | Javascript | Bootstrap | React Native | React JS </p>

        <div className='social-links'>

        {/* linkedin */}
          <a href='https://www.linkedin.com/in/mwhyus/' rel='noopener nooferer' target='_blank'>
            <i className='fa fa-linkedin-square' aria-hidden='true' />
          </a>

        {/* Github */}
          <a href='https://github.com/mwhyus' rel='noopener nooferer' target='_blank'>
            <i className='fa fa-github-square' aria-hidden='true' />
          </a>

        {/* Gitlab */}
          <a href='https://gitlab.com/mwhyus' rel='noopener nooferer' target='_blank'>
            <i class="fa fa-gitlab" aria-hidden="true"></i>
          </a>

        {/* Instagram */}
          <a href='https://www.instagram.com/mwhyus/' rel='noopener nooferer' target='_blank'>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>



        </div>
      </div>
      </Cell>
      </Grid>
    </div>
  )
  }
}

export default LandingPage;
