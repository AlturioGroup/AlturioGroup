// components/WhatsAppButton.tsx

const PHONE = "918089707942";
const MESSAGE =
  "Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

function WhatsAppIcon({
  color = "white",
  size = 32,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill={color}
      />
      <path
        d="M12.04 2.002C6.494 2.002 2 6.496 2 12.042c0 1.77.46 3.47 1.338 4.965L2.022 22l5.11-1.34A10.03 10.03 0 0012.04 22.08c5.545 0 10.038-4.494 10.038-10.04 0-2.682-1.044-5.203-2.94-7.097A9.973 9.973 0 0012.04 2.002zm0 18.397a8.33 8.33 0 01-4.248-1.163l-.305-.18-3.033.795.808-2.955-.198-.303a8.33 8.33 0 01-1.277-4.45c0-4.6 3.745-8.343 8.347-8.343 2.23 0 4.325.869 5.9 2.447a8.306 8.306 0 012.44 5.9c.002 4.6-3.744 8.252-8.434 8.252z"
        fill={color}
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group fixed md:bottom-4 bottom-2 md:right-8 right-2 z-50
        flex items-center gap-3
        bg-[#1fb154] text-white
        px-4 py-4 rounded-full
        shadow-lg
        hover:scale-105 transition-all duration-200
      "
    >
      <WhatsAppIcon color="white" size={34} />
    </a>
  );
}
