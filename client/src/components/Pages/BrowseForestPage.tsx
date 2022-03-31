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
import { Header } from '../common';
import carolinian from './images/CarolinianForest.jpg';
import './ForestResultsPage.css';
import { Link } from 'react-router-dom';

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

export default function BrowseForestPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  
  return (
    <div>
      <Header />    
      <Container className="Title"
        sx={{ 
            display:"flex", flexDirection:"column", justifyContent:"center", marginTop:15 
        }}
      >
        <Button component={Link} to='/browseforests' sx={{ width: '5px', borderRadius:5, marginTop:2 }} variant="contained">Back</Button>
        <Typography variant="h5" sx={{ marginBottom:2 }}>Carolinian Forest</Typography>
      </Container>

      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="top-half">
          <img src={carolinian} alt="carolinian" style={{ padding: 40, width: 500, height: 266 }} />
          <div className="text">
            <br />
            <h3>Carolinian (Deciduous)</h3>
            <p>Location: Southwestern Ontario
                Predominant Tree Species: Beech, Maple, Black Walnut, Hickory, Oak</p> 
            <p>The Carolinian forest refers to a life zone in eastern North America characterized 
              primarily by the predominance of deciduous (broad-leaf) forest. The term "Carolinian",
               which is most commonly used in Canada, refers to the deciduous forests which span across 
               much of the eastern United States from the Carolinas northward into southern Ontario, Canada. 
               These deciduous forests in the United States and southern Ontario share many similar characteristics 
               and species hence their association. Today the term is often used to refer to the Canadian portion 
               (northern limit) of the deciduous forest region while the portion in the United States is often referred 
               to as the "Eastern deciduous forest". Trees found here include various species of ash, birch, chestnut, 
               hickory, oak, and walnut; tallest of all is the tulip tree. Fruit trees native to this zone include the pawpaw.</p>
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
            <Button component={Link} to='/browse-plant-list' sx={{ marginTop:5, borderRadius:5 }} variant="contained">View Plant List</Button>
          </Container>

          
        </div>
      </Container>

    </div>
  );
}