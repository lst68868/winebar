import React from "react";

function Footer() {
  return (
    <footer className="h-64 flex justify-left pink-bg">
      <div className="mt-8 ml-6">
        <img src="assets/grape-escape-logo.png" className="w-auto h-auto" />
        <button className="rounded-full bg-transparent flex justify-left align-items-center text-rose py-1 w-4/5 mt-1 amiko-bold">
          <div className="flex justify-center align-items-center">
            <img src="assets/Phone-Icon-Light-Mode 1.png" className="w-auto h-auto" />Contact Us
          </div>
        </button>
        <p className="amiko-reg pt-2 text-left">1138 Lexington Avenue
          NY,
          <br />New York
          <br />10082
        </p>
      </div>
    </footer>
  )
}

export default Footer;
