import { WindowControls } from "@components";
import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  const totalStacks = techStack.length;
  const loadedStacks = techStack.length;
  const successPercentage = (loadedStacks / totalStacks) * 100;
  const renderTime = Math.random() * 10; // Simulated render time in ms

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@Sayan % </span>Show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> {loadedStacks} of {totalStacks} stacks loaded
            successfully ({successPercentage.toFixed(0)}%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" /> Render time of: {renderTime.toFixed(2)}ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
