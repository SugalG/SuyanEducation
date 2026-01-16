"use client";

import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import {
  Home,
  Building,
  Shield,
  Truck,
  Coffee,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import RevealTest from "@/components/RevealTest";

export default function LifeInCountryContent({ lifeInfo }) {
  const sectionsRef = useRef({});
  const [activeSection, setActiveSection] = useState("livingCost");

  const lifeSections = [
    { id: "livingCost", label: "Living Costs", icon: Home },
    { id: "accommodation", label: "Accommodation", icon: Building },
    { id: "insurance", label: "Insurance", icon: Shield },
    { id: "transportation", label: "Transportation", icon: Truck },
    { id: "foodLifestyle", label: "Food & Lifestyle", icon: Coffee },
    { id: "safety", label: "Safety", icon: Users },
    { id: "workLifeBalance", label: "Work-Life Balance", icon: Briefcase },
  ];

  const LIFE_SECTION_IMAGES = {
    livingCost: "https://www.instarem.com/wp-content/uploads/2024/03/Cost-of-living-Perth.jpg",
    accommodation:"https://www.rmit.edu.au/content/dam/rmit/au/en/students/images/student-life/accommodation/housing-options-promo.jpg",
    insurance:"https://t3.ftcdn.net/jpg/02/04/40/28/360_F_204402874_0gGy7GH5WAE6y6gtKa6dAnw8ZdY1anRQ.jpg",
    transportation: "https://media.istockphoto.com/id/2151733424/photo/students-waiting-at-the-bus-stop.jpg?s=612x612&w=0&k=20&c=6-CAhx9N0wIiFQYEoIVr1w_HAvuj3-Ib24VwNOWMATg=",
    foodLifestyle: "https://thumbs.dreamstime.com/b/young-people-eating-brunch-drinking-smoothies-bowl-eco-bar-restaurant-healthy-lifestyle-food-trends-concept-focus-178020277.jpg",
    safety:"https://media.istockphoto.com/id/483960569/photo/school-crossing-guard.jpg?s=612x612&w=0&k=20&c=n1bRoh4Nof75WiFH7dLq6cgCH6cu9sxZhQ_p-p0HOzU=",
    workLifeBalance: "https://media.istockphoto.com/id/1304715784/vector/work-and-life-balance-tiny-woman-sitting-in-lotus-position-and-keep-harmony-choose-between.jpg?s=612x612&w=0&k=20&c=2oEMNKI8TuqE0QvetiK0_6xWI1ut3VwheOzqNZYG9kg="
  }

  const livingPoints = lifeInfo.lifeInCountry?.livingCost.split("\n") || [];
  const accommodationPoints =
    lifeInfo.lifeInCountry?.accommodation.split("\n") || [];
  const insurancePoints = lifeInfo.lifeInCountry?.insurance.split("\n") || [];
  const transportationPoints =
    lifeInfo.lifeInCountry?.transportation.split("\n") || [];
  const foodLifestylePoints =
    lifeInfo.lifeInCountry?.foodLifestyle.split("\n") || [];
  const safetyPoints = lifeInfo.lifeInCountry?.safety.split("\n") || [];
  const workLifeBalancePoints =
    lifeInfo.lifeInCountry?.workLifeBalance.split("\n") || [];

  // Scroll to section
  const handleScrollTo = (id) => {
    const section = sectionsRef.current[id];
    if (section) {
      const navbarHeight = 140;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  // Track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-40">
            <div className="bg-gradient-to-br from-white via-red-50/50 to-blue-50/50 rounded-2xl border border-gray-200 shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Explore Sections
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-6"></div>

              <nav className="space-y-2">
                {lifeSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Reveal key={section.id} delay={0.1}>
                      <button
                        onClick={() => handleScrollTo(section.id)}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === section.id
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <Icon className="w-4 h-4 text-red-500" />
                        <span>{section.label}</span>
                        {activeSection === section.id && (
                          <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                        )}
                      </button>
                    </Reveal>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-2/3">
          <InfoSection
            id="livingCost"
            title="Living Costs"
            icon={Home}
            points={livingPoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.livingCost}
          />

          <InfoSection
            id="accommodation"
            title="Accommodation"
            icon={Building}
            points={accommodationPoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.accommodation}
          />

          <InfoSection
            id="insurance"
            title="Insurance"
            icon={Shield}
            points={insurancePoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.insurance}
          />

          <InfoSection
            id="transportation"
            title="Transportation"
            icon={Truck}
            points={transportationPoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.transportation}
          />

          <InfoSection
            id="foodLifestyle"
            title="Food & Lifestyle"
            icon={Coffee}
            points={foodLifestylePoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.foodLifestyle}
          />

          <InfoSection
            id="safety"
            title="Safety"
            icon={Users}
            points={safetyPoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.safety}
          />

          <InfoSection
            id="workLifeBalance"
            title="Work–Life Balance"
            icon={Briefcase}
            points={workLifeBalancePoints}
            sectionsRef={sectionsRef}
            image={LIFE_SECTION_IMAGES.workLifeBalance}
          />
        </div>
      </div>
    </div>
  );
}




function InfoSection({ id, title, icon: Icon, points, sectionsRef, image }) {
  const [expanded, setExpanded] = useState(false);
  if (!points.length) return null;

  const visiblePoints = expanded ? points : points.slice(0, 3);

  return (
    <section
      id={id}
      ref={(el) => (sectionsRef.current[id] = el)}
      className="scroll-mt-24 py-8 sm:py-10 md:py-12"
    >
      {/* Section Heading */}
      <RevealTest delay={0.2}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </RevealTest>

      {/* Card */}
      <RevealTest delay={0.4}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          {/* Image on top */}
          {image && (
            <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 relative">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          )}

          {/* Content */}
          <div className="p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-50 to-blue-50">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              </div>

              {/* Paragraphs */}
              <div className="flex-1 space-y-4">
                {visiblePoints.map((p, i) => (
                  <RevealTest key={i} delay={i * 0.05}>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  </RevealTest>
                ))}

                {/* Read More */}
                {points.length > 3 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition"
                  >
                    {expanded ? "Show less" : "Read more"}
                    <span
                      className={`transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealTest>
    </section>
  );
}





