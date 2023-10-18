import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Input,
  Col,
  Row,
  // DatePicker,
  // DatePickerProps,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";


const Register = ({ setAlert, register, isAuthenticated }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
   
    register(values);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h3 className="content-center">Resgiter</h3>
      <Row>
        <Col span={12} offset={6}>
          <Form
            layout="vertical"
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            {/* <Form.Item
              label="Birthday"
              name="birth"
              rules={[
                {
                  required: true,
                  message: "Please input your Birthday!",
                },
              ]}
            >
              <DatePicker onChange={onChange}/>
            </Form.Item> */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Please confirm your Password!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="confirm"
              />
            </Form.Item>
            {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}
            <Form.Item className="content-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
