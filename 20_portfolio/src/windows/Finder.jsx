import { WindowControls } from "@components";
import { locations } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useLocationStore from "@store/location";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active"
                  )}
                  key={item.id}
                  onClick={() => setActiveLocation(item)}
                >
                  <img src={item.icon} alt={item.name} className="w-4" />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>...</ul>
          </div>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
