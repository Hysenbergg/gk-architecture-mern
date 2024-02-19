import React from "react";
import { Link } from "react-router-dom";
import Background from '../images/login-background.jpg';

const UnauthorizedPage = () => {
    return (
        <div
            className='w-full h-screen flex justify-center items-center bg-contain'
            style={{
                backgroundImage: `url(${Background})`
            }}
        >
            <div className='w-[500px] h-[400px] p-10 flex flex-col justify-center items-center bg-[#F8F4F3] rounded-lg'>
                <h2 className='mb-5 text-3xl font-semibold'>Yetkisiz Erişim!</h2>
                <p className="text-lg mb-5">Bu sayfaya erişim izniniz bulunmamaktadır.</p>
                <Link 
                    to="/login"
                    className='border bg-white px-4 py-2 rounded-lg hover:border hover:border-white hover:text-white hover:bg-[#252531]'
                >
                    Giriş Yap
                </Link>
                {/* İsterseniz başka bir sayfaya yönlendirebilirsiniz */}
            </div>
        </div>
    );
};

export default UnauthorizedPage;