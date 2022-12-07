import Image from "next/image";
import Lead from "./Lead";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse mt-12 gap-8 md:gap-18 text-[#f8f8ff] justify-center items-center">
                <div className="md:w-1/2 w-full items-center self-center">
                    {/*<Image src={heroImage} width={1090} height={1000} alt="Black Friday" layout="responsive" priority/>*/}
                    <Lead /> 
                </div>
                <div className="md:w-1/2 w-full items-center self-center">
                    
                </div>   
            </div>
        </div>
    );
}