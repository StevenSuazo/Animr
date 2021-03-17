require 'open-uri'

User.destroy_all
Photo.destroy_all

demo = User.create!(username: "Demo", email: "demo@appAcademy.com", password: "password")
luffy = User.create!(username: "PirateKing", email: "Luffy@strawhats.com", password: "password")
naruto = User.create!(username: "Lord_Seventh", email: "Naruto@konoha.gov", password: "password")
ichigo = User.create!(username: "Getsuga_Tensho", email: "Ichigo@soul.society.org", password: "password")


demo_photo_1 = Photo.create!(user_id: 1, title:"Fullmetal Family", description:"Family Photo!")
demo_photo_2 = Photo.create!(user_id: 1, title:"Moshi Moshi", description:"Important call")
demo_photo_3 = Photo.create!(user_id: 1, title:"Mask Off", description:"Im gonna need a new mask")
demo_photo_4 = Photo.create!(user_id: 1, title:"Class 1A", description:"Peace!!")
demo_photo_5 = Photo.create!(user_id: 1, title:"Its a Trap", description:"The bodies were fake -_-")

luffy_photo_1 = Photo.create!(user_id: 2, title: "The best nakama in the sea", description: "Selfie with the crew before setting out on a new adventure")
luffy_photo_2 = Photo.create!(user_id: 2, title: "Saiyan Family", description: "All of earth's saiyan together in one place")
luffy_photo_3 = Photo.create!(user_id: 2, title: "Samurai X", description: "The name is Rurouni Kenshin")
luffy_photo_4 = Photo.create!(user_id: 2, title: "Strongest Butler", description: "Sebastian is always so secretive")
luffy_photo_5 = Photo.create!(user_id: 2, title: "Flamy Ink", description: "Ogun Montgomery going ALL OUT!!")

naruto_photo_1 = Photo.create!(user_id: 3, title: "Good old days", description: "My favorite picture of good old team 7")
naruto_photo_2 = Photo.create!(user_id: 3, title: "Delicious!", description: "Rengoku enjoying lunch")
naruto_photo_3 = Photo.create!(user_id: 3, title: "Inuyasha & Kagome", description: "Get you someone who looks at you like this!")
naruto_photo_4 = Photo.create!(user_id: 3, title: "The Moves", description: "Itadori and his signature dance move")
naruto_photo_5 = Photo.create!(user_id: 3, title: "Photobomb", description: "Kid getting photobombed")

ichigo_photo_1 = Photo.create!(user_id: 4, title: "Soul Society Sunset 1", description: "Captured the sun as it set on the soul society")
ichigo_photo_2 = Photo.create!(user_id: 4, title: "Goals", description: "The AOT gang finaly made it to the beach")
ichigo_photo_3 = Photo.create!(user_id: 4, title: "Girl Power", description: "Girl's get it done!")
ichigo_photo_4 = Photo.create!(user_id: 4, title: "First Big Game", description: "Hinata Shōyō, looking as nervous as ever")
ichigo_photo_5 = Photo.create!(user_id: 4, title: "Checkmate", description: "As usual, Lelouch with the win")


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