import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { Col, Row, Radio, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const AddQuestion = () => {
    
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // login(values);
  };

  //   if (isAuthenticated) {
  //     return <Navigate to="/" />;
  //   }
  return (
      <section className="container">
          <h3 className="content-center">Add Question</h3>
      <Row>
        <Col span={12} offset={6}>
          <Form
            layout="vertical"
            name="generate_question"
            className="question-detail-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Scenario:"
              name="scenario"
              rules={[
                {
                  required: true,
                  message: "Please input your scenario!",
                },
              ]}
            >
              <TextArea
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="A zombie apocalypse has just begun."
              />
            </Form.Item>

            <Form.Item
              label="Intro:"
              name="intro"
              rules={[
                {
                  required: true,
                  message: "Please input your intro!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Would you rather"
              />
            </Form.Item>
            <Form.Item name="radio-group" label="Options:">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="a">Immediately die</Radio>
                  <Radio value="b">Become a zombie</Radio>
                  <Radio value="c">Fight and try to save people </Radio>
                  <Radio value="d">
                    Find a bunker and try to survive in isolation
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="content-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="question-detail-form-button"
              >
                Add Question
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default AddQuestion;
