import { Form, Input, Button, Checkbox } from "antd"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Container, SubTitle, Title, TitleContainer } from "./style";
import UserRegister from "../../API/UserAPI/UserRegister";
import { useNavigate } from "react-router-dom";


const Cadastro = () => {
    const [form] = Form.useForm()
    const { setRegistration } = useContext(UserContext)
    const navigate = useNavigate()
    const onFinish = (e) => {
        // console.log(e)
        // setRegistration(e)
        UserRegister.Register(e)
        navigate('/cadastro/sucesso', {replace: true})
    }

    return (
        <Container>
            <TitleContainer>
                <Title>Cadastro</Title>
                <SubTitle>* Campos obrigatórios.</SubTitle>
            </TitleContainer>
           <Form layout="horizontal" form={form} onFinish={onFinish} >
                <Form.Item name='name' label='Nome:' rules={[{required: true, message:'Campo Nome é obrigatório.'}]}>
                    <Input placeholder="Nome"/>
                </Form.Item>
                <Form.Item name='email' label='E-mail:' rules={[{required: true, message:'Campo E-mail é obrigatório.'}]}>
                    <Input placeholder="E-mail" type='email'/>
                </Form.Item>
                <Form.Item name='password' label='Senha:' rules={[{required: true, message:'Campo Senha é obrigatório.'}]}>
                    <Input.Password placeholder='Senha'/>
                </Form.Item>
                <Form.Item name='interests' label='Interesses:'>
                    <Checkbox>Tecnologia</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Cadastrar</Button>
                </Form.Item>
           </Form>
        </Container>
    )
}

export default Cadastro;


