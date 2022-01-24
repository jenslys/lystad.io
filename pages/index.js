import Image from "next/image";
import Link from "next/link";
import signature from "../public/images/signature.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Link href="https://go.lystad.io/github">
        <a rel="noopener noreferrer">
          <Image
            objectFit="cover"
            src={signature}
            alt="Signature"
            layout="fill"
            quality={100}
            priority
          />
        </a>
      </Link>
    </div>
  );
}
