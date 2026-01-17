import { Dock, Navbar, Welcome, Home } from "@components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from "@windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos/>
    </main>
  );
}

export default App;
