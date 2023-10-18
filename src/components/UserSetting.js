import React,{useState} from 'react'
import { Button, Form, Input, Col, Row, Modal, Upload } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
 const UserSetting=()=> {
     const onFinish = (values) => {
       console.log("Received values of form: ", values);

     };
      const [previewOpen, setPreviewOpen] = useState(false);
      const [previewImage, setPreviewImage] = useState("");
      const [previewTitle, setPreviewTitle] = useState("");
      const [fileList, setFileList] = useState([

        {
          uid: "-xxx",
          percent: 50,
          name: "image.png",
          status: "uploading",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      
      ]);
      const handleCancel = () => setPreviewOpen(false);
      const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
          file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
      };
      const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
      );

  return (
    <section className="container">
      <h3 className="content-center">User Setting</h3>
      <Row>
        <Col span={12} offset={6}>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
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
                placeholder="Candy"
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
                placeholder="Noborry"
              />
            </Form.Item>

            <Form.Item className="content-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
  
}
export default UserSetting;