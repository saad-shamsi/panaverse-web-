'use client'

import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from "./components/Header"
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <ChakraProvider>
    <Header/>
    <Footer/>
    </ChakraProvider>
  
    )
}
