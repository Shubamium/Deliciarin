import React from "react";
import { GiRoundStar } from "react-icons/gi";
import "./extraHeader.scss";
import { IoMenuOutline } from "react-icons/io5";
import { fetchData } from "@/db/db";
type Props = {};

export default async function ExtraHeader({}: Props) {
  const generalData = await fetchData<any>(`
		 *[_type == 'general' && preset == 'main'][0]{
		 	...
		 }
		`);

  return (
    <div id="extra_header">
      <div className="status">
        <a href="https://x.com/shubamium2" target="_blank" className="credits">
          design and built by <span>@SHUBAMIUM</span>
        </a>

        <div className="stats">
          <GiRoundStar />
          <div className="text-part">
            <h2>COMMISSION STATUS</h2>
            <p className="status-text">{generalData.status}</p>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-menu">
        <IoMenuOutline />
      </button> */}
    </div>
  );
}
