import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'







let theme = createTheme();
  theme = responsiveFontSizes(theme);




export function Contact() {
  return(
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', mt: '10rem', justifyContent: 'center'}}>
      <Typography variant='h2'>Contact</Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        E-mail: thanaphonrt@gmail.com
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        Phone: +66853372444
      </Typography>
    </Box>
    </ThemeProvider>
    </>
    
  )
}
