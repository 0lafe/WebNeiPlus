class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :unlocalized_name, null: false
      t.string :localized_name, null: false

      t.timestamps
    end
  end
end
