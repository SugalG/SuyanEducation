import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, UsersRound } from "lucide-react";

const accreditations = [
  {
    title: "Approved by Ministry of Education Nepal",
    detail: "Government-approved education consultancy",
    image: "/accreditations/nepal-emblem.png",
    imageAlt: "Emblem of Nepal",
    icon: ShieldCheck,
    accent: "text-blue-700",
    imageClassName: "p-2.5",
  },
  {
    title: "Member of ECAN",
    detail: "Educational Consultancy Association of Nepal",
    image: "/accreditations/ecan-logo.png",
    imageAlt: "ECAN logo",
    icon: CheckCircle2,
    accent: "text-red-600",
    imageClassName: "p-2",
  },
  {
    title: "Executive Member of JALSAN",
    detail: "Japanese Language School Association of Nepal",
    image: "/accreditations/jalsan-logo.png",
    imageAlt: "JALSAN logo",
    icon: Award,
    accent: "text-emerald-700",
    imageClassName: "p-2",
  },
  {
    title: "Member of NECSA",
    detail: "Recognized professional association member",
    image: "/accreditations/necsa-logo.png",
    imageAlt: "NECSA logo",
    icon: UsersRound,
    accent: "text-amber-700",
    imageClassName: "p-2.5",
  },
];

export default function AccreditationHighlights() {
  return (
    <section className="relative z-20 -mt-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[8px] border border-gray-200 bg-white shadow-xl shadow-blue-950/10">
        <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.82fr_2fr] lg:items-center lg:p-7">
          <div className="border-b border-gray-200 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">
              Trusted Credentials
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl">
              Approved, affiliated, and accountable
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Suyan Education is backed by national approval and active
              professional memberships that students and families can verify.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {accreditations.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="min-h-[210px] rounded-[8px] border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="relative h-24 min-w-0 flex-1 overflow-hidden rounded-[6px] bg-white ring-1 ring-gray-200">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 210px, (min-width: 640px) 45vw, 90vw"
                        className={`object-contain ${item.imageClassName}`}
                      />
                    </div>
                    <Icon className={`h-6 w-6 shrink-0 ${item.accent}`} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold leading-5 text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
