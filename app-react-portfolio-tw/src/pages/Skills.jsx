import React from "react";
import { Typography, Grid } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaDatabase } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills" className="py-8">
            <Typography variant="h2" gutterBottom>Skills</Typography>
            <Typography variant="body" sx={{ fontSize: "26px" }}>
                Throughout my life, I've learned and mastered these programming languages.
                I've utilized these skills in various projects and have a deep understanding of their concepts and applications.
            </Typography>

            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <SkillIcon icon={<FaHtml5 color="#E44D26" size={60} />} />
                <SkillIcon icon={<FaCss3Alt color="#1572B6" size={60} />} />
                <SkillIcon icon={<FaJs color="#F7DF1E" size={60} />} />
                <SkillIcon icon={<FaReact color="#61DAFB" size={60} />} />
                <SkillIcon icon={<FaPython color="#3776AB" size={60} />} />
                <SkillIcon icon={<FaJava color="#007396" size={60} />} />
                <SkillIcon icon={<FaDatabase color="#003B57" size={60} />} />
            </Grid>
        </section>
    );
};

const SkillIcon = ({ icon }) => {
    return (
        <Grid item sx={{ marginTop: "20px" }}>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {icon}
            </div>
        </Grid>
    );
};

export default Skills;
