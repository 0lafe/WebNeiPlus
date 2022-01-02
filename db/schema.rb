# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_02_051622) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inputs", force: :cascade do |t|
    t.integer "quantity", null: false
    t.bigint "recipe_id"
    t.bigint "item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_inputs_on_item_id"
    t.index ["recipe_id"], name: "index_inputs_on_recipe_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "unlocalized_name", null: false
    t.string "localized_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "outputs", force: :cascade do |t|
    t.integer "quantity", null: false
    t.bigint "recipe_id"
    t.bigint "item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_outputs_on_item_id"
    t.index ["recipe_id"], name: "index_outputs_on_recipe_id"
  end

  create_table "recipe_types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.integer "power"
    t.integer "amps"
    t.integer "duration"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
