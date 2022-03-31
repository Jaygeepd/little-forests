import React from 'react'
import ProgressStepper from '../ProgressStepper';
import AccountHeader from '../common/AccountHeader';
import { Grid, Container, Button, CardMedia } from '@mui/material';
import samplePDF from '../../public/Plant-List.pdf';

function PlantListPage() {
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
          <h2>Plant List</h2>
        </Grid>
        
        <Grid>
          <Grid item xs={3} />

          <Grid item xs={8}>
            <CardMedia
              component="img"
              alt="pdf-img"
              height="250"
              image={require("./images/Plant-List.jpg")}
              sx={{
                backgroundColor: "#E1E1E1",
                width: 700,
                height: 800,
                border: 1,
                borderRadius: 5,
              }}
            />

          </Grid>

        </Grid>

        <Grid item xs={12}> 
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginRight:10 }}>Save as CSV</Button>
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginLeft:10 }}><a href={ samplePDF } >Save as PDF</a></Button>
        </Grid>
      </Grid>
      

    </div>
  )
}

export default PlantListPage;

