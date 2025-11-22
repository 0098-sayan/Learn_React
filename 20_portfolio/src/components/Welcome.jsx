import { useRef } from "react";

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>hey, I am Sayan. Welcome to my</p>
      <h1 ref={titleRef} className="mt-7">Portfolio</h1>
      <div className="small-screen">
        <p>This Portfolio only designed for desktop/tablet only.</p>
      </div>
    </section>
  );
};

export default Welcome;
