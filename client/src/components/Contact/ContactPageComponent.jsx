import React, { useState } from 'react';
import { MdPhoneCallback, MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import axios from 'axios';
import { Spin, message } from 'antd';

const ContactPageComponent = () => {
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
            message.error("Mail Gönderirken bir hata oluştu. Daha sonra tekrardan deneyiniz.");
        }
    }

    return (
        <div className="flex flex-col bg-[#f8f4f3] w-full text-center py-[30px] lg:py-[50px]">
            <h2 className="text-[42px] my-[30px]">İletişim</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly px-[50px]">
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
                        name="message"
                        value={mailContent}
                        onChange={(e) => setMailContent(e.target.value)}
                        required
                        maxLength={5000}
                        placeholder="Göndermek istediğiniz mesajınız.."
                    />
                    <button
                        className="py-[7px] lg:py-[10px] px-[8px] lg:px-[24px] bg-white lg:w-[250px] rounded-md border border-black"
                        disabled={loading}
                    >
                        {
                            loading
                                ? (
                                    <Spin />
                                )
                                : (
                                    <span>Mesajı Gönder</span>
                                )
                        }
                    </button>
                </form>
                <div className='d-flex flex-column w-[500px]'>
                    <h4 className='text-2xl'>Yaratıcı ve göz alıcı tasarımlar için hemen bizimle iletişime geçin</h4>
                    <div className='flex items-center px-[20px] py-[10px] mt-[10px]'>
                        <MdPhoneCallback size={30} />
                        <span className='ml-[20px]'>+90 554 558 15 25</span>
                    </div>
                    <div className='flex items-center px-[20px] py-[10px] mt-[5px]'>
                        <MdAttachEmail size={30} />
                        <span className='ml-[20px]'>gazanferkoc@gmail.com</span>
                    </div>
                    <div className='flex items-center px-[20px] py-[10px] mt-[5px]'>
                        <FaMapLocationDot size={30} />
                        <span className='w-[300px] ml-[10px]'>Orhaniye, İsmet Çatak Cd. Özman İşhanı D:12/5, 48000 Menteşe/Muğla</span>
                    </div>
                    <div className='flex items-center justify-center md:justify-start px-[20px] py-[10px] mt-[5px] gap-4'>
                        <a
                            href='#'
                            className='focus:scale-130 hover:scale-110 active:scale-130 hover:text-blue-500'
                        >
                            <BiLogoFacebook size={25} />
                        </a>
                        <a
                            href='#'
                            className='focus:scale-130 hover:scale-110 active:scale-130 hover:text-blue-500'
                        >
                            <BsInstagram size={20} />
                        </a>
                        <a
                            href='#'
                            className='focus:scale-130 hover:scale-110 active:scale-130 hover:text-blue-500'
                        >
                            <BiLogoTwitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPageComponent