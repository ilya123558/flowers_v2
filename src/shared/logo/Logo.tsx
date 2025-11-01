import Image from "next/image";

export const Logo = () => {
  return (
    <div className="relative w-[34px] aspect-square">
      <Image src={'/images/main/logo.png'} alt="logo" fill/>
    </div>
  );
};