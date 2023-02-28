import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import Pic from "../../../public/logo2.png"
import Pic2 from "../../../public/logo4.png"
const Banner = () => {
  return (
    <>
    <Box bg='purple.600'>
        <Container maxW={1400} >
            <Flex pt={{lg:'80px', base:"40px"}} pb={{lg:'100px' , base:'5px'}} px={{lg:'40px',base:'0px'}} flexDir={{lg:'row', base:'column'}} >
                <Box flexBasis='50%' px={'40px'}>
                    <Heading size={{lg:'2xl', base:'xl'}}>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pt={'10px'}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
            <Button mt='15px' size={{lg:'lg', base:'md'}} colorScheme={'teal'} >More Info</Button>
                    
                </Box>
                <Box mt={{lg:'-80px' ,base:'20px'}} pr={{base:'40px'}} flexBasis='50%' >
                <Image src={Pic} alt="animated human " width='500' height='200'></Image>
                </Box>
               
            </Flex>
        </Container>
    </Box>
    <Box bg='gray.200' >
        
            <Container m={{base:'40px 40px 0px 40px'}} maxW={1400}>
            <Flex flexBasis='50%' flexDir={{base:"column-reverse", lg:"row"}} >
                <Box flexBasis='50%' mt={{base:'30px'}}>
                    <Image src={Pic2} alt='animated character holding laptop' width='500' height='150'></Image>
                </Box>
                <Box pr='40px' pt={'50px'} flexBasis='50%'>
                    <Heading  size={'2xl'}>Program Of Studies</Heading>
                    <Text pt='20px' pr='40px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mt='20px' size={{lg:'lg',base:'md'}} colorScheme='blue'>Read More</Button>
                </Box>
            </Flex>
            </Container>
     
    </Box>
    </>
  )
}

export default Banner