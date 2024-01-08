import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import retraitDelivered from '../../../assets/svg/retraitDelivered.svg'
import orderNotFound from '../../../assets/svg/orderNotFound.svg'


const DefaultImg = ({toggleImage}) => {
  return (
    <>
    { toggleImage ?
    <Stack pt={10} textAlign={'center'}>
        <Image  src={retraitDelivered} height={{ base: '180px', sm: '240px',}}   alt="retraitDelivered" />  
    </Stack>
    :
    <Stack pt={10} textAlign={'center'}>
        <Image  src={orderNotFound} height={{ base: '180px', sm: '240px',}}   alt="orderNotFound" />  
    </Stack>
    }
    </>
  )
}

export default DefaultImg