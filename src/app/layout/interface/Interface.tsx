import React from "react";
import Header from "../header/Header";
import ExtraHeader from "../extraHeader/ExtraHeader";
import Footer from "../footer/Footer";

type Props = {};

export default function Interface({}: Props) {
  return (
    <>
      <ExtraHeader />
      <Header />
      <Footer />
    </>
  );
}
