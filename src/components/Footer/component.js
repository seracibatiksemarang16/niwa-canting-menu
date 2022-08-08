import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Grid } from '@material-ui/core';

export default function Footer() {
  return (
    <footer
      className='has-background-primary mt-5 p-2'
      style={{bottom: 0, left: 0, width: "100%", position: 'fixed'}}
    >
      <div className='content has-text-centered'>
        <Grid container>
          <Grid item xs={4}>
            <SearchIcon/>
          </Grid>
          <Grid item xs={4}>
            <HomeIcon/>
          </Grid>
          <Grid item xs={4}>
            <ContactSupportIcon/>
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}