
json.set! @photo.id do 
  json.pictureUrl @photo.picture.attached? ? url_for(@photo.picture) : ""
  json.partial! "api/photos/photo", photo: @photo
end


# json.array! @photo do |photo|
#     json extract! photo, :id, :title, :description, :user_id
#     json.pictureUrl url_for(photo.picture)
# end