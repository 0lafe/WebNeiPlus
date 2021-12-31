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

    def self.write_to_db
        
    end

end