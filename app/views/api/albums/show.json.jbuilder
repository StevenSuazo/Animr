# album ||= @album

json.partial! '/api/albums/album', album: @album
# json.photos album.photos, partial: '/api/photos/show', as: :photo