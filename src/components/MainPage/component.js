import React, { useState } from 'react'
import { categories } from './constant'
import { Grid, Box } from '@material-ui/core'
import Header from '../Header';
import Footer from '../Footer';
import mainDish from '../../assets/mainDish.png'
import snack from '../../assets/snack.png'
import drink from '../../assets/drink.png'
import promo from '../../assets/promo.png'
import additional from '../../assets/additional.png'
import MenuPage from '../MenuPage';

export default function MainPage() {
  const images = [mainDish, snack, drink, promo, additional]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('');

  const goBack = () => {
    setIsMenuOpen(false);
    setCurrentMenu('')
  }

  const renderMenu = () => {
    return <MenuPage current={currentMenu}/>
  }
  
  const renderListCategory = () => {
    const List = ({ icon, name, bgcolor, index}) => {
      return (
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <Box
            className={`${bgcolor} box m-2 pt-6`}
            style={{
              minHeight: "10em",
              backgroundImage: `url(${images[index]})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              setCurrentMenu(name)
              setIsMenuOpen(true)
            }}
          >
            <Box className='has-text-white'>
            {icon} <p className='is-capitalized subtitle has-text-white'>{name}</p>
            </Box>
          </Box>
        </Grid>
      )
    }

    return categories?.map(({icon, name, bgcolor}, index) =>
      <List
        key={index}
        icon={icon}
        name={name}
        bgcolor={bgcolor}
        index={index}
      />)
  }
  return (
    <>
      <Header
        isMenu={isMenuOpen}
        goBack={goBack}
        title={currentMenu}
      />
      <Grid container style={{marginBottom: '3em'}}>
        {isMenuOpen ? renderMenu() : renderListCategory()}
      </Grid> 
      <Footer goBack={goBack}/>
    </>
   
  )
}