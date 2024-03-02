import { GrMysql } from "react-icons/gr";
import { DiJava } from "react-icons/di";
import {
  SiArduino,
  SiC,
  SiCloudflare,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiDjango,
  SiDocker,
  SiEclipsemosquitto,
  SiEspressif,
  SiFirebase,
  SiFlutter,
  SiGnubash,
  SiGrafana,
  SiHeroku,
  SiHtml5,
  SiInfluxdb,
  SiJavascript,
  SiMarkdown,
  SiNetlify,
  SiNextdotjs,
  SiNodered,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiSentry,
  SiSqlite,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

export const langs = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    link: "https://youtu.be/x7X9w_GIm1s",
  },
  Java: {
    name: "Java",
    icon: <DiJava />,
    link: "https://youtu.be/",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    link: "https://youtu.be/DHjqpvDnNGE",
  },
  C: {
    name: "C",
    icon: <SiC />,
    link: "https://youtu.be/U3aXWizDbQ4",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    link: "https://youtu.be/MNeX4EGtR5Y",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    link: "https://youtu.be/SPwyp2NG-bE",
  },
  CSharp: {
    name: "C#",
    icon: <SiCsharp />,
    link: "https://youtu.be/ravLFzIguCM",
  },
  MATLAB: {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    link: "https://youtu.be/ok-plXXHlWw",
  },
  VB: {
    name: "VB.NET",
    icon: <SiVisualstudio />,
    link: "https://g.co/kgs/HTM5g2v",
  },
  ASP: {
    name: "ASP.NET",
    icon: <SiVisualstudio />,
    link: "",
  },
};

export const frameworks = {

  React: {
    name: "React",
    icon: <SiReact />,
    link: "https://youtu.be/Tn6-PIqc4UM",
  },
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
    link: "https://youtu.be/Sklc_fQBmcs",
  },
  Django: {
    name: "Django",
    icon: <SiDjango />,
    link: "https://www.djangoproject.com/",
  },

};

export const db = {

  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    link: "https://www.postgresql.org/",
  },
  MySQL: {
    name: "MySQL",
    icon: <GrMysql />,
    link: "https://youtu.be/Cz3WcZLRaWc",
  },
  SQLite: {
    name: "SQLite",
    icon: <SiSqlite />,
    link: "https://www.sqlite.org/index.html",
  },

};

export const iot = {
  // Protocols
  MQTT: {
    name: "MQTT",
    link: "https://mqtt.org/",
  },
  HTTP: {
    name: "REST",
    link: "https://youtu.be/-MTSQjw5DrM",
  },
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp32",
  },
  ESP8266: {
    name: "ESP-8266",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp8266",
  },
  ESP01: {
    name: "ESP-01",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp8266",
  },
  STM32: {
    name: "STM-32",
    icon: <SiStmicroelectronics />,
    link: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
  },
  arduinoUno: {
    name: "Arduino Uno",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/uno-rev3/",
  },
  arduinoMini: {
    name: "Arduino Mini",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/retired/getting-started-guides/ArduinoMini",
  },
  arduinoNano: {
    name: "Arduino Nano",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/nano",
  },
  RaspberryPi4: {
    name: "Raspberry Pi 4",
    icon: <SiRaspberrypi />,
    link: "https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html",
  },

};

export const platforms = {
  Vercel: {
    name: "Vercel",
    icon: <SiVercel />,
    link: "https://vercel.com/",
  },
  Firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    link: "https://youtu.be/vAoB4VbhRzM",
  },
  Heroku: {
    name: "Heroku",
    icon: <SiHeroku />,
    link: "https://www.heroku.com/",
  },
  Cloudflare: {
    name: "Cloudflare",
    icon: <SiCloudflare />,
    link: "https://www.cloudflare.com/",
  },
};

export const otherTools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    link: "https://youtu.be/Gjnup-PuquQ",
  },
  AdobePhotoshop: {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
    link: "https://g.co/kgs/syQ4PWy",
  },
 Adobeillustrator: {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator />,
    link: "https://g.co/kgs/hdzVAE3",
  },
  NodeRED: {
    name: "NodeRED",
    icon: <SiNodered />,
    link: "https://nodered.org/",
  },

};

export const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    link: "https://docs.github.com/en/rest",
  },
  BakeryAPI: {
    name: "Bakery API",
    icon: <AiFillApi />,
    link: "https://apibakery.com/",
  },
  solcast: {
    name: "Solcast API",
    icon: <AiFillApi />,
    link: "https://solcast.com/",
  },
};
