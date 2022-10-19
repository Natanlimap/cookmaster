import { Router } from "express"
import { GetRandomRecipes } from "./controllers/recipes/GetRandomRecipes";
import { GetRecipeByIngredientSubstitution } from "./controllers/recipes/GetRecipeBySubstituteIngredient";
import { GetRecipesByIngredientFlexbileController } from "./controllers/recipes/GetRecipesByIngredientFlexibleController";
import { GetRecipesByIngredientRestrictedController } from "./controllers/recipes/GetRecipesByIngredientRestrict";

const routes = Router();

routes.get("/flexible/:ingredients", new GetRecipesByIngredientFlexbileController().handle)
routes.get("/restricted/:ingredients", new GetRecipesByIngredientRestrictedController().handle)
routes.get("/random", new GetRandomRecipes().handle)
routes.get("/substitute/:recipeName/:substitute", new GetRecipeByIngredientSubstitution().handle)


export { routes }