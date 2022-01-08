class RecipeReader

    def self.get_one(recipe_map)
        RecipeType.find_by(name: recipe_map).recipes.limit(10)
    end

end