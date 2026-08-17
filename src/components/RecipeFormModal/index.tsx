import { useFieldArray, useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  RecipeFormData,
  recipeSchema,
} from "@/lib/formValidationSchemas/recipeSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_VALUES: RecipeFormData = {
    title: "",
    category: "",
    description: "",
    image: "",
    prepTime: "",
    cookTime: "",
    servings: 1,
    ingredients: [
      {
        value: ""
      }
    ],
    instructions: [
      {
        value: ""
      }
    ]
  };

export default function RecipeFormModal({
  isOpen,
  onClose,
}: RecipeFormModalProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES
  });

  const{
    fields: ingredientFields, 
    append: appendIngredient, 
    remove: removeIngredient
  } = useFieldArray({
    control,
    name: "ingredients"
  })

  const{
    fields: instructionFields, 
    append: appendInstruction, 
    remove: removeInstruction
  } = useFieldArray({
    control,
    name: "instructions"
  })

  const onSubmit = (data: RecipeFormData) => {
    const RecipeData = {
      ...data,
      ingredients: data.ingredients.map((ingredient) => ingredient.value),
        instructions: data.instructions.map((instruction) => instruction.value),
    }
    console.log(RecipeData);
    reset();
    onClose();
  };

  const inputStyle = "p-2 border border-zinc-200 rounded-md grow w-full";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white min-w-2xl max-h-[90dvh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Nova Receita</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Titulo</label>
              <input
                className={inputStyle}
                type="text"
                id="title"
                {...register("title")}
              ></input>
              {errors.title ? (
                <span className="text-sm text-red-500">
                  {errors.title.message}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="category">Categoria</label>
              <input
                className={inputStyle}
                type="text"
                id="category"
                {...register("category")}
              ></input>
              {errors.category ? (
                <span className="text-sm text-red-500">
                  {errors.category.message}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Descrição</label>
            <textarea
              className={inputStyle}
              id="description"
              {...register("description")}
            ></textarea>
            {errors.description ? (
              <span className="text-sm text-red-500">
                {errors.description.message}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="imageUrl">URL da Imagem</label>
            <input
              type="text"
              className={inputStyle}
              id="imageUrl"
              placeholder="https://example.com/image.jpg"
              {...register("image")}
            ></input>
            {errors.image ? (
              <span className="text-sm text-red-500">
                {errors.image.message}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="prepTime">Tempo de preparo</label>
              <input
                className={inputStyle}
                type="text"
                id="prepTime"
                placeholder="15 minutos"
                {...register("prepTime")}
              ></input>
              {errors.prepTime ? (
                <span className="text-sm text-red-500">
                  {errors.prepTime.message}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cookTime">Tempo de cozimento</label>
              <input
                className={inputStyle}
                type="text"
                id="cookTime"
                placeholder="30 minutos"
                {...register("cookTime")}
              ></input>
              {errors.cookTime ? (
                <span className="text-sm text-red-500">
                  {errors.cookTime.message}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="servings">Porções</label>
              <input
                className={inputStyle}
                type="number"
                id="servings"
                defaultValue="1"
                {...register("servings")}
              ></input>
              {errors.servings ? (
                <span className="text-sm text-red-500">
                  {errors.servings.message}
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="flex flex-col gap-1">
            {ingredientFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 w-full">
                <div className="grow">
                    <input
                    placeholder="Digite o ingrediente..."
                      type="text"
                      id="ingredients"
                      className={inputStyle}
                        {...register(`ingredients.${index}.value`)}
                    ></input>
                    {errors.ingredients?.[index]?.value && <span className="text-sm text-red-500">{errors.ingredients?.[index]?.value.message}</span>}
                </div>
                { ingredientFields.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Remover
                </button>
              ) }
              </div>
            ))}
              <button
                type="button"
                onClick={() => appendIngredient({ value: "" })}
                className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors h-fit w-fit"
              >
                Adicionar Ingrediente
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="instructions">Intruções</label>
            <div className="flex flex-col gap-1">
              {instructionFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 w-full">
                <div className="grow">
                    <textarea id="instructions" placeholder="Digite a instrução..." className={inputStyle} {...register(`instructions.${index}.value`)}></textarea>
                    {errors.instructions?.[index]?.value && <span className="text-sm text-red-500">{errors.instructions?.[index]?.value.message}</span>}
                </div>
                { instructionFields.length > 1 && (
                <button
                  type="button"
                    onClick={() => removeInstruction(index)}
                  className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors h-fit"
                >
                  Remover
                </button>
                ) }
              </div>
              ))}
              <button
                type="button"
                onClick={() => appendInstruction({ value: "" })}
                className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors h-fit w-fit"
              >
                Adicionar Instrução
              </button>
            </div>
          </div>

          <div className="flex gap-2 self-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-medium bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Criar Receita
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
