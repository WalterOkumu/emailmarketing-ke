import Image from "next/image";

export default function Info() {

    const titles = '/titles.png';
    const segmentation = '/segmentation.png';
    const design = '/design.png';
    const optimization = '/optimization.png';
    const callAction = '/call_action.png'
    const effective = '/effective.png';

    return (
        <section className="flex flex-col justify-center items-center mt-20 mx-auto gap-16 w-3/4">
            <h3 className="text-3xl font-bold text-center md:w-1/2 w-full">
                How do we do it?</h3>

            <div className="text-center grid md:flex md:flex-row grid-cols-2">
                <Image src={segmentation} width={140} height={330} alt="Segmentation section"/>
                <Image src={titles} width={140} height={330} alt="Titles section"/>
                <Image src={optimization} width={140} height={330} alt="Optimization section"/>
                <Image src={design} width={140} height={330} alt="Design section"/>
                <Image src={callAction} width={140} height={330} alt="Call to Action section"/>
                <Image src={effective} width={140} height={330} alt="Effective section"/>
            </div>
        </section>
    );
}