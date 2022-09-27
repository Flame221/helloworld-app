import { Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'



const Home = () => {
  const [price, setPrice] = useState(0)

  return (
    <VStack>
      <Input value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
      <Text>{price + 1000}</Text>
    </VStack>
  )
}

export default Home