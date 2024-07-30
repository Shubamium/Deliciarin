import React from "react";
import PricingPage from "./PricingPage";
import { fetchData } from "@/db/db";

type Props = {};

export default async function PagePricing({}: Props) {
  const data = await fetchData<any>(`
		*[_type == 'services']{
			...
		}
	`);

  return <PricingPage services={data} />;
}
