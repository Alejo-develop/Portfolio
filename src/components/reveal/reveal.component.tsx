import { JSX } from "react";
import { motion } from "motion/react";
import useReveal from "./useReveal.hook";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  animationColor?: boolean;
}

const RevealComponent = ({
  children,
  width = "fit-content",
  animationColor = true,
}: RevealProps) => {
  const { ref, mainControls, slideControls, hasIntersected } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        visibility: hasIntersected ? "visible" : "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>

      {animationColor && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--secondary-color)",
            zIndex: 28,
          }}
        />
      )}
    </div>
  );
};

export default RevealComponent;