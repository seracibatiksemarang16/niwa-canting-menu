import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box } from '@material-ui/core';

export default function Header({ isMenu = false }) {
  return (
    <Box className='has-background-primary header'>
      <Box className='center'>
        <figure class="image is-128x128 center is-inline-block pt-5">
          <img className='is-rounded' alt='logo' src='/logo.png' />
          <Box className='title has-text-light'>Menu</Box>
        </figure>
      </Box>
      {isMenu && <Box className='ml-5 mb-5 has-text-white'>
        <ArrowBackIosIcon/>
      </Box>}
    </Box>
  )
}