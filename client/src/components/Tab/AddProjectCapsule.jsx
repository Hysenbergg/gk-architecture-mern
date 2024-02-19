import React, { useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";

const AddProjectCapsule = () => {
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);
  const [imagesSrc, setImagesSrc] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  const handleCreatedProject = async (event) => {
    event.preventDefault();
    const newValues = {
      title: projectTitle,
      images: imagesSrc,
      category: selectedCategory,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/projects/add-project`,
        newValues
      );
      if (response.status === 200) {
        message.success(response.data);
      }
    } catch (error) {
      message.error("Bir hata ile karşılaşıldı!");
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

  function handleChange(e) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(e.target.files[0]);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleChangeSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex flex-col py-10 justify-center items-center w-full">
      <h1 className="text-3xl font-bold mb-5">Proje Ekleme</h1>
      <div className="flex flex-col md:flex-row justify-evenly gap-10 w-full">
        <div className="w-[500px]">
          <div>
            <h1 className="text-xl font-bold mb-5">Projeye Eklenecek Resimler</h1>
            <input type="file" onChange={handleChange} className="mb-3" />
          </div>
          <input
            type="button"
            value="Resmi Yükle"
            onClick={uploadImage}
            className="my-3 px-3 py-1 text-[#4C5E82] border border-[#4C5E82] hover:bg-[#4C5E82] hover:text-white rounded-lg"
          />
        </div>

        <form onSubmit={handleCreatedProject} className="w-[500px]">
          <div className="flex flex-col w-[400px]">
            <h2 className="mb-3">Proje İsmi</h2>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="Proje İsmi.."
              className="border px-4 py-2 rounded-lg"
            />
          </div>
          <div className="mt-3">
            <h2>Kategoriler</h2>
            <div className="flex flex-col gap-y-2">
              <label className="mt-2">
                <input
                  type="radio"
                  value="dismekan&icmekan"
                  checked={selectedCategory === 'dismekan&icmekan'}
                  onChange={handleChangeSelectCategory}
                />
                Hem İç Hem de Dış Mekan
              </label>

              <label>
                <input
                  type="radio"
                  value="dismekan"
                  checked={selectedCategory === 'dismekan'}
                  onChange={handleChangeSelectCategory}
                />
                Dış Mekan
              </label>

              <label>
                <input
                  type="radio"
                  value="icmekan"
                  checked={selectedCategory === 'icmekan'}
                  onChange={handleChangeSelectCategory}
                />
                İç Mekan
              </label>
            </div>
          </div>
          <div>
            <button
              className="my-3 px-3 py-1 text-[#4C5E82] border border-[#4C5E82] hover:bg-[#4C5E82] hover:text-white rounded-lg"
            >
              Proje Oluştur
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h3>İşlem Sırası</h3>
        <ol start={1} className="list-decimal">
          <li>İlk olarak Dosya Seç butonu ile bir resim seçip ardından Resmi Yükle butonuna basıyoruz.</li>
          <li>Eklenecek her resim için bu işlem tekrar ediyor.</li>
          <li>Resim Yükleme işlemi bittikten sonra Proje İsmi ve kategori belirlenerek Proje Oluştur butonuna basıyoruz.</li>
          <li>Böylelikle projemiz başarılı bir şekilde oluşturulmuştur. </li>
        </ol>
      </div>
    </div>
  );
};

export default AddProjectCapsule;
