import { GrMysql } from "react-icons/gr";
import {
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAiohttp,
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
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiSentry,
  SiMusescore,
  SiSqlite,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export const langs = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    link: "https://youtu.be/x7X9w_GIm1s",
  },
  Java: {
    name: "Java",
    icon: <FaJava />,
    link: "https://youtu.be/NrO0CJCbYLA",
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
  PHP: {
    name: "PHP",
    icon: <SiPhp />,
    link: "https://www.php.net/",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    link: "https://youtu.be/ok-plXXHlWw",
  },
};

export const frameworks = {
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
    link: "https://youtu.be/lHhRhPV--G0",
  },
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
  DjangoREST: {
    name: "Django-REST",
    icon: <SiDjango />,
    link: "https://www.django-rest-framework.org/",
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
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
    link: "https://youtu.be/G1rOthIU-uo",
  },
};

export const iot = {
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp32",
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
  arduinoMicro: {
    name: "Arduino Micro",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/micro",
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
    // Protocols
  HTTP: {
    name: "REST",
    icon: <SiAiohttp />,
    link: "https://youtu.be/-MTSQjw5DrM",
  },
  MQTT: {
    name: "MQTT",
   // icon: <SiMqtt />,
    link: "https://mqtt.org/",
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
  Cloudflare: {
    name: "Cloudflare",
    icon: <SiCloudflare />,
    link: "https://www.cloudflare.com/",
  },
  ApiBakery: {
    name: "ApiBakery",
    icon: <SiSentry />,
    link: "https://apibakery.com/",
  },
};

export const otherTools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    link: "https://youtu.be/Gjnup-PuquQ",
  },
  NodeRED: {
    name: "NodeRED",
    icon: <SiNodered />,
    link: "https://nodered.org/",
  },
  Simulink: {
    name: "Simulink",
    icon: <SiMusescore />,
    link: "https://www.mathworks.com/products/simulink.html",
  },
  Adobephotoshop: {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
    link: "http://www.adobe.com/",
  },
  Adobeillustrator: {
    name: "Illustrator",
    icon: <SiAdobeillustrator />,
    link: "http://www.adobe.com/",
  },
  Adobeindesign: {
    name: "Adobeindesign",
    icon: <SiAdobeindesign />,
    link: "http://www.adobe.com/",
  },
};

export const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    link: "https://docs.github.com/en/rest",
  },
  solcast: {
    name: "Solcast API",
    icon: <AiFillApi />,
    link: "https://solcast.com/",
  },
};

export const extra = {
  Dart: {
    name: "Dart",
    icon: <SiDart />,
    link: "https://youtu.be/NrO0CJCbYLA",
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    link: "https://youtu.be/zQnBQ4tB3ZA",
  },
    Verilog: {
    name: "Verilog",
    link: "https://en.wikipedia.org/wiki/Verilog",
  },
    MATLAB: {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
  },
  solcast: {
    name: "Solcast API",
    icon: <AiFillApi />,
    link: "https://solcast.com/",
  },
  Heroku: {
    name: "Heroku",
    icon: <SiHeroku />,
    link: "https://www.heroku.com/",
  },
  Sentry: {
    name: "Sentry",
    icon: <SiSentry />,
    link: "https://sentry.io/welcome/",
  },
  Netlify: {
    name: "Netlify",
    icon: <SiNetlify />,
    link: "https://www.netlify.com/",
  },
};
