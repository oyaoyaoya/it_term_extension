class CreateSamples < ActiveRecord::Migration[5.0]
  def change
    create_table :samples do |t|
      t.references :term, foreign_key: true
      t.text :name
      t.text :url

      t.timestamps
    end
  end
end
