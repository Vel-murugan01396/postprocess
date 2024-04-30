import React from "react";

function App() {

  function show(){
    document.getElementById("overlay").style.display="block";
    document.getElementById("popup").style.display="block";
  }

  function closePopup(){
    document.getElementById("overlay").style.display="none";
    document.getElementById("popup").style.display="none";
  }

  return (
    <>
      <button className="bg-slate-800 text-lg text-white rounded p-2 " onClick={show}>Show</button>
      <div id="overlay" className="w-full h-full bg-black absolute top-0 left-0 z-[1] opacity-[0.8] hidden" onClick={closePopup}></div>
      <div id="popup" className="w-[40%]  bg-white absolute  z-[3] p-6 rounded-md left-[30%] hidden">
        <p>lorem jhfvjhfvhvjh hvjhvjhvyjhv jhvjhgyjg rsgfjg lkjlnm.lnljn kjhj,kb,jbjb</p>
        <button className="bg-red-800 text-lg text-white rounded p-2" onClick={closePopup}>close</button>
      </div>
    </>
  );
}

export default App;
