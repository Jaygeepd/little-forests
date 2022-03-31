import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ProgressStepper from '../ProgressStepper';
import AccountHeader from '../common/AccountHeader';
import ImagePlaceholder from './images/image-placeholder.png';
import './ForestResultsPage.css';
import { Link } from 'react-router-dom';
import Image from "./images/CarolinianForest.jpg";

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ForestResultsList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  
  return (
    <div>
      <AccountHeader />    
      <br /><br /><br /><br /><br />
      <h2>Forest Type</h2>
      <br />
      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="top-half">
          <img src={Image} alt="Image placeholder" style={{ padding: 40, width: 500, height: 350 }} />
          <div className="text">
            <br /><br />
            <h3>Carolinian Forest</h3>
            <p>The Carolinian forest refers to a life zone in eastern North America characterized primarily by the predominance of deciduous (broad-leaf) forest. The term "Carolinian", which is most commonly used in Canada, refers to the deciduous forests which span across much of the eastern United States from the Carolinas northward into southern Ontario, Canada. These deciduous forests in the United States and southern Ontario share many similar characteristics and species hence their association. Today the term is often used to refer to the Canadian portion (northern limit) of the deciduous forest region while the portion in the United States is often referred to as the "Eastern deciduous forest". Trees found here include various species of ash, birch, chestnut, hickory, oak, and walnut; tallest of all is the tulip tree. Fruit trees native to this zone include the pawpaw.
            </p>
          </div>

          <Container sx={{ display:"flex", flexDirection:"column", alignItems:"center", jutifyContent:"center", marginTop:8 }} className="characteristic-list">
            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Characteristics"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Demo>
            <Button component={Link} to='/plan/carolinian' sx={{ marginBottom:2 }} variant="contained" >Select</Button>
          </Container>

          
        </div>
      </Container>

    </div>
  );
}