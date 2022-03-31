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
import Image from './images/norwaymaple.jpg';
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

export default function IndivPlantPage() {
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
        <Button component={Link} to='/browseplants' sx={{ width: '5px', borderRadius:5, marginTop:2 }} variant="contained">Back</Button>
        <Typography variant="h5" sx={{ marginBottom:2 }}>Norway Maple</Typography>
      </Container>

      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="top-half">
          <img src={Image} alt="norway maple" style={{ padding: 40, width: 500, height: 266 }} />
          <div className="text">
            <br />
            <h3>Norway Maple (Acer platanoides)</h3>
            <ul>
                <li><b>Family:</b> Sapindaceae</li>
                <li><b>Genus:</b> Acer</li>
                <li><b>Light Requirements:</b> Sun, Partial Shade</li>
                <li><b>Soil Texture:</b> Clay, Sand, Loam</li>
                <li><b>Moisture Requirements:</b> Dry, Normal, Moist</li>
                <li><b>Height:</b> 1500 cm - 3000 cm</li>
            </ul> 
            <p>The Norway Maple is native to Europe and can be found throughout Ontario, Quebec and NewfoundLand. 
                It inhabits mainly urban areas but will also grow in open mesic wooded areas and is quite tolerant 
                to pollution. Its shallow roots break sidewalks and its dense foliage and shallow roots prevent 
                native species from growing underneath. It is an invasive species in Canada, and control methods 
                include cutting, and digging or pulling out saplings. Unlike most other maples, it has a milky sap 
                and is tolerant of any soil conditions. This species, which was introduced to the United States from 
                Europe in 1756, is still being sold in nurseries today.
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
          </Container>

          
        </div>
      </Container>

    </div>
  );
}