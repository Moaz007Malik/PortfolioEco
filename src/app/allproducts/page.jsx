"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cuticle Pusher",
    description: "Nail Cleaner",
    image: "/images/products/CruticalPusher1.jpg",
    tag: ["All", "Cuticle Pusher"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Cuticle Pusher",
    description: "Nail Cleaner",
    image: "/images/products/CruticalPusher2.jpg",
    tag: ["All", "Cuticle Pusher"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Cuticle Pusher",
    description: "Nail Cleaner",
    image: "/images/products/CruticalPusher3.jpg",
    tag: ["All", "Cuticle Pusher"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Cuticle Pusher",
    description: "Nail Cleaner",
    image: "/images/products/CruticalPusher4.jpg",
    tag: ["All", "Cuticle Pusher"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Eyelash Curler",
    description: "Deliver curls to your lashes",
    image: "/images/products/EyeLasher1.jpg",
    tag: ["All", "Eyelash Curler"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Eyelash Curler",
    description: "Deliver curls to your lashes",
    image: "/images/products/EyeLasher2.jpg",
    tag: ["All", "Eyelash Curler"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler1.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 8,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler2.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 9,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler3.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 10,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler4.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 11,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler5.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 12,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler6.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 13,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler7.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 14,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler8.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 15,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/FootFiler9.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 16,
    title: "Foot Filer",
    description: "Gives soft fancy feet",
    image: "/images/products/footFiler10.jpg",
    tag: ["All", "Foot Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 17,
    title: "Nail Buffer",
    description: "Buff to smooth and shine",
    image: "/images/products/NailBuffer1.jpg",
    tag: ["All", "Nail Buffer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 18,
    title: "Nail Buffer",
    description: "Buff to smooth and shine",
    image: "/images/products/NailBuffer2.jpg",
    tag: ["All", "Nail Buffer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 19,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper1.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 20,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper2.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 21,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper3.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 22,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper4.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 23,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper5.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 24,
    title: "Nail Clipper",
    description: "For Nails in a desirable shape",
    image: "/images/products/NailClipper6.jpg",
    tag: ["All", "Nail Clipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 25,
    title: "Nail Filer",
    description: "Grind and shape your nails",
    image: "/images/products/NailFiler1.jpg",
    tag: ["All", "Nail Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 26,
    title: "Nail Filer",
    description: "Grind and shape your nails",
    image: "/images/products/NailFiler2.jpg",
    tag: ["All", "Nail Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 27,
    title: "Nail Filer",
    description: "Grind and shape your nails",
    image: "/images/products/NailFiler3.jpg",
    tag: ["All", "Nail Filer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 28,
    title: "Nail Strengthener",
    description: "Make nails stronger and longer",
    image: "/images/products/NailStrengthener1.jpg",
    tag: ["All", "Nail Strengthener"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 29,
    title: "Nail Strengthener",
    description: "Make nails stronger and longer",
    image: "/images/products/NailStrengthener2.jpg",
    tag: ["All", "Nail Strengthener"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 30,
    title: "Nail Strengthener",
    description: "Make nails stronger and longer",
    image: "/images/products/NailStrengthener3.jpg",
    tag: ["All", "Nail Strengthener"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 31,
    title: "Nail Trimmer",
    description: "Trim Nails for cool look",
    image: "/images/products/NailTrimmer1.jpg",
    tag: ["All", "Nail Trimmer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 32,
    title: "Nail Trimmer",
    description: "Trim Nails for cool look",
    image: "/images/products/NailTrimmer2.jpg",
    tag: ["All", "Nail Trimmer"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 33,
    title: "Nipper",
    description: "Cuticle Nipper",
    image: "/images/products/Nipper1.jpg",
    tag: ["All", "Nipper"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 34,
    title: "Razor",
    description: "Removes exceptional hair on your beard",
    image: "/images/products/Razor1.jpg",
    tag: ["All", "Razor"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 35,
    title: "Razor",
    description: "Removes exceptional hair on your beard",
    image: "/images/products/Razor2.jpg",
    tag: ["All", "Razor"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 36,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors1.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 37,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors2.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 38,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors3.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 39,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors4.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 40,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors5.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 41,
    title: "Small Scissors",
    description: "Scissors for facial hair",
    image: "/images/products/SmallScissors6.jpg",
    tag: ["All", "Small Scissors"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 42,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers1.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 43,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers2.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 44,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers3.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 45,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers4.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 46,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers5.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 47,
    title: "Twizzers",
    description: "Provides strong grip for different use",
    image: "/images/products/Twizzers6.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 48,
    title: "Twizzers",
    description: "Other Accessories",
    image: "/images/products/Twizzers7.jpg",
    tag: ["All", "Twizzers"],
    gitUrl: "",
    previewUrl: "",
  },
];

const AllProducts = () => {
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
    <section id="products" className=" mx-8 md:mx-32">
      <h2 className="mt-24 mb-8 text-3xl font-bold text-center text-white md:mb-12">
        All Products are shown here
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cuticle Pusher"
          isSelected={tag === "Cuticle Pusher"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Eyelash Curler"
          isSelected={tag === "Eyelash Curler"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Foot Filer"
          isSelected={tag === "Foot Filer"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nail Buffer"
          isSelected={tag === "Nail Buffer"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nail Clipper"
          isSelected={tag === "Nail Clipper"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nail Filer"
          isSelected={tag === "Nail Filer"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nail Strengthener"
          isSelected={tag === "Nail Strengthener"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nail Trimmer"
          isSelected={tag === "Nail Trimmer"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nipper"
          isSelected={tag === "Nipper"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Razor"
          isSelected={tag === "Razor"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Small Scissors"
          isSelected={tag === "Small Scissors"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Twizzers"
          isSelected={tag === "Twizzers"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 grid-cols-2 md:grid-cols-6 md:gap-12">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AllProducts;
