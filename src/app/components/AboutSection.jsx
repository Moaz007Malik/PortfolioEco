"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>MS Word</li>
        <li>MS Excel</li>
        <li>MS Access</li>
        <li>MS Powerpoint</li>
        <li>Graphic Designing</li>
        <li>Social Media Marketing</li>
        <li>Spoken English</li>
      </ul>
    ),
  },
  {
    title: "Know About Me!",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Whole Saler</li>
        <li>Solopreneur</li>
        <li>Graphic Designer</li>
        <li>MS Office Expert</li>
        <li>Social Media Marketer</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="pl-2 list-disc">
        <li>I have 3 years experience of Marketing</li>
        <li>I have 2 years experience of Management in this field</li>
        <li>I have complete industry knowledge</li>
        <li>I have great knowledge about leadership and team collaboration</li>
        <li>I have customer relationship management skills</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Matriculation in Science From<br/>Govt. Comprehensive High School Gujranwala,<br/>Year 2018</li>
        <li>Intermediate in Computer Science From<br/>Aspire College Gujranwala,<br/>Year 2021</li>
        <li>Currently, Bachelor in Computer Science From<br/>Govt. College University Faisalabad,<br/>Year 2021-2025</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" src="/images/about-image.png" alt="about-image" width={500} height={500} />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
          As a dedicated wholesaler, I specialize in providing top-quality products at competitive prices 
          to retailers and businesses. With a keen eye on market trends and customer demands, I meticulously 
          source a diverse range of goods, ensuring that my inventory meets the needs of various industries. 
          With a focus on reliability, efficiency, and customer satisfaction, I strive to be the go-to choice for businesses seeking 
          high-quality merchandise.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Know About Me!{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
