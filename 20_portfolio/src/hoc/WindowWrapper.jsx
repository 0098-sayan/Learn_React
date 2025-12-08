import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "@store/window.js";
import { useLayoutEffect, useRef } from "react";
import { Scale } from "lucide-react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !open) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { Scale: 0.8, opacity: 0, y: 40 },
        { Scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
