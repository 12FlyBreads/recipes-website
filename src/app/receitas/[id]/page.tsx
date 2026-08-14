import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ReceitaPage(){
    return(
        <main className="grow py-8">
            <div className="container mx-auto py-8">
                <Link className="flex text-orange-500 hover:text-orange-700" href="/receitas"><ChevronLeftIcon />Voltar para receitas</Link>
                <section>
                    <div className="relative h-96 w-full">
                        <Image src="" alt=""fill />
                    </div>
                    <div>
                        <h1>Titulo da Receita</h1>
                        <p>Descrição da Receita</p>
                        <div>
                            { /* TODO: Lista de ingredientes */}
                        </div>
                        <div>
                            <div>

                            </div>
                            <div>
                                 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}