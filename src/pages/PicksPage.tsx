import { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Alert,
  Snackbar,
  Box,
  Chip,
} from '@mui/material';
import { oscarCategories } from '../data/oscarData';
import { OscarPicks } from '../types';

const PicksPage = () => {
  const [picks, setPicks] = useState<OscarPicks>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePickChange = (categoryId: string, nomineeId: string) => {
    setPicks((prevPicks) => ({
      ...prevPicks,
      [categoryId]: {
        id: `${categoryId}-${nomineeId}`,
        profileId: 'user123', // This would come from auth context in a real app
        categoryId,
        nomineeId,
        timestamp: new Date().toISOString(),
      },
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem('oscarPicks', JSON.stringify(picks));
    setShowSuccess(true);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Make Your Oscar Picks
      </Typography>
      
      {oscarCategories.map((category) => (
        <Card key={category.id} sx={{ mb: 4 }}>
          <CardContent>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">
                <Typography variant="h5" gutterBottom color="primary">
                  {category.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {category.description}
                </Typography>
              </FormLabel>
              
              <RadioGroup
                value={picks[category.id]?.nomineeId || ''}
                onChange={(e) => handlePickChange(category.id, e.target.value)}
              >
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {category.nominees.map((nominee) => (
                    <Grid item xs={12} md={6} key={nominee.id}>
                      <Card variant="outlined">
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          {(nominee.posterUrl || nominee.imageUrl) && (
                            <CardMedia
                              component="img"
                              sx={{ width: 150, objectFit: 'cover' }}
                              image={nominee.posterUrl || nominee.imageUrl}
                              alt={nominee.name}
                            />
                          )}
                          <CardContent>
                            <FormControlLabel
                              value={nominee.id}
                              control={<Radio />}
                              label={
                                <Box>
                                  <Typography variant="h6">
                                    {nominee.name}
                                  </Typography>
                                  {nominee.movie && nominee.name !== nominee.movie && (
                                    <Typography variant="subtitle1" color="textSecondary">
                                      {nominee.movie}
                                    </Typography>
                                  )}
                                  {nominee.role && (
                                    <Chip 
                                      label={nominee.role}
                                      size="small"
                                      sx={{ mt: 1, mb: 1 }}
                                    />
                                  )}
                                  {nominee.description && (
                                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                      {nominee.description}
                                    </Typography>
                                  )}
                                </Box>
                              }
                            />
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
        sx={{ mt: 2, mb: 4 }}
        fullWidth
      >
        Save My Picks
      </Button>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Your Oscar picks have been saved!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PicksPage; 