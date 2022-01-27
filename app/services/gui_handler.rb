class GUIHandler 

    GUI_PATH = ".Data-dumps/GT Mega/guis/*"
    SEPARATOR = "@@"

    def self.handle
        Dir[GUI_PATH].each { |path| 
            unlocalized_name = path[path.rindex("/") + 1..path.rindex(".") - 1]
            aHandler = RecipeType.find_by(unlocalized_name: unlocalized_name)
            aHandler.gui_url = path
            aHandler.save
            # modID = unlocalized_name[0..unlocalized_name.index(SEPARATOR) - 1]
            # name = unlocalized_name[unlocalized_name.index(SEPARATOR) + SEPARATOR.length..unlocalized_name.length]
        }
        puts "GUIs linked to handlers"
    end

end