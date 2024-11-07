import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import cursor from "./icons8-cursor.svg";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 1500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      // className="fixed top-0 left-0 w-8 h-8 border-2 border-black rounded-full pointer-events-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        zIndex: 9999,
      }}
    >
      <img src={cursor} alt="" />
    </motion.div>
  );
};
export default CustomCursor;
