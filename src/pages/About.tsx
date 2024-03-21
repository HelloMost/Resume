import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider, Container } from '@mui/material'



let theme = createTheme();
  theme = responsiveFontSizes(theme);


export function About() {
  return(
    <>
    <ThemeProvider theme={theme}>
    <Container>
    <Box sx={{ display: 'flex', mt: '10rem', justifyContent: 'center'}}>
      <img src='./workPic/myPic.png' />
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h2'>About me</Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        Hi, my name is Thanaphon Rueangthong
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '1rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        I am a passionate developer and Attentive with optimism, Interest in new technology. Work
        synergically under pressure and keep improving myself.
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h2'>React Developer</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        Working proficiency skill with 1 year of exprience in developing. I was working as
        a Civil engineer but I love to be a developer, so I try my 1 year to working with
        Html, Css, Javascript, Typescript, and React. Certainly that I keep improving 
        myself and I interest in new things. I am always ready to gather new knowledge as much as i can.
      </Typography>
    </Box>
    </Container>
    </ThemeProvider>
    </>
  )
}