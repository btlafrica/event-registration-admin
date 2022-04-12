import React from "react";
import { Avatars } from "../../assets";

function StatsCard({ data: { title, total } }) {
  return (
    <div className="bg-white shadow-md border-1 border-primary-400 flex justify-between items-center col-span-3 rounded-8 px-4 py-3">
      <div>
        <p className="font-bold text-dark text-xl">{total}</p>
        <p className="text-xs text-dark">{title}</p>
      </div>
      <div>
        <Avatars />
      </div>
    </div>
  );
}

export default StatsCard;
