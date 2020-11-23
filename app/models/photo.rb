class Photo < ApplicationRecord

  validates :user_id, :title, presence: true

  belongs_to :user
  has_one_attached :picture
end
