import React from "react";
import { Form, Input, Row, Col } from "antd";

const { TextArea } = Input;

export default function Profile() {

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  
  return (
    <section className="container">
      <h3 className="content-center">Profile</h3>
      <Row>
        <Col span={20} offset={4}>
          <h3>My Question</h3>
          <h3>My Question Set</h3>
          <Form
            layout="vertical"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="bio"
              label="Bio"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true }]}
            >
              <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
}
