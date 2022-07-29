import { Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Card } from '../../components/Card'
import { Layout } from '../common/layouts/CenterPage'

const Home = () => {
  const navigate = useNavigate()

  const handleButton = () => {
    const id = uuidv4()
    navigate(`/list/${id}`)
  }

  return (
    <Layout>
      <Card>
        <Heading>Listas</Heading>
        <Text>Crie e compartilhe listas com grupo de pessoas</Text>

        <Button onClick={handleButton} colorScheme="twitter">
          Começar
        </Button>
      </Card>
    </Layout>
  )
}

export default Home
