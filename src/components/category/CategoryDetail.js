import { Col, Row, Button, Input, Radio, Space, Checkbox } from "antd";
import React, {useState} from 'react';

const CategoryDetail = (category) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <section className="container">
      <h3 className="content-center">Category Detail</h3>
      <Row>
        <Col span={12}>
          <p className="text-center">category</p>{" "}
        </Col>
        <Col span={12}>
          <Checkbox onChange={onChangeCheck}>comments</Checkbox>
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <p>Senario</p>
          <p>Intro</p>
          <p>Option</p>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={6} className="align-items-end d-flex">
          <Button type="primary">Next</Button>
        </Col>
      </Row>
    </section>
  );
};

export default CategoryDetail;
