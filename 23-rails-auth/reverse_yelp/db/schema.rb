# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_22_153828) do

  create_table "customer_reviews", force: :cascade do |t|
    t.string "review"
    t.integer "rating"
    t.integer "restaurant_id", null: false
    t.integer "customer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_customer_reviews_on_customer_id"
    t.index ["restaurant_id"], name: "index_customer_reviews_on_restaurant_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "avatar"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url", default: "https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_1280.jpg"
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "customer_reviews", "customers"
  add_foreign_key "customer_reviews", "restaurants"
end
