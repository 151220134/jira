import { useAuth } from "context/AuthContext";
import { Form, Input } from "antd"
import { LongButton } from "UnauthenticatedApp";
import { useAsync } from "utils/useAsync";

export const LoginScreen = ({onError}:{onError:(error:Error)=>void}) => {

    const {login} = useAuth()
    const {run, isLoading} = useAsync(undefined, {throwOnError: true});

    // FormEvent 是泛型类型
    // HTMLFormElement extends Element 鸭子类型只看接口
    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     // as HTMLFormElement 是类型断言，Element上没有value属性
    //     const username = (e.currentTarget.elements[0] as HTMLFormElement).value;
    //     const password = (e.currentTarget.elements[1] as HTMLFormElement).value;
    //     login({username, password});
    // }

    // values中的属性名由Form.Item的name属性决定
    const handleFinish = async (values: {username: string, password: string}) => {
        await run(login(values)).catch(onError);
    }
     
    return (
    <Form onFinish={handleFinish}
    // onSubmit={handleSubmit}
    >
        <Form.Item name={"username"} rules={[{required: true, message: "请输入用户名"}]}>
            <Input placeholder="用户名" type="text" id={"username"}/>
        </Form.Item>
        <Form.Item name={"password"} rules={[{required: true, message: "请输入密码"}]}>
            <Input.Password placeholder="密码" type="text" id={"password"}/>
        </Form.Item>
        <Form.Item>
            <LongButton loading={isLoading} htmlType={"submit"} type={"primary"}>登录</LongButton>
        </Form.Item>
    </Form>)
}