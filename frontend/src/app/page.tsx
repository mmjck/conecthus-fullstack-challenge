import { CustomTypography } from "@/components";
import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-grey p-5">
      <CustomTypography label={"Home"}></CustomTypography>

      <div className="bg-white p-5 rounded ml-5 mt-5">
        <span className="font-bold text-[16px] font-manrope text-[#0B2B25] tracking-normal text-left">
          Olá Milena!
        </span>
        <br />
        <span className="text-[12px] font-manrope text-[#0B2B25] tracking-normal text-left">
          22, Novembro 2024
        </span>

        <div className="grid justify-center ">
          <Image
            priority={false}
            src="/images/welcome.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <div className="flex justify-center border mt-5 border-black rounded-lg max-w-md w-full">
            <span className="text-[18px] leading-[52px] font-manrope text-[#0B2B25] tracking-normal text-left">
              Bem-vindo ao WenLock!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
