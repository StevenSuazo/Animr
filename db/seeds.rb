# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  luffy = User.create!(username: "PirateKing", email: "Luffy@strawhats.com", password: "password")
  naruto = User.create!(username: "Lord_Seventh", email: "Naruto@konoha.gov", password: "password")
  ichigo = User.create!(username: "Getsuga_Tensho", email: "Ichigo@soul.society.org", password: "password")

  luffy_photo_1 = Photo.create!(user_id: luffy.id, title: "The best nakama in the sea", description: "Selfie with the crew before setting out on a new adventure")
  naruto_photo_1 = Photo.create!(user_id: naruto.id, title: "Good old days", description: "My favorite picture of good old team 7")
  ichigo_photo_1 = Photo.create!(user_id: ichigo.id, title: "Soul Society Sunset", description: "Captured the sun as it set on the soul society")