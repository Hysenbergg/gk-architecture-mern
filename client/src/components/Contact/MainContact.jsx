import React from 'react';
import { motion } from "framer-motion";

const MainContact = () => {
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
      <h2 className="text-[42px] my-[30px]">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around px-[50px]">
        <form className="mt-5 lg:mt-10 flex flex-col w-[300px] md:w-[500px] mb-10 lg:mb-0">
          <input
            className="h-14 rounded-lg borderBlack px-4 transition-all"
            type="email"
            name="senderEmail"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
            name="message"
            required
            maxLength={5000}
            placeholder="Your message.."
          />
          <button className="py-[7px] lg:py-[10px] px-[8px] lg:px-[24px] bg-white lg:w-[250px] rounded-md border border-black">
            Send Message
          </button>
        </form>
        <div>
          <iframe
          className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px]"
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