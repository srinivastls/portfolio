import { useState, useEffect } from "react";

function ScrollProgressIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div>
      {Math.round(scrollPercentage)}%
    </div>
  );
}

export default ScrollProgressIndicator;
