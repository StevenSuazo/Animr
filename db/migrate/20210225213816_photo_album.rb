class PhotoAlbum < ActiveRecord::Migration[5.2]
  def change
      create_table :photo_album do |t|
      t.integer :photo_id, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
    add_index :photo_album, [:album_id, :photo_id], unique: true
  end
end
