import CustomAppBar from '~/components/appBar'
import Card from '~/components/card'
import Container from '~/components/container'
import "./style.scss"
import { Divider } from '@mui/material'

const Transaction = () => {
  return (
    <Container motion className="transaction">
      <CustomAppBar title="Transaction" firstButton={undefined} />
      <Container
        className="transaction-container"
        padding="20px 56px"
        maxWidth="800px"
      >

        <Card 
          name='Motorbike engine oil'
          type='Expense'
          date='04-16-19'
        />

        <Divider sx={{borderStyle: 'dashed'}}/>

      </Container>
    </Container>
  )
}

export default Transaction
