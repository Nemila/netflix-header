import React, { useState } from "react";
import { TbBell, TbCheck } from "react-icons/tb";

type Props = {
  img: string;
};

const SliderItem = ({ img }: Props) => {
  const [reminder, setReminder] = useState(false);

  const handleReminder = (e: any) => {
    e.stopPropagation();
    setReminder((prev) => !prev);
  };

  return (
    <div className="hover:p-1 hover:bg-white text-dark group transition-all flex flex-col justify-center items-center cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="13 reasons why"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <button
        className="hidden group-hover:flex justify-center items-center gap-1 p-1 font-bold"
        onClick={handleReminder}
      >
        {reminder ? (
          <>
            <TbCheck className="text-xl" /> Reminder set
          </>
        ) : (
          <>
            <TbBell className="text-xl" /> Remind me
          </>
        )}
      </button>
      {reminder && (
        <p className="text-light p-1 flex justify-center items-center gap-1 group-hover:hidden font-bold">
          <TbCheck className="text-xl" /> <span>Reminder set</span>
        </p>
      )}
    </div>
  );
};

export default SliderItem;
