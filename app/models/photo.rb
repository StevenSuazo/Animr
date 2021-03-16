class Photo < ApplicationRecord

  validates :user_id, :title, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :photo_album_links,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :PhotoAlbumLink

  has_many :albums,
  through: :photo_album_links,
  source: :album
  
  has_many :comments,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Comment,
  dependent: :destroy

  has_many :tags,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Tag,
  dependent: :destroy

  has_one_attached :picture
end
