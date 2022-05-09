import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to fullstack hero</p>
        <p>Hundreds of students</p>
        <p>Join Now</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say hi youtube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Referrals accepted</p>
        <p>It is a pretty awesome clone</p>
        <p>It is not a real site</p>
        <p>PapaFams</p>
      </div>
    </div>
  );
}

export default Footer;
