import { WindowControls } from "@components";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="adrian"
          className="w-20 rounded-full"
        />
        <h3>Lets connect</h3>
        <p>
          I'm always looking for new opportunities and collaborations. Feel free
          to reach out to me via email or social media.
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
