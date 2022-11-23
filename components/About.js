export default function About() {
    return(
        <section className="mt-32 flex flex-col justify-center items-center mx-auto gap-16 md:w-3/4 w-full">
            <h3 className="text-3xl font-bold text-center md:w-1/2 px-8">
                What does email marketing do for your business? </h3>

            <div className="flex md:flex-row flex-col gap-8 md:w-3/4">
                <div className="text-center w-1/2 self-center">
                    <h4 className="font-bold text-[1.3rem]">General Objectives</h4>
                    <p>Informs; Attracts; Involves; Guides; Encourage; and Converts </p>
                </div>

                <div className="text-center w-1/2 self-center">
                    <h4 className="font-bold text-[1.3rem]">What do we offer? </h4>
                    <p className="mx-auto">A unique database; A dedicated service that generates reports: A content producer; A designer.
                    </p>
                </div>
            </div>
        </section>
    );
}