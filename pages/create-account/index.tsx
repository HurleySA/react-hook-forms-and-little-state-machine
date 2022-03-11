import { FC } from "react"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import { FormStepOne } from "../../src/FormStepOne"

const CreateAcccount: FC = () => {
    
    return <Container>
        <Header/> 
        <FormStepOne/>
    </Container>
}

export default CreateAcccount