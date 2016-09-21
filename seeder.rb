require "./Model/model"

user = User.new name: "enaho murphy",
                username: "enahomurphy",
                email:"enahomurphy@gmail.com",
                password:"federals"

user.save
m = User.create(
    name: "enaho murphy",
    username: "enahomurphy",
    email:"enahomurphy@gmail.com",
    password:"federals"
  )
puts m[:name]
