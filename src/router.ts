import { Router } from "express"
import { GetRecipesByIngredientFlexbileController } from "./controllers/recipes/GetRecipesByIngredientFlexibleController";
import { GetRecipesByIngredientRestrictedController } from "./controllers/recipes/GetRecipesByIngredientRestrict";

const routes = Router();

routes.get("/get/:ingredients", new GetRecipesByIngredientFlexbileController().handle)
routes.get("/get/restricted/:ingredients", new GetRecipesByIngredientRestrictedController().handle)


export { routes }