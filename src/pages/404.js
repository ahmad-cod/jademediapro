import react from "react";
import Link from "next/link";
import Image from "next/image";
import { errorimg, maskimg } from "../images";

export default function Custom404() {
  return (
    <div className="flex flex-col-reverse  md:flex-row px-5 md:p-24 items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-8">
          We couldn&apos;t find the <br /> page you are looking for
        </h1>

        <p className="mb-14">
          Don&apos;t panic! You didn&apos;t break the internet :) <br />
          The page you are looking for might have been removed, had its <br />
          name changed, or temporarily inaccessible.
        </p>

        <div className="flex  bg-[#77459B] gap-7 p-5 w-72 rounded-md text-white justify-center  ">
          <Link href="/">Return to Homepage</Link>
          <Image src={maskimg} alt="error" />
        </div>
      </div>
      <Image src={errorimg} alt="404 image" />
    </div>
  );
}
