class CreateRecipeTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_types do |t|
      t.string :name, null: false

    end
  end
end
