class DBSeeder

    RECIPE_PATH = ".Data-dumps/GT Mega/recipes.json"
    ITEM_PATH = ".Data-dumps/GT Mega/itemlist.json"

    def self.test
        json = JSON.parse(File.read(RECIPE_PATH))
        binding.pry
    end

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
        json["h"].each { |handler|
            recipe_types << {name: handler["hn"], modID: handler["hi"], unlocalized_name: "#{handler["hi"]}@@#{handler["hn"]}"}
            handler["r"].each_with_index { |recipe, index|
                power = nil
                duration = nil
                if recipe["e"]
                    power = recipe["e"]["EUrate"]
                    duration = recipe["e"]["duration"]
                end

                recipes << { 
                    recipe_type_id: type_index,
                    power: power,
                    duration: duration
                }

                this_input = get_inputs(recipe)
                this_input.each { |input|
                    anItem = input["items"][0]["item"]
                    item_index = create_items(items, item_index, anItem)
                    inputs << {
                        recipe_id: recipe_index,
                        item_id: items["#{anItem["modid"]}.#{anItem["id"]}:#{anItem["metadata"]}"][:ind],
                        quantity: input["items"][0]["count"],
                        relx: input["relx"],
                        rely: input["rely"]
                    }
                }

                this_output = get_outputs(recipe)
                this_output.each { |output|
                    anItem = output["items"][0]["item"]
                    item_index = create_items(items, item_index, anItem)
                    outputs << {
                        recipe_id: recipe_index,
                        item_id: items["#{anItem["modid"]}.#{anItem["id"]}:#{anItem["metadata"]}"][:ind],
                        quantity: output["items"][0]["count"],
                        relx: output["relx"],
                        rely: output["rely"]
                    }
                }

                recipe_index += 1
            }
            type_index += 1
        }
        puts "Recipes loadded into RAM, localizing item names"
        items = localize_names(items)
        write_to_db({
            recipes: recipes,
            items: items,
            inputs: inputs,
            outputs: outputs,
            recipe_types: recipe_types
            })
    end

    def self.get_inputs(recipe)
        if recipe["inputs"]
            return recipe["inputs"]
        else
            return recipe["i"]
        end
    end

    def self.get_outputs(recipe)
        if recipe["outputs"]
            return recipe["outputs"]
        elsif recipe["output"]
            return recipe["output"]
        else 
            return recipe["o"]
        end
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
                ind: item_index,
                unlocalized_name: "#{modid}.#{id}:#{metadata}",
                localized_name: nil
            }
            item_index += 1
        end
        return item_index
    end

    def self.localize_names(items)
        item_json = JSON.parse(File.read(ITEM_PATH))
        item_json["items"].each { |item|
            if items["#{item["item"]["modid"]}.#{item["item"]["id"]}:#{item["item"]["metadata"]}"]
                items["#{item["item"]["modid"]}.#{item["item"]["id"]}:#{item["item"]["metadata"]}"][:localized_name] = item["name"]
            end
        }
        return items
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