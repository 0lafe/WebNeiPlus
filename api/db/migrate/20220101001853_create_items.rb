class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_id, null: false
      t.string :metadata, null: false
      t.string :modid, null: false
      t.string :localized_name
      t.string :unlocalized_name
      t.integer :ind
    end
  end
end
