import Image from "next/image";
import LinkButton from "./components/LinkButton";
import ContentBlock from "./components/ContentBlock";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 text-clip ">
            <h1 className="mb-4 flex w-full justify-center text-6xl font-extrabold text-center">
                Talhah Patelia
            </h1>
            <hr className="lg:w-[50%] w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-white-700" />
            <p className="text-2xl m-2">
                ______________ Achievements ______________
            </p>
            <LinkButton
                name={"PDF"}
                description={
                    "A file comprising of all my current formal awards and achievement."
                }
                link={"/portfolio_doc.pdf"}
            />
            <p className="text-2xl m-2">
                ________________ Some Projects ________________
            </p>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left ">
                <LinkButton
                    name={"Gotcha"}
                    description={
                        "Autonomous cheat detection online and offline."
                    }
                    link={"https://gotchaexam.com/"}
                />
                
                <LinkButton
                    name={"my3Dprint"}
                    description={
                        "An on demand 3D printing service."
                    }
                    link={"https://www.instagram.com/_my_3d_prints_"}
                />
                <LinkButton
                    name={"Nimble"}
                    description={
                        "An app that links people who need and have products, services."
                    }
                    link={"https://youtu.be/7PuHhLY5A9g"}
                />
                <LinkButton
                    name={"Multipurpose Robot"}
                    description={
                        "An international science fair competing project."
                    }
                    link={"https://youtu.be/lJBu75KZjqo"}
                />
            </div>
            <p className="text-2xl m-2">
                ________________ Socials ________________
            </p>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left ">
                <LinkButton
                    name={"Github"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={"https://github.com/Talhahpatelia"}
                />
                <LinkButton
                    name={"Instagram"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={"https://www.instagram.com/talhahpatelia/"}
                />
                <LinkButton
                    name={"Twitter"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={"https://twitter.com/tpatelia"}
                />
                <LinkButton
                    name={"LinkedIn"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={
                        "https://www.linkedin.com/in/talhah-patelia-77250a196/"
                    }
                />
                <LinkButton
                    name={"YouTube"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={"https://www.youtube.com/@talhahpatelia6134"}
                />
                <LinkButton
                    name={"Facebook"}
                    description={
                        "Programming projects; note that private projects will not appear."
                    }
                    link={"https://www.facebook.com/talhah.patelia.5"}
                />
            </div>
            <p className="text-2xl m-2">
                ________________ Contact Information ________________
            </p>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left ">
                <LinkButton
                    name={"Cell Number"}
                    description={"+27-82-579-2911"}
                    link={"tel:+27-82-579-2911"}
                />
                <LinkButton
                    name={"Personal Email"}
                    description={"talhah1911@gmail.com"}
                    link={"mailto:talhah1911@gmail.com"}
                />
                <LinkButton
                    name={"Work Email"}
                    description={"talhahpatelia@gmail.com"}
                    link={"mailto:talhahpatelia@gmail.com"}
                />
                <LinkButton
                    name={"Student Email"}
                    description={"2658126@students.wits.ac.za"}
                    link={"mailto:2658126@students.wits.ac.za"}
                />
            </div>
        </main>
    );
}
