import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="mt-16 bg-[#181818] flex flex-col">
      <div className="grid md:grid-cols-3 text-[#f8f8ff] py-16 md:p-12 mx-auto gap-14 md:gap-28">
        <div className="text-left">
          <p className="text-2xl">Website</p>
          <ul className="pt-4 gap-1 flex flex-col text-gray-300 text-sm">
            <li className="hover:underline underline-offset-4"><a href="https://www.yellowpageskenya.com" target="_blank" rel="noreferrer">www.yellowpageskenya.com</a></li>
          </ul>
        </div>
        <div className="text-sm text-left">
          <p className="text-2xl mb-3">Email</p>
          <div className='flex items-center gap-2'>
            <FaEnvelope />
            <a className="text-gray-300" href='mailto:info@yellowpageskenya.com'>info@yellowpageskenya.com</a>
          </div>
          {/*<p className="text-2xl mt-8 mb-3">Phones</p>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt />
            <p className="text-gray-300">Tel: +254 020 7800 701</p>
  </div>*/}
        </div>
        <div className="text-left text-sm">
          <p className="text-2xl mb-3">Phones</p>
          <div className='flex items-center justify-start gap-2'>
            <FaPhoneAlt />
            <p className="text-gray-300">Tel: <a href='tel:+254 020 7800 701'>+254 020 7800 701</a></p>
          </div>
        </div>
      </div>

     <div className="pb-10 text-center text-[#f8f8ff]">
       <hr className="mx-auto h-px bg-gray-100 border-0 text-center w-3/4"></hr>
       <p className="mt-7 text-sm">All Rights Reserved, &copy; {new Date().getFullYear()} Yellow Pages Kenya</p>
     </div>
      
      
    </section>
  );
}