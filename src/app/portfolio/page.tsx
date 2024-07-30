import React from "react";
import "./portfolio.scss";
import PortfolioSelector from "./portfolioSelector/PortfolioSelector";
import { fetchData } from "@/db/db";
type Props = {};

export default async function Portfolio({}: Props) {
  const portfolioList = await fetchData<any[]>(`
		*[_type == 'portfolio'] | order(_createdAt desc){
			category,
			portfolio{
				_id,
				_type,
				title,
				'source': source.asset -> url, 
			}[]
		}
	`);
  console.log(portfolioList);
  return (
    <main id="page_portfolio">
      <PortfolioSelector ptList={portfolioList} />
    </main>
  );
}
