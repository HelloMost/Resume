import { Container, Typography, Box, Button, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom';




let theme = createTheme();
theme = responsiveFontSizes(theme);

function Banner() {
    return (
        <div className="banner-bg">
            <ThemeProvider theme={theme}>
            <Container>
                <Box sx={{display:'flex', flexDirection:'column', mt:'10rem'}}>
                        <Typography sx={{ typography: {xs: 'h2', md: 'h1'}}} gutterBottom>Front-End React Developer</Typography>
                        <Typography variant='h4' gutterBottom>Hi! My name is Thanaphon Rueangthong</Typography>
                        <Typography variant='h4' gutterBottom>A passionate developer</Typography>
                        <Typography variant='h4' gutterBottom>I enjoy learning new things</Typography>
                </Box>
                <Button component={Link} to='/about' color="primary" variant='contained'>About</Button>
            </Container>
            </ThemeProvider>
        </div>
    )
}

export default Banner