// src/components/ChannelCard.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

const ChannelCard = ({ name, logoSrc, link, logoClassName }) => {
  const isClickable = link && link !== "#";

  const CardContent = (
    <>
      <div className="flex flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 ">
        {/* Link Button */}
        <div className="flex w-full items-center justify-center">
          <Image
            src={logoSrc}
            alt={`${name} Logo`}
            width={400}
            height={400}
            className={`object-contain ${
              logoClassName || "h-40 w-auto rounded-lg"
            }`}
          />
        </div>

        {/* Channel Name */}
        <p className="my-4 font-semibold text-brand-dark">{name}</p>
      </div>
    </>
  );

  return (
    <div
      className={`flex flex-col items-center justify-between rounded-2xl  text-center  ${
        isClickable
          ? "transition-transform duration-300 hover:-translate-y-2"
          : ""
      }`}
    >
      {isClickable ? (
        // If it's clickable, wrap the content in a Link.
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-between h-full"
        >
          {CardContent}
        </Link>
      ) : (
        // Otherwise, render the content in a simple div.
        <div className="flex flex-col items-center justify-between h-full">
          {CardContent}
        </div>
      )}
    </div>
  );
};

export default ChannelCard;
