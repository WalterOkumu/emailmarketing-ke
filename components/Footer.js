import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="mt-16 bg-[#181818] flex flex-col">
      <div className="grid md:grid-cols-3 text-[#f8f8ff] py-16 md:p-16 mx-auto gap-20 md:gap-28">
        <div className="text-left">
          <p className="text-2xl">Websites</p>
          <ul className="pt-4 gap-1 flex flex-col text-gray-300 text-sm">
            <li className="hover:underline underline-offset-4"><a href="https://www.paginasamarelas.cv" target="_blank">Cabo Verde</a></li>
            <li className="hover:underline underline-offset-4"><a href="https://www.paginasamarelas.co.mz" target="_blank">Mozambique</a></li>
            <li className="hover:underline underline-offset-4"><a href="https://www.pajinakinur.tl" target="_blank">Timor Leste</a></li>
            <li className="hover:underline underline-offset-4"><a href="https://www.paginasamarelas.st" target="_blank">Sao Tome</a></li>
            <li className="hover:underline underline-offset-4"><a href="https://www.yellow.co.tz" target="_blank">Tanzania</a></li>
          </ul>
        </div>
        <div className="text-sm text-left">
          <p className="text-2xl mb-3">Email</p>
          <div className='flex items-center gap-2'>
            <FaEnvelope />
            <p className="text-gray-300">info@yellowpageskenya.com</p>
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
            <p className="text-gray-300">Tel: +254 020 7800 701</p>
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