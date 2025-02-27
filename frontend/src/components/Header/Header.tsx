import Image from "next/image";

export function Header() {
  return (
    <div className="bg-[#000000] w-full flex items-start flex-start flex-row p-8">
      <Image
        alt="logo"
        width={200}
        height={60}
        src="https://konneqt.io/wp-content/uploads/2025/01/White-Konneqt-421d94.svg"
      />
    </div>
  );
}
