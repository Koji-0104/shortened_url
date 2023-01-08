class CreateNews < ActiveRecord::Migration[6.1]
  def change
    create_table :news do |t|
      t.string :title
      t.text :content
      t.datetime :start_day
      t.datetime :end_day

      t.timestamps
    end
  end
end
