import React from "react";
import { Redirect } from "react-router-dom";
import { layout, tailLayout } from "./data";

import { Alert, Form, Input, Button } from "antd";
import "./style.scss";


export const Login = ({ isAuth, dispatch, setDataIsAuth, isError,}) => {

  if (isAuth)  return <Redirect to={"/main"} />;

  const onFinish = (value) => {
    (value.username.trim() && value.password.trim()) && dispatch(setDataIsAuth(value));
  };

  return (
    <div className="login content">
      <div className="login__form">

         <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              className="login__input"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              className="login__input"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} className="login__input">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            {isError && (
              <Alert
                message="Error in Username or Password check correctness and try again"
                type="error"
              />
            )}
          </Form>
      </div>
    </div>
  );
};
