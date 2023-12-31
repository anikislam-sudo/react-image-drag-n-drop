import { useState } from "react";
import img1 from "./assets/image-1.webp";
import img2 from "./assets/image-2.webp";
import img3 from "./assets/image-3.webp";
import img4 from "./assets/image-4.webp";
import img5 from "./assets/image-5.webp";
import img6 from "./assets/image-6.webp";
import img7 from "./assets/image-7.webp";
import img8 from "./assets/image-8.webp";
import img9 from "./assets/image-9.webp";
import img10 from "./assets/image-10.jpeg";
import img11 from "./assets/image-11.jpeg";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 },
  ]);
  const [selectCards, setSelectCards] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDeleteClick = () => {
    const updatedImages = images.filter(
      (image) => !selectCards.some((selected) => selected.id === image.id)
    );

    setImages(updatedImages);
    setSelectCards([]);
  };

  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  const handleDrop = (targetIndex) => {
    setDragging(false);

    if (draggedImage) {
      const updatedImages = images.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <div className="min-h-full w-full flex flex-row items-center justify-center md:p-0 p-4 ">
      <section className="lg:w-1/2 md:w-3/4 w-full  bg-white rounded-lg shadow">
        <div className="flex flex-col gap-y-2 ">
          <nav className="py-4 px-6">
            <article className="flex flex-row justify-between items-center">
              <h1 className="text-2xl font-bold">
                {selectCards.length === 0 ? (
                  "Gallery"
                ) : (
                  <label
                    htmlFor="select"
                    className="flex flex-row justify-between items-center gap-x-4"
                  >
                    <input
                      type="checkbox"
                      name="select"
                      id="select"
                      checked={selectCards.length > 0}
                      className="h-5 w-5 accent-blue-500 cursor-pointer"
                      onChange={() => setSelectCards([])}
                    />
                    {selectCards.length} Files Selected
                  </label>
                )}
              </h1>
              <button
                className="text-red-500 font-medium"
                onClick={handleDeleteClick}
              >
                Delete files
              </button>
            </article>
          </nav>
          <hr />
          <section className="h-full w-full p-6">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`group relative before:content-['']  before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-move
                  ${index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"}
                  ${
                    selectCards.find((photo) => photo.id === image.id)
                      ? "opacity-100"
                      : ""
                  }`}
                  draggable={true}
                  onDragStart={() => handleDragStart(image)}
                  onDrop={() => handleDrop(index)}
                  onDragOver={handleDragOver}
                >
                  <div
                    className={`h-full w-full max-w-full rounded-lg object-contain border-2 relative
                    ${
                      selectCards.find((photo) => photo.id === image.id)
                        ? "opacity-70"
                        : ""
                    }`}
                  >
                    <img
                      src={image.img}
                      alt={image.id}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="border-2  hover:bg-black/50 absolute top-0 left-0 right-0 bottom-0 transition-opacity opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <input
                    type="checkbox"
                    name={image.id}
                    id={image.id}
                    className={`absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer
                    ${
                      selectCards.find((photo) => photo.id === image.id)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    checked={
                      selectCards.find((photo) => photo.id === image.id)
                        ? true
                        : false
                    }
                    onChange={() => {
                      if (selectCards.find((photo) => photo.id === image.id))
                        setSelectCards(
                          selectCards.filter((photo) => photo.id !== image.id)
                        );
                      else setSelectCards([...selectCards, image]);
                    }}
                  />
                  {dragging && Number(draggedIndex) === Number(image.id) && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white border-2  rounded-lg"></div>
                  )}
                </div>
              ))}
              <div className="relative border-2 border-dashed rounded-lg p-4 hover-bg-gray-50 transition-colors ease-linear">
                <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
                  <img
                    src="/placeholder.png"
                  
                  />
                  <span className="whitespace-nowrap ">Add Images</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
