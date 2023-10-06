"use client"

import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
