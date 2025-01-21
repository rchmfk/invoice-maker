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
    title: "What Benefits Will You Get",
    desc: "EasyBill helps you save time by automating invoice creation, enhances your business’s credibility with professional invoices, and offers affordable pricing without compromising on quality or features.",
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
    desc: "EasyBill offers customizable professional invoice templates and powerful reporting tools to help you create polished invoices and gain valuable insights into your business's financial performance.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Professional Invoice Templates",
        desc: "EasyBill offers a variety of sleek, professional invoice templates that help you create polished and credible invoices in just a few clicks. These templates are designed to make your business look more professional and trustworthy to your customers.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Customizable",
        desc: "With EasyBill, you have the flexibility to customize your invoices to suit your specific needs. You can personalize your templates with your business logo, colors, payment terms, and other details, giving you full control over the appearance and content of your invoices.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Reporting and Analytics",
        desc: "EasyBill provides detailed reporting and analytics tools that help you track your invoicing performance. You can view trends, monitor payments, and gain insights into your business's financial health, making it easier to make informed decisions and improve cash flow management.",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};