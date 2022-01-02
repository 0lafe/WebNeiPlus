class RecipeReader

    def self.test
        file = File.read('Recipes.json')
        parsed = JSON.parse(file)
        binding.pry
    end

    def self.Read
        file = File.read('Recipes.json')
        data_hash = JSON.parse(file)
        output = []
        data_hash["sources"][0]["machines"].each { |r| output << r["n"]}
        return output
    end

    def self.getRecipeTypes
        file = File.read('Recipes.json')
        data_hash = JSON.parse(file)
        output = []
        data_hash["sources"].each { |r| output << r["n"]}
        return output
    end

    #reads Recipes.json and stores data in the data base
    def self.write_to_db
        parsed = JSON.parse(File.read('Recipes.json'))
        parsed["sources"][0]["machines"].each { |type| 
            RecipeType.create(name: type["n"])
            handleRecipe(type)
        }
    end

    def self.handleRecipe(type)
        type["recs"].each { |recipe|
            aRecipe = Recipe.create(power: recipe["eut"], duration: recipe["dur"])
            recipe["iI"].each { |inputItem|
                aItem = Item.find_or_create_by(unlocalized_name: inputItem["uN"], localized_name: inputItem["lN"])
                aInput = Input.create(item: aItem, recipe: aRecipe, quantity: inputItem["a"])
                aRecipe.inputs << aInput
            }
            recipe["iO"].each { |outputItem|
                aItem = Item.find_or_create_by(unlocalized_name: outputItem["uN"], localized_name: outputItem["lN"])
                aOutput = Output.create(item: aItem, recipe: aRecipe, quantity: outputItem["a"])
                aRecipe.outputs << aOutput
            }
        }
    end

end