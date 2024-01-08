import React from 'react'
import TrClientClient from './clientToClient/trClientClient/TrClientClient'
import TrClientGab from './clientToGab/trClientGab/TrClientGab'
import TrClientBank from './clientToBank/trClientBank/TrClientBank'
import TrKycBank from './KycToBank/trKycBank/TrKycBank'
import TrKycGab from './KycToGab/trKycGab/TrKycGab'
import TypeTransferRoot from './TypeTransferRoot'
import TrRoot from './trrRoot/trRoot/TrRoot'

const TransfertRoot = () => {
  return (
    <>
        <TrRoot/>

    </>
  )
}

export default TransfertRoot