namespace :recipes do |args|

    desc "seeds database with RecEx data"
    task :store => [ :environment ] do
        RecipeReader.write_to_db
    end

end