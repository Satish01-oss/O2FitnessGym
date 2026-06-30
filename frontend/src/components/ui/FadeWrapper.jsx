import { useEffect, useRef } from "react";

const FadeWrapper = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add("show");
      } else {
        ref.current.classList.remove("show");
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="fade-up">{children}</div>;
};

export default FadeWrapper;