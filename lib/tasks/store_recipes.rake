namespace :recipes do |args|

    desc "seeds database with RecEx data"
    task :store => [ :environment ] do
        RecipeType.delete_all
        Recipe.delete_all
        Input.delete_all
        Output.delete_all
        Item.delete_all

        RecipeReader.write_to_db
    end

end