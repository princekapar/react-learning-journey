import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-ful h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-full outline-none">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-5 py-2 bg-green-600  text-white rounded-full "
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-5 py-2 bg-blue-600  text-white rounded-full "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-5 py-2 bg-purple-600  text-white  rounded-full "
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-5 py-2 bg-black rounded-full text-white"
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-5 py-2 bg-pink-600  text-white rounded-full "
          >
            pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-5 py-2 bg-orange-600  text-white rounded-full "
          >
            orange
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-5 py-2 bg-red-600  text-white rounded-full "
          >
            red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
