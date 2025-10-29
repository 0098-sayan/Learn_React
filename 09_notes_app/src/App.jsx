import React from "react";

const App = () => {
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form className="flex gap-4 lg:w-1/2 p-10 flex-col">
        <h1 className="text-3xl font-medium">Add Notes</h1>
        <input
          className="border-2 w-full px-5 py-2 rounded"
          type="text"
          placeholder="Enter notes Heading"
        />
        <textarea
          className="border-2 w-full px-5 py-2 rounded"
          placeholder="Enter details"
        ></textarea>
        <button className="bg-white text-black font-medium px-5 py-2 rounded active:scale-95">
          Add note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          <div className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
              <h3 className="leading-tight text-lg font-bold"></h3>
              <p className="mt-2 leading-tight text-xs font-semibold text-gray-600"></p>
            </div>
            <button className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
