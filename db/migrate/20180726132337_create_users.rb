class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.boolean :isCoach
      t.references :package, foreign_key: true

      t.timestamps
    end
  end
end
