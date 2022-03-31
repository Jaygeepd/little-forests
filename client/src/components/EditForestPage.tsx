import * as React from 'react';
import AccountHeader from '../components/common/AccountHeader';
import { Grid, Button, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImagePlaceholder from './Pages/images/image-placeholder.png';
import { Link } from 'react-router-dom';
import { EditText, EditTextarea } from 'react-edit-text';
import Image from "./Pages/images/CarolinianForest.jpg";

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


function EditForestPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [name, setName] = React.useState("Carolinian Forest");
  const [desc, setDesc] = React.useState("The Carolinian forest refers to a life zone in eastern North America characterized primarily by the predominance of deciduous (broad-leaf) forest. The term 'Carolinian', which is most commonly used in Canada, refers to the deciduous forests which span across much of the eastern United States from the Carolinas northward into southern Ontario, Canada. These deciduous forests in the United States and southern Ontario share many similar characteristics and species hence their association. Today the term is often used to refer to the Canadian portion (northern limit) of the deciduous forest region while the portion in the United States is often referred to as the 'Eastern deciduous forest'. Trees found here include various species of ash, birch, chestnut, hickory, oak, and walnut; tallest of all is the tulip tree. Fruit trees native to this zone include the pawpaw.");

  return (
    <div>
        <AccountHeader />
        <Grid
            container
            style = {{ marginTop: '10vh', marginBottom: '20vh' }}
            justifyContent ="center"
            alignItems = "stretch"
            direction = "row"
        >
            <Grid item xs={12}>
                <h2>Edit Page</h2>
            </Grid>
            
            <div className="top-half">
                <img src={Image} alt="Image placeholder" style={{ padding: 40, width: 500, height: 350 }} />
                <div className="text">
                    
                    <Typography variant="h6" sx={{padding:2, marginBottom:0 }}>
                        <div style={{whiteSpace: 'nowrap'}}>
                            <EditText
                                name='name'
                                style={{ padding: '10px', width: '550px' }}
                                value={name}
                                onChange={setName}
                                placeholder=''
                            />
                        </div>
                    </Typography>
                    <Typography variant="body1" sx={{ padding:2, paddingBottom:8 }}>
                    <EditTextarea
                        name='description'
                        rows={4}
                        value={desc}
                        onChange={setDesc}
                        style={{ padding: '10px', width: '550px', height: '200px' }}
                        placeholder=''
                        />
                    </Typography>
                </div>

                <div className="characteristic-list">
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
                                        sx = {{ border:1, padding:1 }}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </div>
            </div>
            <Grid item xs={12}>
                <Button component={Link} to='/dashboard/admin' variant="outlined" size="medium">Save</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default EditForestPage;
