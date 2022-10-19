import { Router } from "express"
import { GetRandomRecipes } from "./controllers/recipes/GetRandomRecipes";
import { GetRecipesByIngredientFlexbileController } from "./controllers/recipes/GetRecipesByIngredientFlexibleController";
import { GetRecipesByIngredientRestrictedController } from "./controllers/recipes/GetRecipesByIngredientRestrict";

const routes = Router();

routes.get("/get/:ingredients", new GetRecipesByIngredientFlexbileController().handle)
routes.get("/get/restricted/:ingredients", new GetRecipesByIngredientRestrictedController().handle)
routes.get("/random", new GetRandomRecipes().handle)


export { routes }