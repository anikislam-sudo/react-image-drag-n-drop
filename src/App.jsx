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
  const [selectThumbnails, setSelectThumbnails] = useState([]);

 

  return (
    <div className="min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4">
      <section className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
        <div className="flex flex-col gap-y-2">
          <nav className="py-4 px-6">
            <article className="flex flex-row justify-between items-center">
              <h1 className="text-2xl font-bold">
            
                  Gallery
             
              </h1>
              <button
                className="text-red-500 font-medium"
                
              >
                Delete files
              </button>
            </article>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default App;
