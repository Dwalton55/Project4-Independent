class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.textarea :body
      t.references :user, foreign_key: true
      t.references :discipline, foreign_key: true

      t.timestamps
    end
  end
end