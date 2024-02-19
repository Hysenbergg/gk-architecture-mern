import React, { useState } from 'react'
import { Spin, message } from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { HiEye, HiEyeOff } from "react-icons/hi";
import Background from '../images/login-background.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      username: username,
      password: password
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, user, {
        headers: { 'Content-Type': 'application/json' }
      })

      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            role: response.data.role
          })
        )
        message.success("Giriş işlemi başarılı.");
        navigate('/');
      } else if (response.status === 404) {
        message.error("Kullanıcı bulunamadı!");
        return;
      } else if (response.status === 403) {
        message.error("Şifre yanlış!");
        return;
      }
      setLoading(false);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div
      className='w-full h-screen flex justify-center items-center bg-contain'
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <form onSubmit={handleLogin} className='w-[500px] h-[400px] p-10 flex flex-col justify-center bg-[#F8F4F3] rounded-lg'>
        <h2 className='text-center mb-5 text-3xl font-semibold'>Yönetici Girişi</h2>
        <div className='flex flex-col mb-3'>
          <h2 className='ml-2 mb-1'>Kullanıcı Adı</h2>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Kullanıcı Adı..'
            className='flex flex-1 px-4 py-1 border rounded-lg'
          />
        </div>
        <div className='mb-3'>
          <h2 className='ml-2 mb-1'>Şifre</h2>
          <div className='flex relative items-center'>
            <input
              type={visiblePassword ? 'password' : 'text'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Şifre..'
              className='flex flex-1 px-4 py-1 border rounded-lg'
            />
            <span className='absolute right-2 cursor-pointer' onClick={() => setVisiblePassword(!visiblePassword)}>
              {
                visiblePassword ? (
                  <HiEye color='gray' />
                ) : (
                  <HiEyeOff color='gray' />
                )
              }
            </span>
          </div>
        </div>
        <div className='flex justify-end mt-3'>
          <button
            type='submit'
            className='border bg-white px-3 py-1 rounded-lg hover:border hover:border-white hover:text-white hover:bg-[#252531]'
          >
            {
              loading ? <Spin /> : "Giriş Yap"
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage