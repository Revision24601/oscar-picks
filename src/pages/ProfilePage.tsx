import { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { Profile } from '../types';

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : {
      id: 'user123',
      name: '',
      email: '',
      avatarUrl: '',
    };
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: keyof Profile) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setShowSuccess(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Your Profile
      </Typography>

      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar
              src={profile.avatarUrl}
              sx={{ width: 100, height: 100, mb: 2 }}
            />
          </Box>

          <TextField
            fullWidth
            label="Name"
            value={profile.name}
            onChange={handleChange('name')}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            value={profile.email}
            onChange={handleChange('email')}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Avatar URL"
            value={profile.avatarUrl}
            onChange={handleChange('avatarUrl')}
            margin="normal"
            helperText="Enter a URL for your profile picture"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{ mt: 3 }}
          >
            Save Profile
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Profile saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProfilePage; 