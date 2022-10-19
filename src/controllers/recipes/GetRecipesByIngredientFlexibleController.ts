import { Request, Response } from "express"
import { Recipe } from "../../entities/recipes";

export class GetRecipesByIngredientFlexbileController{
     async handle(request: Request, response: Response){
         let {ingredients} = request.params;
         let recipes = new Recipe();
         let allRecipes = recipes.getAllRecipes();
         let possibileRecipes = []
         allRecipes.forEach(recipe => {
            console.log(recipe)
            if(recipe.ingredients.some(ri => ingredients.includes(ri))){
                possibileRecipes.push(recipe);
            }
         })
         return response.json(possibileRecipes.map(m=>m.title));

        
     }
     
};