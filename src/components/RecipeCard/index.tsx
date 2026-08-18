import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/lib/data";
import { Edit, Trash2 } from "lucide-react";

interface RecipeCardProps {
    recipe: Recipe;
    onEdit: () => void;
    onDelete: () => void;
}

export default function RecipeCard( {recipe, onEdit, onDelete}: RecipeCardProps ) {
    const handleEdit = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onEdit();
    }

    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete();
    }

    return (
        <Link href={`/receitas/${recipe.id}`}>
            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                    <Image src={recipe.image} alt={recipe.title} fill className="object-cover"/>
                </div>
                <div className="flex flex-col p-4 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold hover:text-orange-500 transition-colors">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-sm bg-gray-100 px-2 py-1 text-gray-500 rounded">
                            {recipe.category}
                        </span>
                        <div className="flex gap-2"> 
                            <button className="p-2 border border-gray-200 rounded hover:bg-gray-200 transition-colors cursor-pointer" type="button" onClick={handleEdit}>
                                <Edit size={16}/>
                            </button>
                            <button className="p-2 border border-gray-200 rounded hover:bg-gray-200 transition-colors cursor-pointer" type="button" onClick={handleDelete}>
                                <Trash2 size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}