import FastfoodIcon from '@material-ui/icons/Fastfood'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import IcecreamIcon from '@mui/icons-material/Icecream';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const categories = [
  {
    name: 'main dishes',
    icon: <DinnerDiningIcon/>,
    bgcolor: 'has-background-primary'
  },
  {
    name: 'snacks',
    icon: <FastfoodIcon/>,
    bgcolor: 'has-background-link'
  },
  {
    name: 'drinks',
    icon: <FreeBreakfastIcon/>,
    bgcolor: 'has-background-warning'
  },
  {
    name: 'desserts',
    icon: <IcecreamIcon/>,
    bgcolor: 'has-background-danger'
  },
  {
    name: 'promos',
    icon: <FamilyRestroomIcon/>,
    bgcolor: 'has-background-info'
  },
  {
    name: 'additionals',
    icon: <MoreHorizIcon/>,
    bgcolor: 'has-background-success'
  },
  
]