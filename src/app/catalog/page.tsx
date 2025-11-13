'use client'
import { Catalog } from "@/widgets/catalog/Catalog";
import { Header } from "@/widgets/header/Header";

export default function Page () {
  return (
    <section className="">
      <div className="lg:mb-[320px]">
        <Catalog />
      </div>
    </section>
  )
}