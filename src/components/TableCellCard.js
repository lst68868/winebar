import React from "react";

function TableCellCard() {
  return (
    <>
     {/* // Missing SF Pro font */}
     <h2 className="cocogoose text-rose font-bold text-3xl ml-6 w-9/12 mb-3">Popular</h2>
    <div id="table-cell" className="w-361 bg-white rounded-lg shadow-lg h-390 flex justify-start items-start flex-wrap mb-8">
      <div className="flex justify-start items-start custom-border">
        <div className="w-2/5 rounded-lg pink-bg my-3 ml-3">
          <img src="assets/Tri-card-wine_1.png" className="mx-auto w-auto h-auto p-4" />
        </div>
        <div className="w-3/5 ml-2">
          <p className="text-sm mt-3 amiko-bold">Terranoble Chardonnay</p>
          <p className="text-xs amiko-semi mt-1">Chile, Central Valley 2021</p>
          <p className="text-2xl mt-1 amiko-semi font-bold">$11.99</p>
          <button className="rounded-full rose-bg text-white py-1 w-5/6 mt-1">+ADD</button>
        </div>
        </div>
       
        <div className="flex justify-start items-start custom-border">
        <div className="w-2/5 rounded-lg pink-bg my-3 ml-3">
          <img src="assets/Tri-card-wine_2.png" className="mx-auto w-auto h-auto p-4" />
        </div>
        <div className="w-3/5 ml-2">
          <p className="text-sm mt-3 amiko-bold">Terranoble Chardonnay</p>
          <p className="text-xs amiko-semi mt-1">Chile, Central Valley 2021</p>
          <p className="text-2xl mt-1 amiko-semi font-bold">$11.99</p>
          <button className="rounded-full rose-bg text-white py-1 w-5/6 mt-1">+ADD</button>
        </div>
        </div> 
        <div className="flex justify-start items-start custom-border">
        <div className="w-2/5 rounded-lg pink-bg my-3 ml-3">
          <img src="assets/Tri-card-wine_3 copy.png" className="mx-auto w-auto h-auto p-4" />
        </div>
        <div className="w-3/5 ml-2">
          <p className="text-sm mt-3 amiko-bold">Terranoble Chardonnay</p>
          <p className="text-xs amiko-semi mt-1">Chile, Central Valley 2021</p>
          <p className="text-2xl mt-1 amiko-semi font-bold">$11.99</p>
          <button className="rounded-full rose-bg text-white py-1 w-5/6 mt-1">+ADD</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default TableCellCard;
