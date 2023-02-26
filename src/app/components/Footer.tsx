'use client'
import React from 'react'
// import Image from 'next/image'
import logo from "../../../public/logo.png"
import { Box, Container, Grid, Heading, SimpleGrid, Text ,Image} from '@chakra-ui/react'

import Link from 'next/link'
function Footer() {
  return (
    <Box bg={'blackAlpha.900'}>
      <Container maxW={1300}>
    <SimpleGrid textAlign={{lg:"start",base:'center'}} spacing={'20px'} py='60px' templateColumns={{base: 'repeat(1,1fr)',md: 'repeat(1,1fr)',lg:'repeat(4,1fr)'}} >
      <Box >
        <Heading pb={'15px'} color='white'>About Us</Heading>
        
      <Image margin={{base:'auto', lg:'0'}} display='block' src='/logo.png' alt='Panaverse-logo' />
      <Text pt='15px' pr={{lg:'40px', base:'0'}}></Text>
      </Box>
      <Box>
        <Heading color={"white"}>Content</Heading>
        <Grid pt={'40px'} color={'gray'}>
        <Link href='/'>Home</Link>
        <Link href='/'>Syllabus</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        </Grid>
      </Box>
      <Box>
        <Heading color='white'>Follow Us</Heading>
        <Grid pt='40px' color='GrayText'>
        <Link href='/' >Facebook</Link>
        <Link href='/' >Twitter</Link>
        <Link href='/' >Linkedin</Link>
        <Link href='/' >Youtube</Link>

        </Grid>
      </Box>
      <Box>
      <Heading color='white'>Contact Us</Heading>
        <Grid pt='40px' color='GrayText'>
        <Link href='/' >number</Link>
        <Link href='/' >email</Link>
        <Link href='/' >karchi,Pakistan</Link>
       

        </Grid>
      </Box>
    </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer