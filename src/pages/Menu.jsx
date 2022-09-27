import { Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../components/ProductCard'

const Menu = () => {
  return (
    <VStack>
      <Heading>Наше меню</Heading>
      <HStack>
        <ProductCard title='Мясо по чеченски' price='220' />
        <ProductCard title='Жареная рыба' price='220' />
        <ProductCard title='Картошка по мусульмански' price='220' />
      </HStack>
    </VStack>
  )
}

export default Menu