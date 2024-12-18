const cont = document.querySelector(".content");
const auth = document.querySelector(".author");
const genButton = document.querySelector(".gen");

// Generate a random quote from the hardcoded quotes object
generate = () => {
    const quotes = {
        "- Walt Disney": "The Way Get Started Is To Quit Talking And Begin Doing.",
	"- Winston Churchill": "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
	"- Will Rogers": "Don’t Let Yesterday Take Up Too Much Of Today.",
	"- Unknown": "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
	"- Vince Lombardi": "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
	"- Mahatma Gandhi": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
	"- Martin Luther King Jr": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
	"- Albert Einstein": "Strive not to be a success, but rather to be of value.",
	"- Florence Nightingale": "I attribute my success to this: I never gave or took any excuse.",
	"- Michael Jordan": "I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I failed over and over and over again in my life. And that is why I succeed.",
	"- Babe Ruth": "Every strike brings me closer to the next home run.",
	"- John Lennon": "Life is what happens to you while you’re busy making other plans.",
	"- Earl Nightingale": "We become what we think about.",
	"- Mark Twain": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
	"- Charles Swindoll": "Life is 10% what happens to me and 90% of how I react to it.",
	"- Buddha": "The mind is everything. What you think, you become.",
	"- Chinese Proverb": "The best time to plant a tree was 20 years ago. The second best time is now.",
	"- Woody Allen": "Eighty percent of success is showing up.",
	"- Steve Jobs": "Your time is limited, so don’t waste it living someone else’s life.",
	"- Vince Lombardi": "Winning isn’t everything, but wanting to win is.",
	"- Stephen Covey": "I am not a product of my circumstances. I am a product of my decisions.",
	"- Christopher Columbus": "You can never cross the ocean until you have the courage to lose sight of the shore.",
	"- Maya Angelou": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
	"- Jim Rohn": "Either you run the day, or the day runs you.",
	"- Henry Ford": "Whether you think you can or you think you can’t, you’re right.",
	"- Frank Sinatra": "The best revenge is massive success.",
	"- Zig Ziglar": "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
	"- Aristotle": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
	"- Jesus": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
	"- Ralph Waldo Emerson": "The only person you are destined to become is the person you decide to be.",
	"- Henry David Thoreau": "Go confidently in the direction of your dreams. Live the life you have imagined.",
	"- Erma Bombeck": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
	"- Booker T. Washington": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
	"- Oprah Winfrey": "You become what you believe.",
	"- John Wooden": "Things work out best for those who make the best of how things work out.",
	"- Warren Buffett": "Someone’s sitting in the shade today because someone planted a tree a long time ago.",
	"- Tony Robbins": "Setting goals is the first step in turning the invisible into the visible.",
	"- Peter Drucker": "The best way to predict the future is to create it.",
	"- Pablo Picasso": "Everything you can imagine is real.",
	"- Nelson Mandela": "It always seems impossible until it’s done.",
	"- C.S. Lewis": "You are never too old to set another goal or to dream a new dream.",
	"- Eleanor Roosevelt": "The future belongs to those who believe in the beauty of their dreams.",
	"- Les Brown": "Shoot for the moon. Even if you miss, you’ll land among the stars.",
	"- Muhammad Ali": "Don’t count the days, make the days count.",
	"- Helen Keller": "Keep your face to the sunshine and you cannot see a shadow.",
    };

    // Grab all authors and randomly pick one
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];

    // Get the quote for the selected author
    const quote = quotes[author];

    // Display the quote and author in the container
    cont.textContent = `"${quote}"`;
    auth.textContent = author;
};

// Fetch an initial quote on page load
generate();

// Attach event listener to the Generate Quote button
genButton.addEventListener("click", generate);
