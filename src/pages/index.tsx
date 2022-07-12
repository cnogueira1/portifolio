import type { NextPage } from 'next'
import { StepPage } from '../components'
import { StepOne } from '../components/StepOne/One'

const Home: NextPage = () => {
  return (
    <div>
      <StepPage idColor='1'>
        <StepOne />
      </StepPage>
      <StepPage idColor='2'>
        a
      </StepPage>
    </div>
  )
}

export default Home
