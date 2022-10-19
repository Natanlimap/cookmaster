import { Request, Response } from "express"
import { Recipe } from "../../entities/recipes";
import { shuffle } from "../../helper";

export class GetRandomRecipes{
     async handle(request: Request, response: Response){
        
         let {ingredients} = request.params;
         let recipes = new Recipe();
         console.log("teste")
         let allRecipes = recipes.getAllRecipes();
         
         return response.json(shuffle(allRecipes).slice(0, 3).map(m=>m.title));

        
     }
       
      
     
};