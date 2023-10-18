import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  offset,
  iconUrl,
  ctaText,
  route,
}: {
  offset: any;
  iconUrl?: any;
  ctaText?: any;
  route?: any;
}) => {
  return (
    <div className="offset-card-wrapper">
      <div className="offset-icon">
        {offset.iconUrl && (
          <Image
            className="bg-lightPink rounded-full p-3"
            src={offset.iconUrl}
            alt="Logo"
            width={76}
            height={76}
          />
        )}
      </div>
      <h3 className="offset-title">{offset.offsetActivity}</h3>
      <p className="offset-description">{offset.description}</p>
      {ctaText && <Link href={route}>{ctaText}</Link>}
    </div>
  );
};

export default Card;
