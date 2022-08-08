import React, { useState } from 'react'
import snack from '../../assets/menu/snack.png'
import main1 from '../../assets/menu/main1.png'
import main2 from '../../assets/menu/main2.png'
import main3 from '../../assets/menu/main3.png'
import main4 from '../../assets/menu/main4.png'
import drink1 from '../../assets/menu/drink1.png'
import drink2 from '../../assets/menu/drink2.png'
import drink3 from '../../assets/menu/drink3.png'
import promo from '../../assets/menu/promo.png'
import additional from '../../assets/menu/additional.png'
import LazyLoad from 'react-lazyload';

export default function MenuPage({ current }) {
  const [list, setList] = useState([])
  
  React.useEffect(() => {
    switch (current) {
      case 'main dishes':
        setList([main1, main2, main3, main4])
        break;
      case 'drinks':
        setList([drink1, drink2, drink3])
        break;
      case 'snacks':
        setList([snack])
        break;
      case 'promos':
        setList([promo])
        break;
      case 'additionals':
        setList([additional])
        break;
      default:
        setList([])
        break;
    }
  }, [current])
  
  return (
    <div className='container'>
      {list?.map(item => {
        return (
          <figure class="image box">
            <LazyLoad height={200}>
              <img alt={current} src={item} />
            </LazyLoad>
          </figure>
        )
      })}
    </div>
  )
}