class RecipeReader

    def self.get_one(recipe_map)
        RecipeType.find_by(name: recipe_map).recipes.limit(10)
    end

    def self.store
        file = File.read('.Data-dumps/GT Mega/recipes.json')
        json = JSON.parse(file)
        items_list = store_items(json)
        json["handlers"].each { |handler|
            puts "working on #{handler["handler"]} it has #{handler["recipes"].length} recipes"
            length = handler["recipes"].length
            recipe_map = RecipeType.find_or_create_by(name: handler["handler"])
            handler["recipes"].each_with_index { |recipe, index|
                handle_recipe(recipe, recipe_map, items_list)
                puts "#{index}/#{length}"
            }
        }
    end

    def self.handle_recipe(recipe, recipe_map, item_list)
        aRecipe = Recipe.create(recipe_type: recipe_map)
        recipe["inputs"].each { |input|
            handle_input(input["items"][0], aRecipe, item_list)
        }
        return aRecipe
    end

    def self.handle_input(input, recipe, item_list)
        anItem = input["item"]
        id = anItem["id"]
        metadata = anItem["metadata"]
        modid = anItem["modid"]
        return Input.create(
            item_id: item_list["#{modid}.#{id}:#{metadata}"][:index], 
            quantity: input["count"], 
            recipe: recipe)
    end

    def self.handle_output(output, recipe)
        return Output.create(
            item: save_item(output["item"]), 
            quantity: output["count"], 
            recipe: recipe)
    end

    def self.save_item(item)
        return Item.create(
            item_id: item["id"], 
            metadata: item["metadata"],
            modid: item["modid"])
    end

end