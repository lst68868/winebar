import React from "react";

function SplitCard() {
  return (
    <>
      {/* // Missing SF Pro font */}
      <h2 className="cocogoose text-rose text-xl ml-6 w-9/12 mb-3">Sommelier Selected</h2>
      <div id="split-cell" className="h-316 text-left  flex-wrap mb-8">
        <div className="flex justify-start items-start">
          <div className="halves w-1/2 bg-white shadow-lg rounded-lg">
            <div className="w-36 dark dark pink-bg mx-auto">
              <img src="assets/Alpamanta _Natal_ Malbec2022.png" className="mx-auto mt-3 w-auto h-auto p-4 dark pink-bg" />
            </div>
            <p className="text-base mt-3 ml-3 amiko-bold">Natal Malbec</p>
            <p className="text-sm amiko-reg ml-3 text-dkgrey">Mendoza, Argentina 2022</p>
            <p className="text-2xl mt-1 amiko-semi font-bold ml-3">$25<sup className="text-xs">99</sup></p>
            <div className="text-center pt-2 pb-4">
              <button className="rounded-full rose-bg text-white py-1 w-10/12 mt-1">+ADD</button>
            </div>
          </div>

          <div className="halves w-1/2 bg-white shadow-lg rounded-lg ml-4">
            <div className="w-36 dark pink-bg mx-auto">
              <img src="assets/ORGANIC_Pinot_Grigio_2020.png" className="mx-auto mt-3 w-auto h-auto p-4 dark pink-bg" />
            </div>
            <p className="text-base mt-3 ml-3 amiko-bold">Domini Del Leone Pinot Grigio</p>
            <p className="text-sm amiko-reg ml-3 text-dkgrey">Italy, 2022</p>
            <p className="text-2xl mt-1 amiko-semi font-bold ml-3">$15<sup className="text-xs">99</sup></p>
            <div className="text-center pt-2 pb-4">
              <button className="rounded-full rose-bg text-white py-1 w-10/12 mt-1">+ADD</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SplitCard;
