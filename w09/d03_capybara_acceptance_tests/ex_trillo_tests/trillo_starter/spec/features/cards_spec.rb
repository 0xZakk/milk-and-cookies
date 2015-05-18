require 'rails_helper' #standard for any spec, have to load the spec helper

def add_card(description)
  fill_in("new-card-text", with: description) # a lot of methods assume you're giving them ID if looking for something on the page
  click_button("Add Card") # for buttons and links, you can use something like an ID or the text inside the ID  
end

describe "Cards", js: true do #have to tell capybara that we're using JS. Otherwise, uses headless browser (which is 10x faster). If using JS, have to use selenium-driver (firefox)
  before(:each) do
    Card.destroy_all
    Card.create!(description: "write some tests")
    Card.create!(description: "wash teh doge")
    Card.create!(description: "refactor codez")
  end


  it "shows all cards when we visit the main page" do
    visit("/")
    Cards.all.each do |card|
      expect(page).to have_content(card.description)
    end
  end

  it "should add a card to the todo column when a new card is added" do 
    visit("/")
    add_card("give bao bao some bamboo")
    todo_list = find("#todo-column") #find is a capybara method like jquery's $ method - can use css selectors
    expect(todo_list).to have_content("give bao bao some bamboo")
  end

  it "should add a card to the database when a new card is added" do
    starting_number_of_cards = Card.count
    visit("/")
    add_card("doesn't really matter")
    expect(Card.count - starting_number_of_cards).to eq(1)
  end






end










