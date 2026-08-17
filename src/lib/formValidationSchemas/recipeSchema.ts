import * as yup from "yup";

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    category: yup.string().required("A categoria é obrigatória"),
    description: yup.string().required("A descrição é obrigatória"),
    image: yup.string().required("A URL da imagem é obrigatória"),
    prepTime: yup.string().required("O tempo de preparo é obrigatório"),
    cookTime: yup.string().required("O tempo de cozimento é obrigatório"),
    servings: yup.number().typeError("As porções devem ser um número").positive("As porções devem ser um número positivo").integer("As porções devem ser um número inteiro").min(1, "As porções devem ser pelo menos 1").required("As porções são obrigatórias")
});

export type RecipeFormData = yup.InferType<typeof recipeSchema>;
