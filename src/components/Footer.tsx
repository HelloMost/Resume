import React from 'react'
import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';






let theme = createTheme();
  theme = responsiveFontSizes(theme);



export default function Footer() {
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem'}}>
            <CopyrightIcon />
            <Typography variant="h6">2024. All rights reserved</Typography>
        </Box>
        </ThemeProvider>
    )
}
