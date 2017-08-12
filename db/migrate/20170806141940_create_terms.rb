class CreateTerms < ActiveRecord::Migration[5.0]
  def change
    create_table :terms do |t|
      t.string :name
      t.text   :description
      t.text   :url
      t.timestamps
    end
  end
end
