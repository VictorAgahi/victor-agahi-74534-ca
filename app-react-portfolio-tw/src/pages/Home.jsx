import { Link, useHref } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {

  return (
      <>

        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Victor Agahi Website
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Currently a Dorset Student but I'm a Future Dorset Engineer
                <br/>
                "<i>Work hard and be proud of your success.</i>"
              </p>

              <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Voir les projets
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Me
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                  src="../../public/images/Dorset.jpg"
                  alt="mockup"
              />
            </div>
          </div>
        </section>

        <section
            className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            What do I like to build?
          </h2>
          <p
              className="text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
          >
            As an engineer, I have a deep passion for constructing and taking on substantial projects. The thrill of
            turning ideas into tangible realities and solving complex problems drives me. I thrive on the challenge of
            tackling large-scale endeavors, where attention to detail, innovation, and teamwork are paramount. Building
            allows me to blend creativity with technical expertise, resulting in impactful solutions that make a
            difference in the world. Whether it's designing infrastructure, developing new technologies, or creating
            innovative systems, I find immense satisfaction in the process of bringing ambitious projects to fruition.


          </p>
        </section>

        <section
            className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24
      md:px-14
      px-12
      ml-0 mr-0

      md:gap-6
      lg-gap-12
      "
        >
          <Card
              className="max-w-sm mx-auto"
              imgAlt="Texte alternatif significatif pour une image qui n'est pas purement décorative"
              imgSrc="../../public/images/sddefault.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How to get a Seg Fault ?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Learn how to trigger a segfault, but more importantly, understand how to encounter a bus error.
            </p>
            <Link to="/projects">
              <Button>Learn With Me</Button>
            </Link>
          </Card>
          <Card
              className="max-w-sm mx-auto"
              imgAlt="Texte alternatif significatif pour une image qui n'est pas purement décorative"
              imgSrc="../../public/images/failed-escalator.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How can one detect a wall from an image ?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">

              You can provide assistance to teams by identifying patterns in past mistakes, enabling them to learn from
              them and prevent their recurrence in the future.
            </p>
            <Link to="/projects">
              <Button>Learn With Me</Button>
            </Link>
          </Card>
          <Card
              className="max-w-sm mx-auto"
              imgAlt="Texte alternatif significatif pour une image qui n'est pas purement décorative"
              imgSrc="../images/project-fashion.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dorset Projects
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Developing a Super Snazzy Fashion Website with sleek designs, seamless navigation, and cutting-edge
              features to captivate users and elevate their online shopping experience
            </p>
            <Link to="/projects">
              <Button>Watch</Button>
            </Link>
          </Card>
        </section>
      </>
  );
};

export default Home;
