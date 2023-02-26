"use client";
import { Box, Container, SimpleGrid,Flex,Button,IconButton ,Menu,
  MenuButton,
  MenuList,
  MenuItem,} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import logo from "../../../public/logo.png"

import { HamburgerIcon,AddIcon,ExternalLinkIcon ,EditIcon,RepeatIcon} from '@chakra-ui/icons'

function Header() {
  return (
    <Box boxShadow='lg'>
      <Container maxW={1400} >
        <SimpleGrid  templateColumns={{lg:'repeat(3,1fr)',base:'repeat(2,2fr)'}}>
          {<Image src={logo} alt="logo " width={100} />
            
          }
            {/* <Box> LOgo lagy ga yaha image tag sy\
            saari imgs public folder mein daalty hyn
            import from public folder
            </Box> */}
            <Flex display={{ lg:"Flex",base:'none' }} placeItems='center' color={'black'} fontSize={18} fontWeight='semibold' gap={10}>
                <Link href=''>Home</Link>
                <Link href=''>Syllabus</Link>
                <Link href=''>Explore</Link>
                <Link href=''>About</Link>
                <Link href=''>Contact</Link>
            </Flex>
            <Box float={"right"} display={{ lg:"initial",base:'none' }}>
                <Button mt='10px' size='lg' colorScheme='teal' float='right'>Apply</Button>
            </Box>
            <Box pt={'8px'} pl='120px' p={'none'} display={{lg:'none', base:'initial'}} >
            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
            </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Header;
