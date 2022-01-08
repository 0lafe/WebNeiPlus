class DBSeeder

    RECIPE_PATH = ".Data-dumps/GT Mega/recipes.json"

    def self.main
        start = Time.now
        json = JSON.parse(File.read(RECIPE_PATH))
        puts "Recipe json loaded!"
        store_items(json)
        finish = Time.now
        puts "That took a whopping #{finish - start}s!"
    end

    def self.clear_db
        RecipeType.delete_all
        Recipe.delete_all
        Input.delete_all
        Output.delete_all
        Item.delete_all
    end

    def self.store_items(json)
        items = {}
        inputs = []
        outputs = []
        recipes = []
        recipe_types = []
        type_index = 1
        recipe_index = 1
        item_index = 1
        json["handlers"].each { |handler|
            recipe_types << {name: handler["handler"]}
            handler["recipes"].each_with_index { |recipe, index|
                power = nil
                duration = nil
                if recipe["info"]
                    power = recipe["info"]["EUrate"]
                    duration = recipe["info"]["duration"]
                end
                recipes << { 
                    recipe_type_id: type_index,
                    power: power,
                    duration: duration
                 }
                recipe["inputs"].each { |input|
                    anItem = input["items"][0]["item"]
                    item_index = create_items(items, item_index, anItem)
                    inputs << {
                        recipe_id: recipe_index,
                        item_id: items["#{anItem["modid"]}.#{anItem["id"]}:#{anItem["metadata"]}"][:ind],
                        quantity: input["items"][0]["count"]
                    }
                }
                this_output = []
                if recipe["outputs"]
                    this_output = recipe["outputs"]
                else
                    this_output = recipe["output"]
                end
                this_output.each { |output|
                    anItem = output["items"][0]["item"]
                    item_index = create_items(items, item_index, anItem)
                    outputs << {
                        recipe_id: recipe_index,
                        item_id: items["#{anItem["modid"]}.#{anItem["id"]}:#{anItem["metadata"]}"][:ind],
                        quantity: output["items"][0]["count"]
                    }
                }

                recipe_index += 1
            }
            type_index += 1
        }
        puts "Recipes loadded into RAM, now storing in DB"
        write_to_db({
            recipes: recipes,
            items: items,
            inputs: inputs,
            outputs: outputs,
            recipe_types: recipe_types
            })
    end

    def self.create_items(items, item_index, aItem)
        id = aItem["id"]
        modid = aItem["modid"]
        metadata = aItem["metadata"]
        if !items["#{modid}.#{id}:#{metadata}"]
            items["#{modid}.#{id}:#{metadata}"] = {
                item_id: id,
                metadata: metadata,
                modid: modid,
                ind: item_index
            }
            item_index += 1
        end
        return item_index
    end

    def self.write_to_db(data)
        puts "Importing #{data[:items].values.length} Items"
        Item.import data[:items].values
        puts "Importing #{data[:recipe_types].length} Recipe Maps"
        RecipeType.import data[:recipe_types]
        puts "Importing #{data[:recipes].length} Recipes"
        Recipe.import data[:recipes]
        puts "Importing #{data[:inputs].length} Inputs"
        Input.import data[:inputs]
        puts "Importing #{data[:outputs].length} Outputs"
        Output.import data[:outputs]
    end

end