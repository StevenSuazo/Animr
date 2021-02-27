class Album < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :photo_album_links,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :PhotoAlbumLink

    has_many :photos,
    through: :photo_album_links,
    source: :photo
end
