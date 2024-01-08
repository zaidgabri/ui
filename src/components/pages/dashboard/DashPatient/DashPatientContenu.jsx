import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import InfosPatient from './InfosPatient/InfosPatient'
import PatientRvList from './listRdv/PatientRvList'


const DashPatientContenu = () => {
  return (
   <Tabs mt="40px"  colorScheme='teal' variant="enclosed" >
    <TabList>
        <Tab _selected={{color : 'white', bg:'teal.400'}}>Mes infos personnelles</Tab>
        <Tab _selected={{color : 'white', bg:'teal.400'}}>Liste des rendez-vous</Tab>
        <Tab _selected={{color : 'white', bg:'teal.400'}}>E-Ordinnances</Tab>
        <Tab _selected={{color : 'white', bg:'teal.400'}}>Documents</Tab>
        <Tab _selected={{color : 'white', bg:'teal.400'}}>Les proches</Tab>
    </TabList>


    <TabPanels>
        <TabPanel>
            <InfosPatient/>
        </TabPanel>

        <TabPanel>
            <PatientRvList/>
        </TabPanel>
    </TabPanels>

   </Tabs>
  )
}

export default DashPatientContenu