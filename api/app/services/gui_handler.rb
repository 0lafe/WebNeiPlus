require 'fastimage'

class GUIHandler 

    GUI_PATH = ".Data-dumps/GT Mega/guis/*"
    SEPARATOR = "@@"
    NEW_WIDTH = 1200

    def self.handle
        Dir[GUI_PATH].each { |path| 
            unlocalized_name = path[path.rindex("/") + 1..path.rindex(".") - 1]
            aHandler = RecipeType.find_by(unlocalized_name: unlocalized_name)
            aHandler.gui_url = "#{unlocalized_name}.png"
            aHandler.scale = ((NEW_WIDTH / FastImage.size(path)[0].to_f) * 100).to_i
            puts FastImage.size(path)[0]
            aHandler.save
            # modID = unlocalized_name[0..unlocalized_name.index(SEPARATOR) - 1]
            # name = unlocalized_name[unlocalized_name.index(SEPARATOR) + SEPARATOR.length..unlocalized_name.length]
        }
        puts "GUIs linked to handlers"
    end

end