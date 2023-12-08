import React, { useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";

const AddProjectCapsule = () => {
  const [file, setFile] = useState();
  const [imagesSrc, setImagesSrc] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const onFinish = async (values) => {
    const newValues = {
      title: values.title,
      images: imagesSrc,
      category: selectedCategory,
    };

    console.log(newValues);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/projects/add-project`,
        newValues
      );
      if (response.status === 200) {
        message.success("Projeniz başarılı bir şekilde oluşturuldu.");
      }
    } catch (error) {
      message.error("Bir hata ile karşılaşıldı!");
      console.log(error);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "gk-architecture");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dimxg1lsl/image/upload",
        data
      );
      const { url } = uploadRes.data;
      setImagesSrc([...imagesSrc, url]);
      console.log("uploadImage içerisindeki clg: " + url);
    } catch (error) {
      console.log(error);
    }
  };

  /*const handleRemovePhoto = () => {
    console.log("remove butonuna bastı.");
  };*/

  function handleChange(e) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(e.target.files[0]);
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  const handleChangeSelectCategory = (value) => {
    console.log(`selected ${value}`);
    setSelectedCategory(value);
  };

  return (
    <div className="flex flex-col py-10 justify-center items-center w-full">
      <h1>Proje Ekle</h1>
      <div className="w-[500px]">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Proje İsmi"
            name={"title"}
            rules={[
              {
                required: true,
                message: "Proje isim Alanını Boş Geçemezsiniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Select
            defaultValue="dismekan&icmekan"
            style={{
              width: 250,
              marginBottom: 20,
            }}
            onChange={handleChangeSelectCategory}
            options={[
              {
                value: "dismekan&icmekan",
                label: "Hem Dış Mekan Hem de İç Mekan",
              },
              {
                value: "dismekan",
                label: "Dış Mekan",
              },
              {
                value: "icmekan",
                label: "İç Mekan",
              },
            ]}
          />
          <Form.Item>
            <Button type="link" htmlType="submit" size="large">
              Proje Oluştur
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-5">
          <h1 className="text-xl font-bold">Projeye Eklenecek Resimler</h1>
          <h2 className="text-lg font-semibold mb-2">Add Image:</h2>
          <input type="file" onChange={handleChange} className="mb-3" />
          <h2 className="text-lg font-semibold mb-2">Upload:</h2>
          <input
            type="button"
            value="upload"
            onClick={uploadImage}
            className="cursor-pointer mb-3 p-3 bg-white text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProjectCapsule;
