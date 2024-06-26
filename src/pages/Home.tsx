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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5rem' }}>
                    <Typography variant='h4'>Technology I use</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '5rem' }}>
                    <img className='small-img' src='./icon/fireBase.png' />
                    <img className='small-img' src='./icon/nodeJS.png' />
                    <img className='small-img' src='./icon/mui.png' />
                    <img className='small-img' src='./icon/react.png' />
                    <img className='small-img' src='./icon/typescript.png' />
                    <img className='small-img' src='./icon/vite.png' />
                </Box>
                <Container>
                <Box className="certificate-box">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', alignItems: 'center', mt: '10rem', background: '' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', order: { xs: 2, md: 1 } }}>
                            <Typography variant="h2" gutterBottom sx={{ mx: '2rem' }}>Anya Herb</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ mx: '2rem' }}>
                                A showcase supplement website by Html, Css, Javascript, to describe about the product benefits and contact to buy product with shop link and phone number.
                                Ofcourse, there is a video to show about client which use take supplement.
                                <Link href="https://anya-herb.vercel.app/">Anya Herb Website</Link>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', order: { xs: 1, md: 2 } }} component='img' src="./portfolio/anyaHerb.png" width='640px' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', alignItems: 'center', mt: '10rem' }}>
                            <Box sx={{ display: 'flex' }} component='img' src="./portfolio/penbangalow.png" width='640px' />
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', order: { xs: 2, md: 1 } }}>
                            <Typography variant="h2" gutterBottom sx={{ mx: '2rem' }}>Penbangalow</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ mx: '2rem' }}>
                                Demo hotel website which use Html, Css, and Bootstrap library to show to room for client before make a decision
                                and link to reservation website for customer who interest to reserve the room and this website show the accommodation
                                which  hotel prepare.<Link href="https://penbungalow.vercel.app/">Penbangalow Website</Link>
                            </Typography>
                        </Box>
                    </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5rem' }}>
                        <Typography variant='h1'>Certificate</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>
                    <Box className="certificate-box">
                        <Box sx={{ display: 'flex', gap: '2rem', mt: '2rem', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="./workPic/frontEndCertifiacte.png" width='640px' />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="./workPic/certificate.png" width='640px' />
                        </Box>
                        </Box>
                    </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}