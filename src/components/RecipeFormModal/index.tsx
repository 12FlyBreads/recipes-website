import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";
import { yupResolver } from "@hookform/resolvers/yup";


interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }:RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<RecipeFormData>({
        resolver: yupResolver(recipeSchema),
        mode: "onSubmit"
    })

    const onSubmit = (data: RecipeFormData) => {
        console.log(data);
        reset();
    }

    const inputStyle="p-2 border border-zinc-200 rounded-md";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Titulo</label>
                            <input className={inputStyle} type="text" id="title" {...register("title")}></input>
                            {errors.title ? <span className="text-sm text-red-500">{errors.title.message}</span> : null}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyle} type="text" id="category" {...register("category")}></input>
                            {errors.category ? <span className="text-sm text-red-500">{errors.category.message}</span> : null}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyle} id="description" {...register("description")}></textarea>
                        {errors.description ? <span className="text-sm text-red-500">{errors.description.message}</span> : null}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="imageUrl">URL da Imagem</label>
                        <input type="text" className={inputStyle} id="imageUrl" placeholder="https://example.com/image.jpg" {...register("image")}></input>
                        {errors.image ? <span className="text-sm text-red-500">{errors.image.message}</span> : null}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Tempo de preparo</label>
                            <input className={inputStyle} type="text" id="prepTime" placeholder="15 minutos" {...register("prepTime")}></input>
                            {errors.prepTime ? <span className="text-sm text-red-500">{errors.prepTime.message}</span> : null}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Tempo de cozimento</label>
                            <input className={inputStyle} type="text" id="cookTime" placeholder="30 minutos" {...register("cookTime")}></input>
                            {errors.cookTime ? <span className="text-sm text-red-500">{errors.cookTime.message}</span> : null}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <input className={inputStyle} type="number" id="servings" defaultValue="1" {...register("servings")}></input>
                            {errors.servings ? <span className="text-sm text-red-500">{errors.servings.message}</span> : null}
                        </div>
                    </div>
                    <div className="flex gap-2 self-end">
                        <button type="button" onClick={onClose} className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors">Cancelar</button>
                        <button type="submit" className="px-4 py-2 font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors">Criar Receita</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}