# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Discipline.destroy_all
Package.destroy_all

fitness = Package.create(name: 'cardio', price: 50)
boxer = Package.create(name: 'stand up', price: 80)
fighter = Package.create(name: 'full contact', price: 100)
kids = Package.create(name: '', price: 75)


y_boxing = Discipline.create(name:'Youth Boxing' , description: 'Youth and kids learn boxing in order to gain discipline and fitness. ')
y_bjj = Discipline.create(name:'Youth Brazillian Jiujitsu' , description: ' Grappling soft style that excells at self defense and builds confidence. competition training available')
boxing = Discipline.create(name:'Boxing' , description: 'learn boxing in order to gain discipline and fitness. Competetion training available ')
bjj = Discipline.create(name:'Brazillian Jiujitsu' , description: ' Grappling soft style that excells at self defense and builds confidence. competition training available')
cardio = Discipline.create(name: 'cardio kickboxing', description: 'a fun challenging fitness program to help you meet your goals')
weight = Discipline.create(name: 'Weight Lifting',  description: 'A weight lifting class built to educate and build a foundation for health and lifestyle')
mma = Discipline.create(name: 'Mixed Martial Arts', description:' a class that teaches competitive mma. Great for self defense but more focused on the competitive aspects of combat')


# fitness.users.create(name: 'Chris ruiz', email:'chrisruiz@independentmma.com', password: 'nunya', isCoach: true)

pack_array = [fitness, boxer , fighter ,kids]

pack_array.each do |item|
    3.times do |i|
        item.users.create(name:"Chris ruiz #{item.name}", email:"chris.ruiz#{i}@independentmma.com", password: 'nunya', isCoach: true)
    end
end















#======================================= 
# Join table
#======================================= 
fitnessbundle = [ cardio, weight]
boxerbundle = [ cardio, weight, boxing]
fighterbundle = [cardio, weight, boxing, bjj, mma]
kidsbundle = [y_bjj, y_boxing]



# << is essentiallly pushing  the array to fitness. programs and auto generating the join tables
# the join tables are create and
fitness.programs << fitnessbundle
boxer.programs << boxerbundle
fighter.programs << fighterbundle
kids.programs << kidsbundle
