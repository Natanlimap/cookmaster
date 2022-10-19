import { Request, Response } from "express"
import { Recipe } from "../../entities/recipes";
import { shuffle } from "../../helper";

export class GetRandomRecipes{
     async handle(request: Request, response: Response){
        let recipes = new Recipe();
        let allRecipes = recipes.getAllRecipes();
        return response.json(shuffle(allRecipes).slice(0, 3));

        
     }
       
      
     
};