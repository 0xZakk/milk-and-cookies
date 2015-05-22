require_relative 'wl'

def word_ladder_neighbors(user_input)
  results_array = []

  letters_in_users_word = user_input.split(//)

  FOUR_LETTER_WORDS.each do |current_word|
    word_score = 0

    letters_in_current_word = current_word.split(//)

    letters_in_current_word.each_with_index do |letter, i|

      if letters_in_users_word[i] == letters_in_current_word[i]
        word_score = word_score + 1
      end

    end

    if word_score == 3
      results_array.push(current_word)
    end
  end

  puts results_array.inspect
end
