import React from 'react'
import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider, Container } from '@mui/material'



let theme = createTheme();
  theme = responsiveFontSizes(theme);


export function Portfolio() {
  return(
    <>
    <ThemeProvider theme={theme}>
    <Container>
    <Box sx={{ display: 'flex', mt: '10rem', justifyContent: 'center'}}>
      <img src='./public/myPic.png' />
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h2'>My exprience</Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        1 year Web development
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        Skill: Html. Css, Javascript, React, Typescript, nodeJS, Firebase, Mui, Bootstrap, Vue,
        Figma, Postman.
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h4'>Freelance</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: "2rem"}}>
      <Typography variant='subtitle1'>
        Anya Herb
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        PenBangalow
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Typography variant='subtitle1'>
        Samuider
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h4'>Previouse job</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem'}}>
      <Typography variant='subtitle1'>
        Altitude Development Co.,Ltd.
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'center'}}>
      <Typography variant='h4'>EXTRACURRICULAR ACTIVITIES</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem'}}>
      <Typography variant='subtitle1'>
        #4share TU
      </Typography>
    </Box>
    </Container>
    </ThemeProvider>
    </>
  )
}