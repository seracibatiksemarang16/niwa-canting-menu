import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Grid } from '@material-ui/core';

export default function Footer({ goBack }) {
  return (
    <footer
      className='mt-5 p-2'
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        position: 'fixed',
        backgroundColor: '#795548',
      }}
    >
      <div className='content has-text-centered'>
        <Grid container>
          <Grid item xs={4} style={{ opacity: 0}}>
            <SearchIcon/>
          </Grid>
          <Grid className='has-text-white' item xs={4}>
            <HomeIcon onClick={goBack}/>
          </Grid>
          <Grid item xs={4} style={{ opacity: 0}}>
            <ContactSupportIcon/>
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}