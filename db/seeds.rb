# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(username: "Demo", email: "demo@aa.com", password: "password")
luffy = User.create!(username: "PirateKing", email: "Luffy@strawhats.com", password: "password")
naruto = User.create!(username: "Lord_Seventh", email: "Naruto@konoha.gov", password: "password")
ichigo = User.create!(username: "Getsuga_Tensho", email: "Ichigo@soul.society.org", password: "password")


demo_photo_1 = Photo.create!(user_id: 1, title:"test1", description:"this is a test")
demo_photo_2 = Photo.create!(user_id: 1, title:"test2", description:"this is a test")
demo_photo_3 = Photo.create!(user_id: 1, title:"test3", description:"this is a test")
demo_photo_4 = Photo.create!(user_id: 1, title:"test4", description:"this is a test")
demo_photo_5 = Photo.create!(user_id: 1, title:"test5", description:"this is a test")

luffy_photo_1 = Photo.create!(user_id: 2, title: "The best nakama in the sea 1", description: "Selfie with the crew before setting out on a new adventure")
luffy_photo_2 = Photo.create!(user_id: 2, title: "The best nakama in the sea 2", description: "Selfie with the crew before setting out on a new adventure")
luffy_photo_3 = Photo.create!(user_id: 2, title: "The best nakama in the sea 3", description: "Selfie with the crew before setting out on a new adventure")
luffy_photo_4 = Photo.create!(user_id: 2, title: "The best nakama in the sea 4", description: "Selfie with the crew before setting out on a new adventure")
luffy_photo_5 = Photo.create!(user_id: 2, title: "The best nakama in the sea 5", description: "Selfie with the crew before setting out on a new adventure")

naruto_photo_1 = Photo.create!(user_id: 3, title: "Good old days 1", description: "My favorite picture of good old team 7")
naruto_photo_2 = Photo.create!(user_id: 3, title: "Good old days 2", description: "My favorite picture of good old team 7")
naruto_photo_3 = Photo.create!(user_id: 3, title: "Good old days 3", description: "My favorite picture of good old team 7")
naruto_photo_4 = Photo.create!(user_id: 3, title: "Good old days 4", description: "My favorite picture of good old team 7")
naruto_photo_5 = Photo.create!(user_id: 3, title: "Good old days 5", description: "My favorite picture of good old team 7")

ichigo_photo_1 = Photo.create!(user_id: 4, title: "Soul Society Sunset 1", description: "Captured the sun as it set on the soul society")
ichigo_photo_2 = Photo.create!(user_id: 4, title: "Soul Society Sunset 2", description: "Captured the sun as it set on the soul society")
ichigo_photo_3 = Photo.create!(user_id: 4, title: "Soul Society Sunset 3", description: "Captured the sun as it set on the soul society")
ichigo_photo_4 = Photo.create!(user_id: 4, title: "Soul Society Sunset 4", description: "Captured the sun as it set on the soul society")
ichigo_photo_5 = Photo.create!(user_id: 4, title: "Soul Society Sunset 5", description: "Captured the sun as it set on the soul society")

require 'open-uri'

demo_photo_1.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/demo_photo_1.jpg"), filename: "demo_photo_1.jpg")
demo_photo_2.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/demo_photo_2.jpg"), filename: "demo_photo_2.jpg")
demo_photo_3.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/demo_photo_3.jpg"), filename: "demo_photo_3.jpg")
demo_photo_4.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/demo_photo_4.jpg"), filename: "demo_photo_4.jpg")
demo_photo_5.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/demo_photo_5.png"), filename: "demo_photo_5.png")

luffy_photo_1.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/luffy_photo_1.jpg"), filename: "luffy_photo_1.jpg")
luffy_photo_2.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/luffy_photo_2.jpg"), filename: "luffy_photo_2.jpg")
luffy_photo_3.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/luffy_photo_3.png"), filename: "luffy_photo_3.png")
luffy_photo_4.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/luffy_photo_4.jpg"), filename: "luffy_photo_4.jpg")
luffy_photo_5.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/luffy_photo_5.jpg"), filename: "luffy_photo_5.jpg")

naruto_photo_1.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/naruto_photo_1.png"), filename: "naruto_photo_1.png")
naruto_photo_2.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/naruto_photo_2.jpg"), filename: "naruto_photo_2.jpg")
naruto_photo_3.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/naruto_photo_3.jpg"), filename: "naruto_photo_3.jpg")
naruto_photo_4.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/naruto_photo_4.png"), filename: "naruto_photo_4.png")
naruto_photo_5.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/naruto_photo_5.png"), filename: "naruto_photo_5.png")

ichigo_photo_1.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/ichigo_photo_1.jpg"), filename: "ichigo_photo_1.jpg")
ichigo_photo_2.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/ichigo_photo_2.png"), filename: "ichigo_photo_2.png")
ichigo_photo_3.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/ichigo_photo_3.jpg"), filename: "ichigo_photo_3.jpg")
ichigo_photo_4.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/ichigo_photo_4.jpeg"), filename: "ichigo_photo_4.jpeg")
ichigo_photo_5.picture.attach(io: File.open("/Users/iawesome_sr/appAcademy/fullstack_project/ichigo_photo_5.jpg"), filename: "ichigo_photo_5.jpg")