import prisma from "@/lib/prisma";
import TestimonialsMarquee from "./TestimonialsMarquee";


async function getTestimonials() {
  const items = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return items;
}

export default async function Testimonials() {
  const items = await getTestimonials();


  if (!items?.length) return null;

  return <TestimonialsMarquee items={items} />;
}