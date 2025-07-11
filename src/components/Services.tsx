import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Boxes, Monitor, Smartphone, Settings, FileText, ChevronRight, CircleFadingArrowUp, WebhookIcon, Expand } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Types
// Define the types for the service items and services
interface ServiceItem {
  icon: React.ReactNode;
  text: string;
};
interface Service {
  ref: (node?: Element | null) => void;
  inView: boolean;
  delay: number;
  icon: React.ReactNode;
  title: string;
  items: ServiceItem[];
  link: string;
}

// Service component
// This component displays a list of services offered by Zeiad
// Each service has an icon, title, description, and a button to contact the developer
export default function Services(): JSX.Element {
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: appRef, inView: appInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: seoRef, inView: seoInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Common styles for the cards and icons
  const cardStyle = "bg-blue-950 border border-[#2c2c2e] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300";
  const iconCommon = "w-6 h-6 mr-2";
  const accentBtn = "bg-blue-500 hover:bg-[#07c7c4]/80 text-white";

  // Services data
  // Each service has a reference, inView state, delay for animation, icon, title, items (description), and a link to contact
  const services: Service[] = [
    {
      ref: webRef,
      inView: webInView,
      delay: 0,
      icon: <Boxes className="w-16 h-16 mb-4 mx-auto text-[#08D9D6]/80" />,
      title: "Game Development",
      items: [
        { icon: <Monitor className={`${iconCommon} text-indigo-400`} />, text: "Game Designing using Unity" },
        { icon: <Smartphone className={`${iconCommon} text-orange-400`} />, text: "Creativity in Gaming Development" },
        { icon: <FileText className={`${iconCommon} text-yellow-400`} />, text: "Professional 3D-Modeling" },
      ],
      link: "https://api.whatsapp.com/send?phone=201021259379&text=I want game service - أريد خدمة الالعاب",
    },
    {
      ref: appRef,
      inView: appInView,
      delay: 0.2,
      icon: <Smartphone className="w-16 h-16 mb-4 mx-auto text-[#FF2E63]/80" />,
      title: "Mobile App Development",
      items: [
        { icon: <Smartphone className={`${iconCommon} text-blue-400`} />, text: "Creating High Quality iOS & Android Apps" },
        { icon: <FileText className={`${iconCommon} text-orange-400`} />, text: "Using latest and most advanced technologies" },
        { icon: <CircleFadingArrowUp className={`${iconCommon} text-red-400`} />, text: "Great optimization for performance & UX design" },
      ],
      link: "https://api.whatsapp.com/send?phone=201021259379&text=I want mobile app service",
    },
    {
      ref: seoRef,
      inView: seoInView,
      delay: 0.4,
      icon: <Settings className="w-16 h-16 mb-4 mx-auto text-purple-500" />,
      title: "Back-end Development",
      items: [
        { icon: <Settings className={`${iconCommon} text-cyan-500`} />, text: "Improve Server Performance & Security" },
        { icon: <WebhookIcon className={`${iconCommon} text-blue-500`} />, text: "Integrating RESTful APIs" },
        { icon: <Expand className={`${iconCommon} text-green-500`} />, text: "Building scalable & optimized applications" },
      ],
      link: "https://api.whatsapp.com/send?phone=201021259379&text=I want backend service",
    },
  ];

  return (
    <section className="text-[#EAEAEA] py-16 md:mt-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center mt-10 mb-16">
          <div className="w-1 h-10 bg-[#FF2E63] mr-5"></div>
          <h1 className="text-4xl font-bold md:text-5xl">Services I Provide for My Clients</h1>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={service.ref}
              className={cardStyle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: service.inView ? 1 : 0, y: service.inView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              {service.icon}
              <h2 className="text-2xl font-semibold mb-4 text-center">{service.title}</h2>
              <hr className="mb-4 w-24 mx-auto border-t-2 border-blue-600" />
              <div className="space-y-6 text-sm md:text-base text-[#EAEAEA]/80">
                {service.items.map((item, i) => (
                  <p key={i} className="flex justify-center">
                    {item.icon}
                    {item.text}
                  </p>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <a
                  href={service.link}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg ${accentBtn} transition duration-300`}
                >
                  <p>Contact Me</p>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
