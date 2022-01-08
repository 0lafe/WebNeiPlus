namespace :recipes do |args|

    desc "seeds database with RecEx data"
    task :store => [ :environment ] do
        DBSeeder.main
    end

end