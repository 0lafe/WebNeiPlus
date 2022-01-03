
class RecipeReader

    BLACKLIST = ["Disassembler", "Plasma Arc Furnace", "Arc Furnace"]

    def self.test
        file = File.read('Recipes.json')
        parsed = JSON.parse(file)
        binding.pry
    end

    def self.get_types
        reply = []
        RecipeType.all.each { |aType|
            reply << [aType.name, aType.recipes.count]
        }
        return reply
    end

    def self.get_one(recipe_map)
        RecipeType.find_by(name: recipe_map).recipes.limit(10)
    end

    #reads Recipes.json and stores data in the data base
    def self.write_to_db
        parsed = JSON.parse(File.read('Recipes.json'))
        parsed["sources"][0]["machines"].each { |type|
            if !BLACKLIST.include?(type["n"])
                puts "Working on #{type["n"]} right now!"
                aType = RecipeType.create(name: type["n"])
                handleRecipe(type, aType)
            end
        }
    end

    def self.handleRecipe(type, aType)
        type["recs"].each { |recipe|
            aRecipe = Recipe.create(power: recipe["eut"], duration: recipe["dur"], recipe_type: aType)
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