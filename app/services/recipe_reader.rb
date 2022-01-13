class RecipeReader

    #dictates what search type is being preformed
    def self.recipe_show(params)
        if params[:searchType] == "map"
            return get_map(params[:id])
        end
        if params[:searchType] == "item"
            return get_item(params[:id])
        end
    end

    private 

    #returns search for a recipe map
    def self.get_map(recipe_map_name)
        RecipeType.find_by(name: recipe_map_name).recipes.limit(10)
    end

    #returns recipes involving an item as an input
    def self.get_item(item_id)
        inputs = Input.where(item: Item.find(item_id))
        return Recipe.where(inputs: inputs).limit(10)
    end

end