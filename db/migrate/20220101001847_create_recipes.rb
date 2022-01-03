class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.belongs_to :recipe_type
      t.integer :power
      t.integer :amps
      t.integer :duration
    end
  end
end
