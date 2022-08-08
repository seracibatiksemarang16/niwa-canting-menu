import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box } from '@material-ui/core';
import logo from '../../assets/logo.webp'
import LazyLoad from 'react-lazyload'

export default function Header({ isMenu = false, goBack, title }) {
  return (
    <Box className='has-background-primary header' style={{ padding: '1em'}}>
      {!isMenu && <Box className='center'>
        <figure class="image is-128x128 center is-inline-block pt-5">
          <LazyLoad height={200}>
            <img className='is-rounded' alt='logo' src={logo} />
          </LazyLoad>
          <Box className='title has-text-light'>Menu</Box>
        </figure>
      </Box>}
      {isMenu && <Box className='has-text-white' style={{ padding: '1em'}}>
        <p className='title center has-text-white is-capitalized'>{title}</p>
        <ArrowBackIosIcon onClick={goBack} />
      </Box>}
    </Box>
  )
}