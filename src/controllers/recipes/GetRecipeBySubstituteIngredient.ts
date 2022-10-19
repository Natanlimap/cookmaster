

import { Request, Response } from "express"
import { Recipe } from "../../entities/recipes";
import { shuffle } from "../../helper";

export class GetRecipeByIngredientSubstitution{
     async handle(request: Request, response: Response){
        let {recipeName, substitute} = request.params;
        let recipes = new Recipe();
        let allRecipes = recipes.getAllRecipes();
        let possibileRecipes = []
        allRecipes.forEach(recipe =>{
            

            if(recipe.title.toLowerCase() == recipeName.toLowerCase()){
                if(recipe.ingredients.includes(substitute)){
                    possibileRecipes.push(recipe);
                }
            }
        })

        return response.json(shuffle(possibileRecipes).slice(0, 1));

        
     }
       
      
     
};