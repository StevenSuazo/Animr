json.array! @photos do |photo|
    json extract! photo, :id, :title, :description, :user_id
    json.pictureUrl url_for(photo.picture)
end