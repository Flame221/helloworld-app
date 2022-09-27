import React from 'react'
import { Heading, HStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack p={5}>
      <Heading>У сватов</Heading>
      <HStack>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
      </HStack>
    </HStack>
  )
}

export default NavBar