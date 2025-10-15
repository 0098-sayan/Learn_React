import React from "react";
import Scetion1 from "./comonents/section1/Scetion1";
import Section2 from "./comonents/section2/Section2";

const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    content: "",
    tag: "Satisfied",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1678453147461-0e53fe848df6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmd8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=600",
    content: "",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmd8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=600",
    content: "",
    tag: "Underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1589785157215-127232cf9dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcG9sZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    content: "",
    tag: "Underwear",
  },
];

const App = () => {
  return (
    <div>
      <Scetion1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
