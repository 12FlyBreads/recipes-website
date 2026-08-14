import Link from "next/link";

export default function Home() {
  return (
    <main className="grow">
      {/* seção hero */}
      <section className="bg-orange-50 py-12">
        <div className="flex flex-col items-center gap-6 container mx-auto">
          <h1 className="text-5xl font-bold">Receitas Deliciosas</h1>
          <p className="text-xl">Descubra receitas simples e saborosas para todas as ocasiões.</p>
          <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2" href="/receitas">Ver todas as receitas</Link>
        </div>
      </section>
    </main>
  );
}
