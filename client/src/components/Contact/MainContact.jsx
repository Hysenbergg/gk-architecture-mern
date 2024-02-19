import React, { useState } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import { Spin, message } from 'antd';

const MainContact = () => {
  const [email, setEmail] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);

    const newMail = {
      email: email,
      message: mailContent
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/send-email`,
        newMail
      );
      if (response.status === 200) {
        message.success(response.data);
      }
      setLoading(false);
      setEmail("");
      setMailContent("");
    } catch (error) {
      message.error("Mail Gönderirken bir hata oluştu. Daha sonra tekrardan deneyiniz.")
    }
  }
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col bg-[#f8f4f3] w-full text-center py-[50px] lg:py-[80px]">
      <h2 className="text-[42px] my-[30px] font-bold">İletişim</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around px-[30px]">
        <form
          className="mt-5 lg:mt-10 flex flex-col w-full md:w-[500px] mb-10 lg:mb-0"
          onSubmit={handleSendEmail}
        >
          <input
            className="h-14 rounded-lg borderBlack px-4 transition-all"
            type="email"
            name="senderEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={500}
            placeholder="Mail Adresiniz.."
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
            name="mailContent"
            value={mailContent}
            onChange={(e) => setMailContent(e.target.value)}
            required
            maxLength={5000}
            placeholder="Mesajınız.."
          />
          <button
            className="py-[7px] lg:py-[10px] px-[8px] lg:px-[24px] bg-white lg:w-[250px] rounded-md border border-black"
            disabled={loading}
          >
            {
              loading ? (<Spin />) : (<span>Mesajı Gönder</span>)
            }
          </button>
        </form>
        <div className='w-full md:w-[300px] lg:w-[400px]'>
          <iframe
            className="w-full lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.40552615766!2d28.363675975838166!3d37.214347072131915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf731b647e39c1%3A0xdb636587c69370ef!2sGazanfer%20Ko%C3%A7%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1698229562747!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.section>
  )
}

export default MainContact;