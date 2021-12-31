class RecipeReader

    def self.Read
        file = File.read('Recipes.json')
        data_hash = JSON.parse(file)
        output = []
        data_hash["sources"][0]["machines"].each { |r| output << r["n"]}
        return output
    end

end