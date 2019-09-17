require 'pry'
require 'rest-client'
require 'json'

def welcome_and_get_user_input
  puts "Welcome to the book application. 📕🤓📕"
  puts "Which book would you like to search for today?"
  gets.chomp
end



def get_nice_response_from_google_books(book_search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q=" + book_search_term
  ugly_response = RestClient.get(url)
  nice_hashed_response = JSON.parse(ugly_response.body)
end



def print_titles(array_of_books)
  # [{}, {}, {}] => ["", "", ""]

  book_titles = array_of_books.map do |book|
    book["volumeInfo"]["title"]
  end

  book_titles.each_with_index do |title, index|
    puts "#{index + 1}) #{title}"
  end

  puts "Which book do you want to see more info about?"
  gets.chomp
end





def find_book_and_display_information(book_array, title_of_book)

  found_book = book_array.find do |book|
    book["volumeInfo"]["title"] == title_of_book
  end

  if found_book.nil?
    puts "No book with that title was found."
    # print_titles(book_array)
  else

    puts "Title:"
    puts found_book["volumeInfo"]["title"]

    puts "Author:"
    puts found_book["volumeInfo"]["authors"]

    puts "Description:"
    puts found_book["volumeInfo"]["description"]

  end

end

user_input = welcome_and_get_user_input()
nice_response_hash = get_nice_response_from_google_books(user_input)
user_input_title = print_titles(nice_response_hash["items"])
find_book_and_display_information(nice_response_hash["items"], user_input_title)

# MAP (RETURN SAME LENGTH)
# [{}, {}, {}] => ["", "", ""]

# SELECT (RETURN SAME DATA TYPE IN ARRAY)
# [{}, {}] => [{}]

# FIND (RETURN ONE DATA TYPE IN THAT ARRAY)
# [{}, {}] => {}


# binding.pry
0
