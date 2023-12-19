"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import '../globals.css'

const projectsData = [
  {
    id: 1,
    title: "Foot Filer",
    description: `"Transform your feet with the Foot Filer for a gorgeous, smooth finish."`,
    image: "/images/products/FootFiler1.jpg",
    tag: ["All", "Buttons"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Eye Lasher",
    description: `"Elevate your lashes with our Eye Lasher, for mesmerizing, beautiful eyes."`,
    image: "/images/products/EyeLasher1.jpg",
    tag: ["All", "Eyelashes"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Cruticle Pusher",
    description: `"Keep your nails neat and tidy with our Cuticle Pusher for healthy-looking cuticles."`,
    image: "/images/products/CruticalPusher1.jpg",
    tag: ["All", "Eyelashes"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Nail Buffer",
    description: `"Get salon-quality shine at home with our Nail Buffer for effortlessly smooth and glossy nails."`,
    image: "/images/products/NailBuffer1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Nail Clipper",
    description: `"Trim your nails with precision using our Nail Clipper for a clean and neat finish."`,
    image: "/images/products/NailClipper1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Nail Filer",
    description: `"Shape and refine your nails flawlessly with our Nail Filer for a professional manicure touch."`,
    image: "/images/products/NailFiler1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Nail Trimmer",
    description: `"Experience precise nail grooming with our Nail Trimmer for neat and well-maintained nails."`,
    image: "/images/products/NailTrimmer1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 8,
    title: "Nipper",
    description: `"Crafted for precision, our Nipper ensures clean and accurate nail cutting for a polished look."`,
    image: "/images/products/Nipper1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 9,
    title: "Razor",
    description: `"Experience a smooth, precise shave with our Razor for a sleek and clean finish."`,
    image: "/images/products/Razor1.jpg",
    tag: ["All", "Feet"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 10,
    title: "Small Scissors",
    description: `"Perfect for detail work, our Small Scissors offer precise trimming for intricate tasks."`,
    image: "/images/products/SmallScissors1.jpg",
    tag: ["All", "Hair"],
    gitUrl: "",
    previewUrl: "",
  },

  {
    id: 11,
    title: "Twizzers",
    description: `"Get a grip on fine hairs or splinters effortlessly with our Tweezers for precise and easy handling."`,
    image: "/images/products/Twizzers1.jpg",
    tag: ["All", "Hair"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 12,
    title: "Nail Strengthener",
    description: `"Transform weak and brittle nails into stronger, healthier ones with our Nail Strengthener for lasting protection and resilience."`,
    image: "/images/products/NailStrengthener1.jpg",
    tag: ["All", "Hair"],
    gitUrl: "",
    previewUrl: "",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="products">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Products
      </h2>
      <ul ref={ref} className="grid gap-8 grid-cols-1 md:grid-cols-4 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.1, delay: index * 0.08 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            ></ProjectCard>
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center mx-3 my-6">
        <Link href="/allproducts">
        <button className="py-4 px-8 rounded-full text-2xl font-bold bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900 hover:scale-110 duration-300">Check Out All Products!</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;