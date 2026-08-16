import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }:RecipeFormModalProps) {
    const inputStyle="p-2 border border-zinc-200 rounded-md";

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
                <form className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Titulo</label>
                            <input className={inputStyle} type="text" id="title"></input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyle} type="text" id="category"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyle} id="description"></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="imageUrl">URL da Imagem</label>
                        <input type="text" className={inputStyle} id="imageUrl" placeholder="https://example.com/image.jpg"></input>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Tempo de preparo</label>
                            <input className={inputStyle} type="text" id="prepTime" placeholder="15 minutos"></input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Tempo de cozimento</label>
                            <input className={inputStyle} type="text" id="cookTime" placeholder="30 minutos"></input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <input className={inputStyle} type="number" id="servings" defaultValue="1"></input>
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