import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Horizontal.css";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

  return (
    <div className=" text-center">
      <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pt-5 pb-5">Why Choose Me?</h3>
      <section ref={targetRef} className="dark:bg-[#111111] carousel-section">
        <div className="carousel-container">
          <motion.div style={{ x }} className="carousel-content">
            {cards.map((card) => {
              return <Card card={card} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div className="scroll-card">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          borderRadius: "25px",
          hoverBorderRadius: "25px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="scroll-card-image"></div>
      <div className="scroll-card-text">
        <p>{card.title}</p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/images/work_images/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/work_images/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/work_images/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/work_images/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/work_images/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/work_images/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/work_images/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
