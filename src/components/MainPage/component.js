import React from 'react'
import { categories } from './constant'
import { Grid, Box } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer';

export default function MainPage() {

  const renderListCategory = () => {
    const List = ({ icon, name, bgcolor}) => {
      return (
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <Box className={`box m-2 pt-6`} style={{minHeight: "10em"}}>
            {icon}
            <p className='is-capitalized subtitle'>{name}</p>
          </Box>
        </Grid>
      )
    }

    return categories?.map(({icon, name, bgcolor}, index) =>
      <List key={index} icon={icon} name={name} bgcolor={bgcolor}/>)
  }
  return (
    <>
      <Header/>
      <Grid container>
        {renderListCategory()}
      </Grid> 
      <Footer/>
    </>
   
  )
}