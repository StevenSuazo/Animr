# @photos.each do |photo|
#   json.photos do
#     json.set! photo.id do 
#       json.pictureUrl photo.picture.attached? ? url_for(photo.picture) : ""
#       json.partial! "api/photos/photo", photo: photo
#     end
#   end
# end

@photos.each do |photo|
  json.set! photo.id do
    json.pictureUrl photo.picture.attached? ? url_for(photo.picture) : ""
    json.partial! '/api/photos/photo', photo: photo
  end
end