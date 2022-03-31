import * as React from 'react';
import AccountHeader from '../components/common/AccountHeader';
import { Grid, Button, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImagePlaceholder from './Pages/images/image-placeholder.png';
import { Link } from 'react-router-dom';
import { EditText, EditTextarea } from 'react-edit-text';
import Image from "./Pages/images/norwaymaple.jpg";

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


function GenericEditPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [name, setName] = React.useState("Norway Maple");
  const [desc, setDesc] = React.useState("The Norway Maple is native to Europe and can be found throughout Ontario, Quebec and NewfoundLand. It inhabits mainly urban areas but will also grow in open mesic wooded areas and is quite tolerant to pollution. Its shallow roots break sidewalks and its dense foliage and shallow roots prevent native species from growing underneath. It is an invasive species in Canada, and control methods include cutting, and digging or pulling out saplings. Unlike most other maples, it has a milky sap and is tolerant of any soil conditions. This species, which was introduced to the United States from Europe in 1756, is still being sold in nurseries today.");

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
                    <br /><br />
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

export default GenericEditPage;
