"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "9779864261506";
  const message = "Hello, I’m interested in study abroad consultation.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-green-500 hover:bg-green-600
        shadow-lg
        transition
      "
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />

    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="26"
  height="26"
  fill="white"
  viewBox="0 0 16 16"
  className="relative z-10"
>
  <path d="M13.601 2.326A7.91 7.91 0 0 0 8.013 0C3.588 0 0 3.582 0 7.995c0 1.41.368 2.787 1.067 4.004L0 16l4.11-1.067a7.963 7.963 0 0 0 3.903 1.005h.004c4.424 0 8.011-3.582 8.011-7.995a7.94 7.94 0 0 0-2.427-5.617ZM8.013 14.53a6.55 6.55 0 0 1-3.334-.93l-.239-.142-2.438.633.651-2.375-.156-.244a6.54 6.54 0 0 1-1.005-3.477c0-3.62 2.956-6.568 6.587-6.568a6.54 6.54 0 0 1 4.654 1.92 6.52 6.52 0 0 1 1.933 4.648c0 3.62-2.956 6.567-6.653 6.567Zm3.61-4.918c-.198-.099-1.172-.579-1.353-.646-.181-.066-.313-.099-.445.099-.132.198-.512.646-.628.778-.116.132-.231.149-.429.05-.198-.099-.836-.307-1.593-.979-.589-.525-.986-1.172-1.102-1.37-.116-.198-.012-.305.087-.404.089-.088.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.073-.611-1.47-.161-.387-.324-.334-.445-.34-.116-.006-.248-.007-.38-.007a.73.73 0 0 0-.528.248c-.181.198-.693.677-.693 1.652 0 .975.71 1.916.809 2.049.099.132 1.397 2.135 3.386 2.993.473.204.843.326 1.13.417.475.151.908.13 1.25.079.381-.057 1.172-.479 1.337-.941.165-.462.165-.859.116-.941-.05-.082-.181-.132-.38-.231Z" />
</svg>

    </a>
  );
}
