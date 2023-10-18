import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Col, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const GenerateQuestion = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // login(values);
  };

  //   if (isAuthenticated) {
  //     return <Navigate to="/" />;
  //   }
  return (
    <section className="container">
      <h3 className="content-center">Generate Question</h3>
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
              label="Category (max of 3, separated by commas)"
              name="category_name"
              rules={[
                {
                  required: true,
                  message: "Please input your category_name!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="category_name"
              />
            </Form.Item>
            <Form.Item
              label="Generate Questions"
              name="question_detail"
              rules={[
                {
                  required: true,
                  message: "Please input your question_detail!",
                },
              ]}
            >
              <TextArea
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="question_detail"
              />
            </Form.Item>

            <Form.Item className="content-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="question-detail-form-button"
              >
                Generate Question
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default GenerateQuestion;
