/* eslint-disable no-unused-vars */
import {useState, useEffect, useRef} from "react";
import { motion } from "motion/react"


const images = [
  { src: "./public/assets/cse.jpg", alt: "CSE" },
  { src: "./public/assets/phy.jpg", alt: "Physics" },
  { src: "./public/assets/photo.jpg", alt: "Photography" },
  { src: "./public/assets/space.jpg", alt: "Space" },
  { src: "./public/assets/about_photo.jpg", alt: "About" },
];

const bgs = [
  { src: "./public/assets/space-bg.jpg", alt: "space" },
  { src: "./public/assets/space-bg.jpg", alt: "space" },
  { src: "./public/assets/space-bg.jpg", alt: "space" },
  { src: "./public/assets/space-bg.jpg", alt: "space" },
  { src: "./public/assets/space-bg.jpg", alt: "space" },
]

function HorizontalScroll() {  
  const stickyParentRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (isHovered !== null) {
      setBgImage(bgs[isHovered].src);
    }
  }, [isHovered]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyParentRef.current || !scrollSectionRef.current) return;

      const parentTop = stickyParentRef.current.offsetTop;
      let percentage = ((window.scrollY - parentTop) / window.innerHeight) * 100;
      
      percentage = Math.max(0, Math.min(400, percentage)); 
      setScrollProgress(percentage);
      scrollSectionRef.current.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;

      if (percentage >= 342) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideTextclass = showText ? "slideUpText" : ""

  return (
    <div className="sticky_parent" ref={stickyParentRef}>
      <motion.div
        className="bg-layer"
        animate={{ opacity: isHovered !== null ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="sticky_section">
        <div className="scroll_section" ref={scrollSectionRef}>
          {
            images.map((image, index) => (
              <img 
                key={index} 
                src={image.src} 
                alt={image.alt}
                className={`img ${isHovered === index ? "hovered": ""} ${isHovered !== null && isHovered !== index ? "dimmed" : ""}`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              />
            ))
          }
        </div>
        {
          showText && (
            <div className={`text_section ${showText ? "visible" : ""} ${isHovered ? "textcolor" : ""}`}>
              <h2 className={slideTextclass}>About Me</h2>
              <div className={`text-para ${slideTextclass}`}>I&apos;m a Computer Science undergraduate at IIITDM Kancheepuram
              with a deep passion for the fusion of Computer Science and Physics. <br/> <br/>My interests include 
              Artificial Intelligence, Machine Learning, Web Development and Quantum Computing.
              I thrive on learning new things, solving new problems, and embracing challenges that push my boundaries.
              <br/><br/>
              I also love Photography and Drawing.
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HorizontalScroll;