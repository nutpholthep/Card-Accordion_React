import { useState } from "react";

export default function Accordion({ fname, lname, username, avatar }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen((prev) => !prev);
    console.log("open");
  }
  return (
    <div className="w-full">
      <div
        className="bg-[#d1fae5] flex justify-between p-3 items-center rounded-xl"
        onClick={handleClick}
      >
        <h1 className=" text-md md:text-xl">{username}</h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${open && "rotate-180"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`bg-green-400 w-full first-letter:text-3xl text-2xl px-4 pt-6 rounded-xl flex flex-col items-center ${
          open
            ? `translate-y-5 transition duration-300 delay-150  ease-in`
            : `-translate-y-10 hidden `
        }`}
      >
        <img src={avatar} alt="" className="w-1/2"/>
        <p>{`${fname} ${lname}`}</p>
      </div>
    </div>
  );
}
