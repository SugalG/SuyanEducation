import TestimonialsMarquee from "./TestimonialsMarquee";

const videoTestimonials = [
  {
    id: "yt-1",
    title: "Student Testimonial 1",
    youtubeUrl: "https://www.youtube.com/shorts/UqaF_htJCnU",
  },
  {
    id: "yt-2",
    title: "Student Testimonial 2",
    youtubeUrl: "https://www.youtube.com/shorts/KtGnd98c6OM",
  },
  {
    id: "yt-3",
    title: "Student Testimonial 3",
    youtubeUrl: "https://www.youtube.com/shorts/LPT9-vdXCP4",
  },
  {
    id: "yt-4",
    title: "Student Testimonial 4",
    youtubeUrl: "https://www.youtube.com/shorts/pDhhjiU_rm8",
  },
];

export default function Testimonials() {
  return <TestimonialsMarquee items={videoTestimonials} />;
}