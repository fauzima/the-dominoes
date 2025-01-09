import Image from "next/image";
import Dark from "../../public/dark.jpg";
import Light from "../../public/light.jpg";

export default function Backdrop() {
  return (
    <div>
      <div className="pointer-events-none fixed right-0 -z-50 w-full md:w-[768px]">
        <Image
          src={Dark}
          alt="bg-dark"
          className="-z-50 hidden opacity-0 transition-opacity ease-in-out dark:block dark:opacity-100"
        />
        <Image
          src={Light}
          alt="bg-light"
          className="-z-50 rotate-180 opacity-100 transition-opacity ease-in-out dark:hidden dark:opacity-0"
        />
      </div>
      <div className="pointer-events-none fixed right-0 -z-40 hidden aspect-square bg-gradient-to-r from-white opacity-100 transition-opacity ease-in-out md:block md:w-[768px] dark:hidden dark:opacity-0"></div>
    </div>
  );
}
