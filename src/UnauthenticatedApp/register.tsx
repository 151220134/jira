import { FormEvent } from "react"
import { useAuth } from "Context/AuthContext";
import { Button, Form, Input } from "antd"

export const RegisterScreen = () => {

    const {register} = useAuth()

    // FormEvent 是泛型类型
    // HTMLFormElement extends Element 鸭子类型只看接口
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // as HTMLFormElement 是类型断言，Element上没有value属性
        const username = (e.currentTarget.elements[0] as HTMLFormElement).value;
        const password = (e.currentTarget.elements[1] as HTMLFormElement).value;
        register({username, password});
    }
     
    // values中的属性名由Form.Item的name属性决定
    const handleFinish = (values: {username: string, password: string}) => {
        register(values)
    }

    return (
        <Form onFinish={handleFinish}
    // onSubmit={handleSubmit}
    >
        <Form.Item name={"username"} rules={[{required: true, message: "请输入用户名"}]}>
            <Input placeholder="用户名" type="text" id={"username"}/>
        </Form.Item>
        <Form.Item name={"password"} rules={[{required: true, message: "请输入密码"}]}>
            <Input placeholder="密码" type="text" id={"password"}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>注册</Button>
        </Form.Item>
    </Form>)
}