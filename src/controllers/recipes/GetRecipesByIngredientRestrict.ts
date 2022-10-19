import { Request, Response } from "express"
import { Recipe } from "../../entities/recipes";

export class GetRecipesByIngredientRestrictedController{
     async handle(request: Request, response: Response){
         let {ingredients} = request.params;
         let listIngredients = ingredients.split("&").map(ingredient => ingredient.toLowerCase())
         let recipes = new Recipe();
         let allRecipes = recipes.getAllRecipes();
         let possibileRecipes = []
         allRecipes.forEach(recipe => {

            if(listIngredients.every(ri => recipe.ingredients.includes(ri))){
                possibileRecipes.push(recipe);
            }
         })
         return response.json(possibileRecipes);

        
     }
     
};