import * as React from 'react';
import AccountHeader from '../components/common/AccountHeader';
import { Grid, Button, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImagePlaceholder from './Pages/images/image-placeholder.png';
import { Link } from 'react-router-dom';
import { EditText, EditTextarea } from 'react-edit-text';

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
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");

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
                <img src={ImagePlaceholder} alt="Image placeholder" style={{ padding: 40, width: 500, height: 350 }} />
                <div className="text">
                    <br /><br />
                    <Typography variant="h6" sx={{padding:2, marginBottom:0 }}>
                        <div style={{whiteSpace: 'nowrap'}}>
                            <EditText
                                name='name'
                                style={{ border: '1px solid #999', padding: '10px', width: '550px' }}
                                value={name}
                                onChange={setName}
                                placeholder='Enter name'
                            />
                        </div>
                    </Typography>
                    <Typography variant="body1" sx={{padding:2, paddingBottom:8 }}>
                    <EditTextarea
                        name='description'
                        rows={4}
                        value={desc}
                        onChange={setDesc}
                        style={{ border: '1px solid #999', padding: '10px', width: '550px' }}
                        placeholder='Enter description'
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
