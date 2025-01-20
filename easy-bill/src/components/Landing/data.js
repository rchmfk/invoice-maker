import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../../public/img/benefit-one.png";
  import benefitTwoImg from "../../public/img/benefit-two.png";
  
  const benefitOne = {
    title: "Highlight your benefits",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Save Time and Effort",
        desc: "Stop wasting time creating invoices manually. EasyBill speeds up the process so you can focus on the things that matter most in your business.",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Enhance Credibility",
        desc: "Professional invoices build trust with your customers and make your business look more polished.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Affordable and Accessible",
        desc: "EasyBill is designed to be accessible for everyone with affordable pricing options, without compromising on quality or features.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "What Benefits Will You Get",
    desc: "",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Professional Invoice Templates",
        desc: "",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Customizable",
        desc: "",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Reporting and Analytics",
        desc: "",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};