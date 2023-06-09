"use client"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = createTheme({
    palette: { mode: "dark" }
  });
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
