class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.integer :power
      t.integer :amps
      t.integer :duration
      t.timestamps
    end
  end
end
