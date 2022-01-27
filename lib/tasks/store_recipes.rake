namespace :recipes do |args|

    desc "seeds database with RecEx data"
    task :store => [ :environment ] do
        DBSeeder.main
    end

    desc "Uploads GUIs and links to DB"
    task :gui => [ :environment ] do
        GUIHandler.handle
    end

    task :test => [ :environment ] do
        DBSeeder.test
    end

end