import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const abouts = [
  
  {
     timeline: "2023 - 2025",
     icon: <FaGraduationCap />,
     title: "Master of Computer Applications (MCA)",
     subtitle: "Kristu Jayanti College, Bangalore",
     now: false,
  },
  {
    timeline: "2020 - 2023",
    icon: <FaGraduationCap />,
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Kristu Jayanti College, Bangalore",
    now: false,
  },
  {
    timeline: "2004 - 2019",
    icon: <ImBooks />,
    title: "Schooling",
    subtitle: "Chinmaya Vidyalaya, Kannur",
  },
  
  {
    timeline: "Contact me at",
    icon: <MdEmail />,
    title: "abhimanyurajeesh@gmail.com",
    link: "mailto:abhimanyurajeesh@gmail.com",
  },
];


export default abouts;
