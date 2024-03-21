import React from 'react'
import './Home.css'
import Banner from '../components/Banner'
import { Box, Container, createTheme, responsiveFontSizes, ThemeProvider, Typography, Link } from '@mui/material'





let theme = createTheme();
  theme = responsiveFontSizes(theme);




export function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Banner />
    <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
        <Typography variant='h4'>Technology I use</Typography>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem'}}>
        <img className='small-img' src= './public/icon/fireBase.png' />
        <img className='small-img' src= './public/icon/nodeJS.png' />
        <img className='small-img' src= './public/icon/mui.png' />
        <img className='small-img' src= './public/icon/react.png' />
        <img className='small-img' src= './public/icon/typescript.png' />
    </Box>
    <Container>
        <Box sx={{display:'flex', flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', alignItems: 'center', mt: '10rem', background:''}}>
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px', order: {xs: 2, md: 1 } }}>
                <Typography variant="h1" gutterBottom sx={{ mx: '2rem'}}>Anya Herb</Typography>
                <Typography variant="subtitle1"  gutterBottom sx={{ mx: '2rem'}}>
                    A showcase supplement website by Html, Css, Javascript, to describe about the product benefits and contact to buy product with shop link and phone number.
                    Ofcourse, there is a video to show about client which use take supplement.
                    <Link href="https://anya-herb.vercel.app/">Anya Herb Website</Link>
                </Typography>
            </Box>
            <Box sx={{display: 'flex', order: {xs: 1, md: 2}}} component='img' src="./public/portfolio/anyaHerb.png" title="activities" width='640px' />
        </Box>
        <Box sx={{ display: 'flex',flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', alignItems: 'center', mt: '10rem'}}>
            <Box sx={{display: 'flex'}} component='img' src="./public/portfolio/penbangalow.png" title="activities" width='640px' />
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px', order: {xs: 2, md: 1 } }}>
                <Typography variant="h1" gutterBottom sx={{ mx: '2rem'}}>Penbangalow</Typography>
                <Typography variant="subtitle1"  gutterBottom sx={{ mx: '2rem'}}>
                    Demo hotel website which use Html, Css, and Bootstrap library to show to room for client before make a decision
                    and link to reservation website for customer who interest to reserve the room and this website show the accommodation 
                    which  hotel prepare.<Link href="https://penbungalow.vercel.app/">Penbangalow Website</Link>
                </Typography>
            </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', alignItems: 'center', mt: '10rem', background:''}}>
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px', order: {xs: 2, md: 1 } }}>
                <Typography variant="h1" gutterBottom sx={{ mx: '2rem'}}>Eat</Typography>
                <Typography variant="subtitle1"  gutterBottom sx={{ mx: '2rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident aspernatur ad dolor, commodi recusandae illum aliquam dolorem asperiores quas ratione aperiam ab reiciendis qui unde mollitia quos sint! Dolor?</Typography>
            </Box>
            <Box sx={{display: 'flex', order: {xs: 1, md: 2}}} component='img' src="./public/portfolio/anyaHerb.png" title="activities" width='640px' />
        </Box>
    </Container>
    </ThemeProvider>
    </>
  )
}