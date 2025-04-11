import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Allow us to introduce us as one of the leading and trusted Salvage Company deals in all salvage items, we have a sound goodwill in the market. #
 
We believe in quick and fair dealings and we have large number of contacts in Salvage market and we can give you a better deal. #

Our mission is to give you a profitable business deals with trusted clients partnership and safety levels and solutions to the client's need. #
 
 We have specialization in Food, Paper, BOPP, Plastic Dana, Cattle feed, Raw Rubber, Metal Scraps and all types of chemicals, Electronic items, Solar Pannel etc.#
 
 We are also working on Auctions organized projects by Surveyors and Insurance Company "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
