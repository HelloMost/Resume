import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Most
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button component={Link} to='/' color="inherit">Home</Button>
          <Button component={Link} to='/about' color="inherit">About</Button>
          <Button component={Link} to='/portfolio' color="inherit">Portfolio</Button>
          <Button component={Link} to='/contact' color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
