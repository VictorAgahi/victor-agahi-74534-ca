import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import {Container, Grid, Typography, Box} from "@mui/material";
import Skills from "./Skills.jsx";
const CardContainer = (props) => (
    <div className="max-w-sm">
        <Card
            imgAlt="Texte alternatif significatif pour une image qui n'est pas purement décorative"
            imgSrc={props.imgSrc}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
            <Link to="/projects">
                <Button>Watch</Button>
            </Link>
        </Card>
    </div>
);
const Portfolio = () => {
    return (
        <>
        <section className="bg-white dark:bg-gray-900" style={{
            height: "100vh",
            display: "flex",
        }}>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Portfolio of Victor Agahi
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
                        src="https://static.positivr.fr/wp-content/uploads/2016/01/fails-architecture-photos-erreurs-construction-21-1.jpg"
                        alt="Another Image"
                        style={{maxWidth: "100%", maxHeight: "100%"}}
                    />
                </div>
            </div>
        </section>

            <Container>
                <section id="about-me" className="py-8">
                    <Typography variant="h2" gutterBottom>About Me</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                textAlign="justify"
                                border="1px solid #ccc"
                                borderRadius="5px"
                                padding="20px"
                                fontFamily="Arial, sans-serif" // Change the font family
                            >
                                <Typography variant="body1">
                                    I am currently a second-year Computer Science student at EPITA (École pour
                                    l'informatique et
                                    les techniques avancées). Despite being deeply rooted in my studies, I have embraced
                                    the
                                    opportunity to broaden my horizons as a Dorset Student studying abroad for the
                                    current
                                    semester. My journey in the world of computer science has been one of fascination
                                    and
                                    discovery. I find great joy in unraveling the intricacies of algorithms, deciphering
                                    the
                                    mysteries of data structures, and crafting elegant solutions to complex problems.
                                    Whether
                                    it's debugging code or architecting software systems, I thrive on the challenges
                                    that come
                                    with the territory. My passion for computer science knows no bounds, and I am
                                    committed to
                                    continuous learning and growth in this dynamic field
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* Placeholder for photo */}
                            <img
                                src="https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124335/glenn-carstens-peters-203007-unsplash.jpg"
                                alt="Profile"
                                style={{maxWidth: "100%", height: "auto"}}
                            />
                        </Grid>
                    </Grid>
                </section>

                {/* Additional image and text frame */}
                <section className="py-8">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <img
                                src="https://dlcdnwebimgs.asus.com/files/media/b6d095dc-c8a2-4854-84da-2326e4dc5965/v1/assets/image/proart/article_cover.jpg"
                                alt="Another Image"
                                style={{maxWidth: "100%", height: "auto"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                textAlign="justify"
                                border="1px solid #ccc"
                                borderRadius="5px"
                                padding="20px"
                                fontFamily="Arial, sans-serif" // Change the font family
                            >
                                <Typography variant="body1">
                                    Ever since I was 13 years old, I've been deeply passionate about programming. It's a
                                    thrill for me to delve into coding projects wherever I am. My journey began with
                                    coding games in Python, where I discovered the joy of bringing ideas to life through
                                    code. As I honed my skills, I transitioned to C#, expanding my repertoire and
                                    delving into more complex projects. Programming has become not just a hobby, but a
                                    driving force in my life, shaping my career aspirations and fueling my desire to
                                    tackle new challenges.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </section>

                <Skills/>
                <Typography variant="h2" gutterBottom>Projects</Typography>
                <div className="grid grid-cols-3 gap-4">
                    <CardContainer imgSrc="../images/project-fashion.jpg" name="Super Snazzy Fashion" description="Developing a Super Snazzy Fashion Website with sleek designs, seamless navigation, and cutting-edge features to captivate users and elevate their online shopping experience"/>
                    <CardContainer imgSrc="../images/project-crypto-wallet.jpg" name="Super Snazzy Crypto Wallet" description="The Super Snazzy Crypto Wallet is a cutting-edge digital asset management solution designed to revolutionize the way users interact with cryptocurrencies."></CardContainer>
                    <CardContainer imgSrc="../images/project-smoothie.jpg" name="Smooth Smootie" description="Smooth Smootie is not just your ordinary smoothie; it's a flavorful journey packed with freshness and vitality. Crafted with a blend of handpicked fruits, nutrient-rich greens, and wholesome ingredients"></CardContainer>

                    <CardContainer imgSrc="../images/project-hero.png" name="Project Hero" description="Project Hero in the realm of computer science is a platform dedicated to empowering individuals passionate about technology, coding, and computer science. It serves as a hub for resources, tools."/>
                    <CardContainer imgSrc="../images/pexels-pixabay-247791.jpg" name="Pexels Pixabay" description="Pexels and Pixabay are both popular websites for accessing high-quality, free stock photos and videos. They offer a vast collection of images and videos that can be used for personal or commercial projects without attribution, making them valuable resources for designers, bloggers, marketers, and content creators."></CardContainer>
                    <CardContainer imgSrc="../images/store.png" name="Store" description="An online bookstore is a virtual marketplace where customers can buy, and download books in various formats such as e-books, and physical copies.These platforms  offer a wide selection of titles across different genres and categories, providing accessibility to readers worldwide."></CardContainer>
                </div>


            </Container>
        </>);
};

export default Portfolio;
