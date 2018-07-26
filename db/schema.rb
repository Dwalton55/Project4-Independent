# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_26_134910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bundles", force: :cascade do |t|
    t.bigint "discipline_id"
    t.bigint "package_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discipline_id"], name: "index_bundles_on_discipline_id"
    t.index ["package_id"], name: "index_bundles_on_package_id"
  end

  create_table "disciplines", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "packages", force: :cascade do |t|
    t.integer "price"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text "body"
    t.bigint "user_id"
    t.bigint "discipline_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discipline_id"], name: "index_posts_on_discipline_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.boolean "isCoach"
    t.bigint "package_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["package_id"], name: "index_users_on_package_id"
  end

  add_foreign_key "bundles", "disciplines"
  add_foreign_key "bundles", "packages"
  add_foreign_key "posts", "disciplines"
  add_foreign_key "posts", "users"
  add_foreign_key "users", "packages"
end
