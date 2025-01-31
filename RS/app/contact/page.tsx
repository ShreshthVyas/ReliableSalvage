import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Prashant Sharma. # Contact - 9811629982 / 9540060297. #
        Head Office : 77, Ground Floor Palika Bazar, Near GT Road, Ghaziabad, Uttar Pradesh
        BRANCHES ( MUMBAI / GUJRAT). # 
        Email : reliablesalvage2010@gmail.com, 
        reliablesalvageoffice@gmail.com"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
