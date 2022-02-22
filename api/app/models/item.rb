class Item < ApplicationRecord

    validates :item_id, presence: true
    validates :metadata, presence: true
    validates :modid, presence: true

    has_many :inputs
    has_many :outputs

    def full_name
        return "#{self.modid}.#{self.item_id}:#{self.metadata}"
    end

    def handler_ids
        handlers = {}
        current = 0
        self.inputs.each { |input|
            if input.recipe.id != current
                current = input.recipe.id
                if handlers[input.recipe.recipe_type.id]
                    handlers[input.recipe.recipe_type.id] += 1
                else
                    handlers[input.recipe.recipe_type.id] = 1
                end
            end
        }
        handlers
    end

end