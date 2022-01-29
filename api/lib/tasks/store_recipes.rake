namespace :recipes do |args|

    desc "seeds database with RecEx data"
    task :store => [ :environment ] do
        DBSeeder.main
    end

    task :test => [ :environment ] do
        DBSeeder.test
    end

end