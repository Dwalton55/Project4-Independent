class CreateBundles < ActiveRecord::Migration[5.2]
  def change
    create_table :bundles do |t|
      t.references :discipline, foreign_key: true
      t.references :package, foreign_key: true

      t.timestamps
    end
  end
end
