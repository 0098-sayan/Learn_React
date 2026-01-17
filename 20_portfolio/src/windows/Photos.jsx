import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { gallery } from "@constants";
import useWindowStore from "@store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const openImage = (item) =>
    openWindow("imgfile", { name: item.id ? `Image ${item.id}` : "Image", imageUrl: item.img });

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5 bg-white">
        <div className="grid grid-cols-3 gap-4">
          {gallery.map((item) => (
            <button
              key={item.id}
              onClick={() => openImage(item)}
              className="overflow-hidden rounded focus:outline-none"
              title={item.id ? `Image ${item.id}` : "Image"}
            >
              <img
                src={item.img}
                alt={`gallery-${item.id}`}
                className="w-full h-40 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;