class Photo < ApplicationRecord

  validates :user_id, :title, presence: true

  belongs_to :user

  has_many :photo_album_links,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :PhotoAlbumLink

  has_many :albums,
  through: :photo_album_links,
  source: :album
  
  has_one_attached :picture
end
