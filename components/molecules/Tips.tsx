import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tips = ({
  tips,
  ImgSrc,
  ctaText,
  route,
}: {
  tips: any;
  ImgSrc?: any;
  ctaText?: any;
  route?: any;
}) => {
  // icon: "/assets/tip.svg",
  // title: "Scan product",
  // description: "Tip about scanning product, how to reach your goals easier.",
  // button: "Scan a product",
  // route: "/scan",
  return (
    <div className="offset-card-wrapper">
      <div className="offset-icon">
        {tips.icon && (
          <Image
            src={tips.icon}
            alt="Logo"
            className="bg-lightPink rounded-full p-2"
            width={76}
            height={76}
          />
        )}
      </div>
      <h3 className="offset-title">{tips.title}</h3>
      <p className="offset-description">{tips.description}</p>
      <Link href={tips.route}>{tips.button}</Link>
    </div>
  );
};

export default Tips;
