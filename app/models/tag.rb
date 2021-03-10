class Tag < ApplicationRecord
    validates :photo_id, :name, presence: true

    belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo
end