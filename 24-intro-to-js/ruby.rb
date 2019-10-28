require 'pry'

arr = [1,2,3,4]

def is_it_even(arr_argument)
  if arr_argument.length.even?
    puts "It is even."
  else
    puts "It is odd."
  end
end

arr.each do |num|
  puts "The number is #{num}."
end

binding.pry
