import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Chip,
  Button,
  Snackbar,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { oscarCategories } from '../data/oscarData';
import { OscarPicks, Profile } from '../types';
import MovieIcon from '@mui/icons-material/Movie';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

const Dashboard = () => {
  const [picks, setPicks] = useState<OscarPicks>({});
  const [profile, setProfile] = useState<Profile | null>(null);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Try to get picks from URL first
    const searchParams = new URLSearchParams(location.search);
    const sharedPicks = searchParams.get('picks');
    
    if (sharedPicks) {
      try {
        const decodedPicks = JSON.parse(atob(sharedPicks));
        setPicks(decodedPicks);
      } catch (e) {
        console.error('Failed to parse shared picks:', e);
      }
    } else {
      // Fall back to local storage if no URL picks
      const savedPicks = localStorage.getItem('oscarPicks');
      if (savedPicks) {
        setPicks(JSON.parse(savedPicks));
      }
    }

    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, [location]);

  const getNominee = (categoryId: string, nomineeId: string) => {
    const category = oscarCategories.find(cat => cat.id === categoryId);
    return category?.nominees.find(nom => nom.id === nomineeId);
  };

  const handleShare = () => {
    const encodedPicks = btoa(JSON.stringify(picks));
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}#/?picks=${encodedPicks}`;
    navigator.clipboard.writeText(shareUrl);
    setShowShareSuccess(true);
  };

  const totalPicks = Object.keys(picks).length;
  const totalCategories = oscarCategories.length;
  const isSharedView = new URLSearchParams(location.search).has('picks');

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4, mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MovieIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            {isSharedView ? "Shared Oscar Picks" : "Your Oscar Picks Dashboard"}
          </Typography>
          {!isSharedView && (
            <Tooltip title="Share your picks">
              <IconButton onClick={handleShare} color="primary" sx={{ ml: 2 }}>
                <ShareIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        
        <Card sx={{ mb: 3, bgcolor: 'primary.dark', color: 'white' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">
                  {isSharedView ? "Shared Picks" : (profile?.name || 'Anonymous User')}
                </Typography>
                <Typography variant="body1">
                  {totalPicks} of {totalCategories} categories picked
                </Typography>
              </Box>
              {!isSharedView && (
                <Button
                  component={RouterLink}
                  to="/profile"
                  variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Grid container spacing={3}>
        {oscarCategories.map((category) => {
          const pick = picks[category.id];
          const nominee = pick ? getNominee(category.id, pick.nomineeId) : null;

          return (
            <Grid item xs={12} md={6} key={category.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {category.name}
                  </Typography>
                  
                  {nominee ? (
                    <Box>
                      <Card variant="outlined" sx={{ bgcolor: 'background.paper' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          {(nominee.posterUrl || nominee.imageUrl) && (
                            <CardMedia
                              component="img"
                              sx={{ width: 120, objectFit: 'cover' }}
                              image={nominee.posterUrl || nominee.imageUrl}
                              alt={nominee.name}
                            />
                          )}
                          <CardContent>
                            <Typography variant="h6">
                              {nominee.name}
                            </Typography>
                            {nominee.movie && nominee.name !== nominee.movie && (
                              <Typography variant="subtitle2" color="textSecondary">
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
                          </CardContent>
                        </Box>
                      </Card>
                      <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block' }}>
                        Selected on: {new Date(pick.timestamp).toLocaleDateString()}
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Typography color="textSecondary">
                        No pick made yet
                      </Typography>
                      {!isSharedView && (
                        <Button
                          component={RouterLink}
                          to="/picks"
                          variant="outlined"
                          size="small"
                          sx={{ mt: 1 }}
                        >
                          Make Your Pick
                        </Button>
                      )}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {!isSharedView && (
        <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
          <Button
            component={RouterLink}
            to="/picks"
            variant="contained"
            color="primary"
            size="large"
          >
            {totalPicks === 0 ? 'Start Making Picks' : 'Update Your Picks'}
          </Button>
        </Box>
      )}

      <Snackbar
        open={showShareSuccess}
        autoHideDuration={3000}
        onClose={() => setShowShareSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowShareSuccess(false)}>
          Share link copied to clipboard!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard; 