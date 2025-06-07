
    const localQuotes = [
      { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
      { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
      { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
      { text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
      { text: "Nothing in the world can take the place of persistence.", author: "Calvin Coolidge" },
      { text: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.", author: "Mister Rogers" },
      { text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.", author: "John Wooden" },
      { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
      { text: "Success is getting what you want; happiness is wanting what you get.", author: "W. P. Kinsella" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
      { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
      { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
      { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
      { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
      { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
      { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { text: "Quality is not an act; it is a habit.", author: "Aristotle" },
      { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
      { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
      { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
      { text: "Dream bigger. Do bigger.", author: "Unknown" },
      { text: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe" },
      { text: "Wake up with determination. Go to bed with satisfaction.", author: "George Lorimer" },
      { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
      { text: "Little things make big days.", author: "Isabel Marant" },
      { text: "It's going to be hard, but hard does not mean impossible.", author: "Art Williams" },
      { text: "Don't wait for opportunity. Create it.", author: "George Bernard Shaw" },
      { text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
      { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
      { text: "Dream it. Wish it. Do it.", author: "Unknown" },
      { text: "Great things never come from comfort zones.", author: "Unknown" },
      { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
      { text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
      { text: "The harder you work, the luckier you get.", author: "Gary Player" },
      { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
      { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
      { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
      { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
      { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
      { text: "Don't be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
      { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
      { text: "You know you are on the road to success if you would do your job and not be paid for it.", author: "Oprah Winfrey" },
      { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
      { text: "Tough times don't last. Tough people do.", author: "Robert H. Schuller" },
      { text: "There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.", author: "Michael Phelps" },
      { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
      { text: "Success is the progressive realization of a worthy goal.", author: "Earl Nightingale" },
      { text: "Never give up, for that is just the place and time that the tide will turn.", author: "Harriet Beecher Stowe" },
      { text: "For success, attitude is equally as important as ability.", author: "Walter Scott" },
      { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
      { text: "It is a rough road that leads to the heights of greatness.", author: "Seneca" },
      { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
      { text: "To strive tirelessly and at all times to reach one's goal – therein lies the secret of success.", author: "Anna Pavlova" },
      { text: "Don't worry when you are not recognized, but strive to be worthy of recognition.", author: "Abraham Lincoln" },
      { text: "Life is so much more rewarding if you strive for something, rather than take what's given to you on a plate.", author: "Amy Winehouse" },
      { text: "Ambition is your inner voice that tells you, you can, and should, strive to go beyond your circumstances or situation in life.", author: "Lloyd Blankfein" },
      { text: "Infinite striving to be the best is man's duty; it is its own reward. Everything else is in God's hands.", author: "Mahatma Gandhi" },
      { text: "There is no failure except in no longer trying.", author: "Elbert Hubbard" },
      { text: "Excellence is the gradual result of always striving to do better.", author: "Pat Riley" },
      { text: "We cannot guarantee success, but we can strive to deserve it.", author: "George Washington" },
      { text: "All your dreams can come true if you have the courage to pursue them.", author: "Walt Disney" },
      { text: "The greater the obstacle, the more glory in overcoming it.", author: "Molière" },
      { text: "Every mountain top is within reach if you just keep climbing.", author: "Barry Finlay" },
      { text: "If you strive for excellence, success will follow.", author: "Shreya Ghoshal" },
      { text: "Striving for success without hard work is like trying to harvest where you haven't planted.", author: "David Bly" },
      { text: "A vision on its own is not enough. Hard work and dedication is required to make that vision a reality.", author: "Strive Masiyiwa" },
      { text: "God always strives together with those who strive.", author: "Aeschylus" },
      { text: "Success is always possible for the person who just keeps striving.", author: "The STRIVE" },
      { text: "Strive for continuous improvement, instead of perfection.", author: "Kim Collins" },
      { text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.", author: "Dale Carnegie" },
      { text: "What great thing would you attempt, if you knew you could not fail.", author: "Robert H. Schuller" },
      { text: "It’s not about money or connections.  It’s the willingness to outwork and outlearn everyone when it comes to your business.", author: " Mark Cuban" },
      { text: "Success is not final; failure is not fatal; it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Don’t stop when you’re tired. Stop when you’re done.", author: " Wesley Snipes" },
      { text: "Shoot for the moon. Even if you miss, you’ll land among the stars.", author: "Norman Vincent Peale" },
      { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
      { text: "Act as if what you do makes a difference.” IT DOES.", author: "William James" },
      { text: "Always take another step. If this is to no avail take another, and yet another. One step at a time is not too difficult.", author: " Og Mandino" },
      { text: "I will remove from my vocabulary such words and phrases as quit, cannot, unable, impossible, out of the question, improbable, failure, unworkable, hopeless, and retreat; for they are the words of fools.", author: "Og Mandino" },
      { text: "I will love the light for it shows me the way, yet I will endure the darkness for it shows me the stars.", author: "Og Mandino" },
      { text: "Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.", author: "Og Mandino" },
      { text: "Act now, for now is all you have.", author: "Og Mandino" },
      { text: "Wealth, my son, should never be your goal in life. Your words are eloquent but they are mere words. True wealth is of the heart, not of the purse.", author: "Og Mandino" },
      { text: "He who worries about calamities suffers them twice over.", author: "Og Mandino" },
      { text: "Never feel shame for trying and failing, for he who never failed is he who never tried.", author: "Og Mandino" },
      { text: "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.", author: "Og Mandino" },
      { text: "Treasure the friendship you receive above all. It will survive long after your gold and good health have vanished.", author: "Og Mandino" },
      { text: "If you can’t fly, then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do, you have to keep moving forward.", author: "Martin Luther King, Jr." },
      { text: "Much effort, much prosperity.", author: " Euripides" },
      { text: "Your true success in life begins only when you make the commitment to become excellent at what you do", author: "Brian Tracy" },
      { text: "Much good work is lost for the lack of a little more", author: " Edward H. Harriman" },
      { text: "Your biggest failure is the thing you dreamed of contributing but didn’t find the guts to do.", author: "Seth Godin" },
      { text: "That some achieve great success, is proof to all that others can achieve it as well.", author: "Abraham Lincoln"},
      { text: "Never let the fear of striking out get in your way.", author: "Babe Ruth" },
      { text: "Hustle until you no longer need to introduce yourself.", author: "Anonymous" },
     { text: "The heights by great men reached and kept, were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.", author: "Henry Wadsworth Longfellow" },
{ text: "He who would accomplish little must sacrifice little; he who would achieve much must sacrifice much.", author: "James Allen" },
{ text: "If you wish to be out front, then act as if you were behind.", author: "Lao Tzu" },
{ text: "The key to success is failure.", author: "Michael Jordan" },
{ text: "Formula for success: rise early, work hard, strike oil.", author: "J. Paul Getty" },
{ text: "Plough deep while sluggards sleep.", author: "Benjamin Franklin" },
{ text: "Work hard in silence and let success be your noise.", author: "Anonymous" },
{ text: "Don’t stop until you’re proud.", author: "Anonymous" },
{ text: "The path to success is to take massive, determined action.", author: "Tony Robbins" },
{ text: "If it’s important, you’ll find a way. If it’s not, you’ll find an excuse.", author: "Ryan Blair" },
{ text: "Men of action are favored by the goddess of good luck.", author: "George S. Clason" },
{ text: "A somebody was once a nobody who wanted to and did.", author: "John Burroughs" },
{ text: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.", author: "Andre Gide" },
{ text: "If you believe you can do a thing, you can do it.", author: "Claude M. Bristol" },
{ text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
{ text: "Thought allied fearlessly to purpose becomes creative force.", author: "James Allen" },
{ text: "Run your own race. Who cares what others are doing? The only question that matters is, am I progressing?", author: "Robin Sharma" },
{ text: "There’s not a person on my team in 16 years that has consistently beat me to the ball every play. That ain’t got anything to do with talent, that’s just got everything to do with effort, and nothing else.", author: "Ray Lewis" },
{ text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
{ text: "Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as a punishment. And that’s the difference.", author: "Lou Holtz" },
{ text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
{ text: "Life shrinks or expands in proportion to one’s courage.", author: "Anais Nin" },
{ text: "Nothing in this world is worth having or worth doing unless it means effort, pain, difficulty.", author: "Theodore Roosevelt" },
{ text: "In this world you only get what you grab for.", author: "Giovanni Boccaccio" },
{ text: "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.", author: "George A. Sheehan" },
{ text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
{ text: "If you have everything seems under control, you’re just not going fast enough.", author: "Mario Andretti" },
{ text: "Do the work. Everyone wants to be successful, but nobody wants to do the work.", author: "Gary Vaynerchuk" },
{ text: "Be so good they can’t ignore you.", author: "Steve Martin" },
{ text: "Be not afraid of going slowly; be afraid only of standing still.", author: "Chinese Proverb" },
{ text: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
{ text: "With self-discipline, most anything is possible.", author: "Theodore Roosevelt" },
{ text: "All the so-called ‘secrets of success’ will not work unless you do.", author: "Anonymous" },
{ text: "Your dreams are on the other side of your grit.", author: "Anonymous" },
{ text: "Courage is being scared to death…and saddling up anyway.", author: "John Wayne" },
{ text: "Some succeed because they are destined to, but most succeed because they are determined to.", author: "Henry Van Dyke" },
{ text: "What you exhibit outwardly, you are inwardly.", author: "Claude M. Bristol" },
{ text: "If you continue to think the way you’ve always thought, you’ll continue to get what you’ve always got.", author: "Kevin Trudeau" },
{ text: "They indeed are fools who are satisfied with the fruits of their past effort and do not engage themselves in self-effort now.", author: "Swami Venkatesananda" },
{ text: "Dreams are not what you see in your sleep, they are the things that don’t let you sleep.", author: "Cristiano Ronaldo" },
{ text: "I CAN is 100 times more important than IQ.", author: "Anonymous" },
{ text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
{ text: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
{ text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
{ text: "Success is dependent on effort.", author: "Sophocles" },
{ text: "Good, better, best. Never let it rest. ‘Till your good is better and your better is best.", author: "St. Jerome" },
{ text: "Winning is not everything, but the effort to win is.", author: "Zig Ziglar" },
{ text: "How long should you try? Until.", author: "Jim Rohn" },
{ text: "The view is better when it is earned.", author: "Anonymous" },
{ text: "You have power over your mind, not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
{ text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
{ text: "Courage is fear holding on a minute longer.", author: "George S. Patton" },
{ text: "Surround yourself with people who are only going to lift you higher.", author: "Anonymous" },
{ text: "Comfort is the enemy of progress.", author: "P.T. Barnum" },
{ text: "Stop chasing the money and start chasing the passion.", author: "Tony Hsieh" },
{ text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
{ text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
{ text: "Greatness is succeeding at what you intend to do.", author: "Dr. Joe Vitale" },
{ text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
{ text: "Work your ass off. There is no magic pill.", author: "Arnold Schwarzenegger" },
{ text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
{ text: "Success is not for the lazy.", author: "Anonymous" },
{ text: "All good ideas start out as bad ideas, that’s why it takes so long.", author: "Steven Spielberg" },
{ text: "If you don’t play to win, don’t play at all.", author: "Tom Brady" },
{ text: "You must tell yourself; 'No matter how hard it is, or how hard it gets, I’M GOING TO MAKE IT!'", author: "Les Brown" },
{ text: "Remember that guy that gave up? Neither does anyone else.", author: "Anonymous" },
{ text: "For us, there is only the trying. The rest is not our business.", author: "T.S. Eliot" },
{ text: "I hated every minute of training, but I said, 'Don’t quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali" },
{ text: "When I was young, I observed that nine out of ten things I did were failures. So I did ten times more work.", author: "George Bernard Shaw" },
{ text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
{ text: "Success doesn’t just happen. You have to be intentional about it, and that takes discipline.", author: "John C. Maxwell" },
{ text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
 { text: "Stop chasing the money and start chasing the passion.", author: "Tony Hsieh" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
  { text: "Greatness is succeeding at what you intend to do.", author: "Dr. Joe Vitale" },
  { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
  { text: "Work your ass off. There is no magic pill.", author: "Arnold Schwarzenegger" },
  { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
  { text: "Success is not for the lazy.", author: "Anonymous" },
  { text: "All good ideas start out as bad ideas, that’s why it takes so long.", author: "Steven Spielberg" },
  { text: "If you don’t play to win, don’t play at all.", author: "Tom Brady" },
  { text: "You must tell yourself; 'No matter how hard it is, or how hard it gets, I’M GOING TO MAKE IT!'", author: "Les Brown" },
  { text: "Remember that guy that gave up? Neither does anyone else.", author: "Anonymous" },
  { text: "For us, there is only the trying. The rest is not our business.", author: "T.S. Eliot" },
  { text: "I hated every minute of training, but I said, 'Don’t quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali" },
  { text: "When I was young, I observed that nine out of ten things I did were failures. So I did ten times more work.", author: "George Bernard Shaw" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Success doesn’t just happen. You have to be intentional about it, and that takes discipline.", author: "John C. Maxwell" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "It was desire that brought progress to the world.", author: "Claude M. Bristol" },
  { text: "The secret to happiness is freedom… and the secret to freedom is courage.", author: "Thucydides" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "Satisfaction lies in the effort, not in the attainment, full effort is full victory.", author: "Mahatma Gandhi" },
  { text: "Give your dreams all you’ve got and you’ll be amazed at the energy that comes out of you.", author: "William James" },
  { text: "The artist is nothing without the gift, but the gift is nothing without work.", author: "Emile Zola" },
  { text: "There is no failure except in no longer trying.", author: "Elbert Hubbard" },
  { text: "Don’t you dare let their laughter extinguish your ambition.", author: "J.K. Rowling" },
  { text: "Continuous Effort, not strength or intelligence, is the key to unlocking our potential.", author: "Winston Churchill" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
  { text: "In any given moment, we have two options: To step forward into growth or to step back into safety.", author: "Abraham Maslow" },
  { text: "Strength and growth come only through continuous effort and struggle.", author: "Napoleon Hill" },
  { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings" },
  { text: "You don’t lose if you get knocked down; you lose if you stay down.", author: "Muhammad Ali" },
  { text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit.", author: "Conrad Hilton" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Anonymous" },
  { text: "Some people dream of success while others wake up and work.", author: "Anonymous" },
  { text: "Always discover your vision and the rest will follow.", author: "Arnold Schwarzenegger" },
  { text: "You have to think big to be big.", author: "Claude M. Bristol" },
  { text: "Sometimes, things may not go your way, but the effort should be there every single night.", author: "Michael Jordan" },
  { text: "Perseverance is the hard work you do after you get tired of doing the hard work you already did.", author: "Newt Gingrich" },
  { text: "You know you are on the road to success if you would do your job, and not be paid for it.", author: "Oprah Winfrey" },
  { text: "Effort is only effort when it begins to hurt.", author: "Jose Ortega y Gassett" },
  { text: "Even if you’re on the right track, you’ll get run over if you just sit there.", author: "Will Rogers" },
  { text: "Things may come to those who wait, but only the things left by those who hustle.", author: "Abraham Lincoln" },
  { text: "A person without a goal is like a ship without a rudder.", author: "Thomas Carlyle" },
  { text: "Life is so much more rewarding if you strive for something, rather than take what’s given to you on a plate.", author: "Amy Winehouse" },
  { text: "To anyone who is struggling early in the morning or late at night in pursuit of your dream, struggles that many will never see, and to any leaders out there, who believe in someone who does not yet believe in themselves, keep going. Keep going, because WILL always finds a WAY.", author: "Tom Brady" },
  { text: "If your dreams don’t scare you, they aren’t big enough.", author: "Muhammad Ali" },
  { text: "Why live an ordinary life, when you can live an extraordinary one.", author: "Tony Robbins" },
  { text: "In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.", author: "James Allen" },
  { text: "Most successful people are the most successful people because they’ve failed more than anyone else.", author: "Tony Robbins" },
  { text: "You deserve what your actions earned, or haven’t earned.", author: "M.J. Demarco" },
  { text: "If you hesitate, some bolder hand will stretch out before you and get the prize.", author: "P.T. Barnum" },
  { text: "A lot of people say they want to be great, but they’re not willing to make the sacrifices necessary to achieve greatness.", author: "Kobe Bryant" },
  { text: "Greatness is not measured by what a man or woman accomplishes, but by the opposition they overcame to reach their goals.", author: "D. Height" },
  { text: "There are simply no limits for a person who accepts no limits.", author: "Robin Sharma" },
  { text: "I will persist until I succeed. I was not delivered into this world in defeat, nor does failure course in my veins. I am not a sheep waiting to be prodded by my shepherd. I am a lion and I refuse to talk, to walk, to sleep with the sheep. The slaughterhouse of failure is not my destiny. I will persist until I succeed.", author: "Og Mandino" },
{ text: "I failed my way to success.", author: "Thomas Edison" },
{ text: "There’s nothing like biting off more than you can chew, and then chewing anyway.", author: "Mark Burnett" },
{ text: "Success comes from knowing that you did your best to become the best that you are capable of becoming.", author: "John Wooden" },
{ text: "We must do our work for its own sake, not for fortune or attention or applause.", author: "Steven Pressfield" },
{ text: "I know the price of success; dedication, hard work and an unremitting devotion to the things you want to see happen.", author: "Frank Lloyd Wright" },
{ text: "One painful duty fulfilled makes the next plainer and easier.", author: "Hellen Keller" },
{ text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
{ text: "Never give up on something you can’t go a day without thinking about.", author: "Winston Churchill" },
{ text: "It is time to reverse this prejudice against conscious effort and to see the powers we gain through practice and discipline as eminently inspiring and even miraculous.", author: "Robert Greene" },
{ text: "Education comes from within; you get it by struggle and effort and thought.", author: "Napoleon Hill" },
{ text: "To live is to learn, to strive is to become.", author: "Friedrich Nietzsche" },
{ text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
{ text: "Do not bite at the bait of pleasure till you know there is no hook beneath it.", author: "Thomas Jefferson" },
{ text: "The only man who doesn’t make mistakes is the man who never does anything.", author: "Theodore Roosevelt" },
{ text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
{ text: "The devil whispers, “You can’t withstand the storm.” The Warrior replied, “I am the storm.”", author: "Anonymous" },
{ text: "To win you’ve got to stay in the game.", author: "Claude M. Bristol" },
{ text: "The size of your success is measured by the strength of your desire, the size of your dream, and how you handle disappointment along the way.", author: "Robert Kiyosaki" },
{ text: "Always make a total effort, even when the odds are against you.", author: "Arnold Palmer" },
{ text: "I’ve failed over and over and over again in my life – and that is why I succeed.", author: "Michael Jordan" },
{ text: "Tough time don’t last. Tough people do.", author: "Robert H. Schuller" },
{ text: "There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.", author: "Michael Phelps" },
{ text: "Once you agree upon the price you and your family must pay for success, it enables you to ignore the minor hurts, the opponent’s pressure, and the temporary failures.", author: "Vince Lombardi" },
{ text: "Valor grows by daring; fear by holding back.", author: "Publilius Syrus" },
{ text: "Eighty percent of success is showing up.", author: "Woody Allen" },
{ text: "Success is the progressive realization of a worthy goal.", author: "Earl Nightingale" },
{ text: "Unwearied ceaseless effort is the price that must be paid for turning faith into a rich infallible experience.", author: "Mahatma Gandhi" },
{ text: "Never give up, for that is just the place and time that the tide will turn.", author: "Harriet Beecher Stowe" },
{ text: "For success, attitude is equally as important as ability.", author: "Walter Scott" },
{ text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
{ text: "If you want to have more, you must become more.", author: "Jim Rohn" },
{ text: "It’s the constant and determined effort that breaks down all resistance, sweeps away all obstacles.", author: "Claude M. Bristol" },
{ text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
{ text: "God doesn’t require us to succeed, he only requires that you try.", author: "Mother Teresa" },
{ text: "Enthusiasm is the mother of effort, and without it nothing great was ever achieved.", author: "Ralph Waldo Emerson" },
{ text: "We don’t have to be smarter than the rest; we have to be more disciplined than the rest.", author: "Warren Buffett" },
{ text: "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.", author: "Dale Carnegie" },
{ text: "People are rewarded in public for what they’ve practiced for years in private.", author: "Tony Robbins" },
{ text: "Our greatest glory is not in never failing, but in rising up every time we fail.", author: "Ralph Waldo Emerson" },
{ text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
{ text: "Never confuse a single defeat with a final defeat.", author: "F. Scott Fitzgerald" },
{ text: "I planned my success, I knew it was going to happen.", author: "Erykah Badu" },
{ text: "Only put off until tomorrow what you are willing to die having left undone.", author: "Pablo Picasso" },
{ text: "If you had one shot, or one opportunity, to seize everything you ever wanted, in one moment, would you capture it? Or just let it slip?", author: "Eminem" },
{ text: "Effort is grossly underrated.", author: "Gary Vaynerchuk" },
{ text: "I knew the one thing I might regret was not ever having tried.", author: "Jeff Bezos" },
{ text: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.", author: "John Maxwell" },
{ text: "He who sweats more in training bleeds less in war.", author: "Spartan Creed" },
{ text: "You can, end of story.", author: "Ray Lewis" },
{ text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
{ text: "The harder you work, the harder it is for you to surrender.", author: "Vince Lombardi" },
{ text: "Problems are only opportunities in work clothes.", author: "Henry J. Kaiser" },
{ text: "It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.", author: "Seneca" },
{ text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
{ text: "When a man is sufficiently motivated, discipline will take care of itself.", author: "Albert Einstein" },
{ text: "It’s never crowded along the extra mile.", author: "Wayne Dyer" },
{ text: "Do a little more each day than you think you possibly can.", author: "Lowell Thomas" },
{ text: "Never throughout history has a man who lived a life of ease left a name worth remembering.", author: "Theodore Roosevelt" },
{ text: "No one ever defeated a resolute will. Even death stands still before such a will.", author: "Claude M. Bristol" },
{ text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
{ text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
{ text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not within it.", author: "Henry Ford" },
{ text: "Your daily behavior reveals your deepest beliefs.", author: "Robin Sharma" },
{ text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
{ text: "The price of anything is the amount of life you exchange for it.", author: "Henry David Thoreau" },
{ text: "Real lions like to hunt! They like the process just as much as they love the prize.", author: "Eric Thomas" },
{ text: "Inactivity is retrogression.", author: "John McDonald" },
{ text: "When the end comes for you, let it find you conquering a new mountain not sliding down an old one.", author: "Jim Rohn" },
{ text: "The truest wisdom is a resolute determination.", author: "Napoleon Bonaparte" },
{ text: "Fate loves the fearless.", author: "James Russell Lowell" },
{ text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.", author: "Johann Wolfgang von Goethe" },
{ text: "The desire for safety stands against every great and noble enterprise.", author: "Tacitus" },
{ text: "There are two mistakes one can make along the way to truth: not going all the way, and not starting.", author: "Buddha" },
{ text: "What we do now echoes in eternity.", author: "Marcus Aurelius" },
{ text: "Survival can be summed up in three words – never give up. That’s the heart of it really. Just keep trying.", author: "Bear Grylls" },
{ text: "To believe in the heroic makes heroes.", author: "Benjamin Disraeli" },
{ text: "Victory has a hundred fathers and defeat is an orphan.", author: "John F. Kennedy" },
{ text: "The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones.", author: "Brandon Sanderson" },
{ text: "Do, or do not. There is no try.", author: "Yoda" },
{ text: "The best revenge is massive success.", author: "Frank Sinatra" },
{ text: "Aim for the highest.", author: "Andrew Carnegie" },
{ text: "With the new day comes new strength and new thoughts.", author: "Elenor Roosevelt" },
{ text: "You will never win if you never begin.", author: "Helen Rowland" },
{ text: "Fortune favors the bold.", author: "Virgil" },
{ text: "Problems are not stop signs, they are guidelines.", author: "Robert H. Schuller" },
{ text: "If you fell down yesterday, stand up today.", author: "H.G. Wells" },
{ text: "Set your goals high, and don’t stop till you get there.", author: "Bo Jackson" },
{ text: "Change your life today. Don’t gamble on the future, act now, without delay.", author: "Simone de Beauvoir" },
{ text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
{ text: "Most people never run far enough on their first wind to find out they’ve got a second. Give your dreams all you’ve got and you’ll be amazed at the energy that comes out of you.", author: "William James" },
{ text: "A winner is just a loser who tried one more time.", author: "George M. Moore Jr." },
{ text: "If you can’t excel with talent, triumph with effort.", author: "Dave Weinbaum" },
{ text: "Persistence. The only thing that will piss-off failure enough for it to get the fu** out of the way of your success. PERSIST.", author: "The Ultimate Warrior" },
{ text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
{ text: "A little more persistence a little more effort, and what seemed hopeless failure may turn into a glorious success.", author: "Elbert Hubbard" },
{ text: "If you put forth the effort, good things will be bestowed upon you.", author: "Michael Jordan" },
{ text: "Self-discipline is the magic power that makes you virtually unstoppable.", author: "Dan Kennedy" },
{ text: "Follow your dreams, they know the way.", author: "Kobe Yamada" },
{ text: "No matter where you’re from, your dreams are valid.", author: "Lupita Nyong’o" },
{ text: "The biggest adventure you can take is to live the life of your dreams.", author: "Opra Winfrey" },
{ text: "Victory is always possible for the person who refuses defeat.", author: "Anonymous" },
{ text: "A river cuts through a rock not because of its power, but its persistence.", author: "Anonymous" },
{ text: "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.", author: "Zig Ziglar" },
{ text: "If you follow your dreams and spend your life doing what brings you joy, you are more likely to find success.", author: "Richard Branson" },
{ text: "The people who stick with things for years and never stop almost always win the race.", author: "James Clear" },
{ text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
{ text: "What you are afraid to do is a clear indication of the next thing you need to do.", author: "Ralph Waldo Emerson" },
{ text: "Get action. Seize the moment. Man was never intended to become an oyster.", author: "Theodore Roosevelt" },
{ text: "Courage doesn’t always roar, sometimes it’s the quiet voice at the end of the day whispering ‘I will try again tomorrow’.", author: "Mary Anne Radmacher" },
{ text: "Success in anything will always come down to this: Focus & Effort, and we control both of them.", author: "Dwayne ‘The Rock’ Johnson" },
{ text: "I don’t count my sit-ups, I only start counting when it starts hurting, when I feel pain, that’s when I start counting, cause that’s when it really counts.", author: "Muhammad Ali" },
{ text: "It doesn’t matter whether you are pursuing success in business, sports, the arts, or life in general: The bridge between wishing and accomplishing is discipline.", author: "Harvey Mackay" },
{ text: "The greatest test of courage on the earth is to bear defeat without losing heart.", author: "R.G. Ingersoll" },
{ text: "Only those who dare to fail greatly can ever achieve greatly.", author: "Robert F. Kennedy" },
{ text: "He who seeks rest finds boredom….He who seeks work finds rest.", author: "Anonymous" },
{ text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.", author: "Earl Nightingale" },
{ text: "The man who succeeds is a man who has withstood the tests of time, trials, and has made every effort count.", author: "Hermann J. Steinherr" },
{ text: "We are all self-made, but only the successful will admit it.", author: "Earl Nightingale" },
{ text: "Make each day count by setting specific goals to succeed, then putting forth every effort to exceed your own expectations.", author: "Les Brown" },
{ text: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.", author: "Jesse Owens" },
{ text: "Our greatest glory is not in never falling but in rising every time we fall.", author: "Confucius" },
{ text: "It’s not that I’m so smart, it’s just that I stay with problems longer.", author: "Albert Einstein" },
{ text: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
{ text: "To follow, without halt, one aim: There’s the secret of success.", author: "Anna Pavlova" },
{ text: "In the confrontation between the stream and the rock, the stream always wins – not through strength, but through persistence.", author: "Buddha" },
{ text: "Kites rise highest against the wind – not with it.", author: "Winston Churchill" },
{ text: "A man’s life is interesting primarily when he has failed. I well know. For its a sign that he tried to surpass himself.", author: "Georges Clemenceau" },
{ text: "Climb mountains not so the world can see you, but so you can see the world.", author: "David McCullough Jr." },
{ text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.", author: "Vince Lombardi" },
{ text: "Persistence is to the character of man as carbon is to steel.", author: "Napoleon Hill" },
{ text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
{ text: "Anything is possible if you’ve got enough nerve.", author: "J.K. Rowling" },
{ text: "The best way out is always through.", author: "Robert Frost" },
{ text: "No great achievement is possible without persistent work.", author: "Bertrand Russell" },
{ text: "Permanence, perseverance, and persistence in spite of all obstacles, discouragement, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.", author: "Thomas Carlyle" },
{ text: "What you believe yourself to be, you are.", author: "Claude M. Bristol" },
{ text: "If you are going through hell, keep going.", author: "Winston Churchill" },
{ text: "To uncover your true potential, you must first find your own limits and then you have to have the courage to blow past them.", author: "Picabo Street" },
{ text: "Life is being on the wire, everything else is just waiting.", author: "Karl Wallenda" },
{ text: "Success doesn’t come to you, you go to it.", author: "T. Scott Mcleod" },
{ text: "Glory gives herself only to those who have always dreamed of her.", author: "Charles de Gaul" },
{ text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
{ text: "Be Fearless in the pursuit of what sets your soul on fire.", author: "Anonymous" },
{ text: "Never say never, because limits, like fears, are often just an illusion.", author: "Michael Jordan" },
{ text: "The level path is easy, but it will not bring you to the mountaintop.", author: "Dr. Idel Dreimer" },
{ text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
{ text: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.", author: "James Cameron" },
{ text: "To be successful we must do things that unsuccessful people do not want to do. Those things require levels of courage.", author: "R. Harpe" },
{ text: "He who is firm in will molds the world to himself.", author: "Johann Wolfgang von Goethe" },
{ text: "The sight of an achievement is the greatest gift that a human being could offer to others.", author: "Ayn Rand" },
{ text: "Where I excel, is ridiculous, sickening, work-ethic!", author: "Will Smith" },
{ text: "It’s never too late to be what you might have been.", author: "George Elliot" },
{ text: "Do not wait to strike till the iron is hot: But make it hot by striking.", author: "William B. Sprague" },
{ text: "Nothing is impossible, the word itself says 'I’m possible.'", author: "Audrey Hepburn" },
{ text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.", author: "Dale Carnegie" },
{ text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle Onassis" },
{ text: "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
{ text: "I am not a product of my circumstances. I am a product of my decision.", author: "Stephen Covey" },
{ text: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" },
{ text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
{ text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
{ text: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.", author: "George Lorimer" },
{ text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
{ text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
{ text: "Don’t judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
{ text: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
{ text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
{ text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", author: "Leonardo da Vinci" },
{ text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
{ text: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", author: "Sheryl Sandberg" },
{ text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
{ text: "If you want to make an easy job seem mighty hard, just keep putting off doing it.", author: "Olin Miller" },
{ text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
{ text: "Follow effective actions with quiet reflection. From the quiet reflection will come even more effective action.", author: "Peter Drucker" },
{ text: "You have to learn the rules of the game. And then you have to play better than anyone else.", author: "Albert Einstein" },
{ text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
{ text: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.", author: "Mother Teresa" },
{ text: "The secret of success in life is for a man to be ready for his opportunity when it comes.", author: "Benjamin Disraeli" },
{ text: "Don’t brood. Get on with living and loving. You don’t have forever.", author: "Leo Buscaglia" },
{ text: "You do what you can for as long as you can, and when you can’t, you do the next best thing. You back up, but you don’t give up.", author: "Chuck Yeager" },
{ text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
{ text: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", author: "Mark Caine" },
{ text: "For success, attitude is equally as important as ability.", author: "Harry F. Banks" },
{ text: "The world is full of educated derelicts. Perseverance and determination alone are omnipotent.", author: "Calvin Coolidge" },
{ text: "Judge your success by what you had to give up in order to get it.", author: "Dalai Lama" },
{ text: "Your work is to discover your world and then with all your heart give yourself to it.", author: "Buddha" },
{ text: "Success is largely a matter of holding on after others have let go.", author: "Anonymous" },
{ text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
{ text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
{ text: "Nothing is less productive than to make more efficient what should not be done at all.", author: "Peter Drucker" },
{ text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
{ text: "Ambition is the path to success. Persistence is the vehicle you arrive in.", author: "Bill Bradley" },
{ text: "Before anything else, preparation is the key to success.", author: "Alexander Graham Bell" },
{ text: "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much.", author: "Jim Rohn" },
{ text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", author: "Harriet Tubman" },
{ text: "Striving for success without hard work is like trying to harvest where you haven’t planted.", author: "David Bly" },
{ text: "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.", author: "Anonymous" },
{ text: "I am grinding while your sleeping.", author: "Gary Vaynerchuk" },
{ text: "Our greatest fear should not be of failure … but of succeeding at things in life that don’t really matter.", author: "Francis Chan" },
{ text: "Criticism is the price of Ambition.", author: "Robin Sharma" },
{ text: "The road to success is always under construction.", author: "Lily Tomlin" },
{ text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", author: "Bo Bennett" },
{ text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
{ text: "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.", author: "Thomas Edison" },
{ text: "Put a grain of boldness into everything you do.", author: "Baltasar Gracian" },
{ text: "Light tomorrow with today.", author: "Elizabeth Barrett Browning" },
{ text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
{ text: "Be brave. Take risks. Nothing can substitute experience.", author: "Paulo Coelho" },
{ text: "You can never achieve more than you aspire to.", author: "Al Ries" },
{ text: "Don’t fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.", author: "Bruce Lee" },
{ text: "Every master was once a disaster.", author: "T. Harv Eker" },
{ text: "When you play, play hard; when you work, don’t play at all.", author: "Theodore Roosevelt" },
{ text: "Nothing is worth more than this day.", author: "Johann Wolfgang von Goethe" },
{ text: "When people don’t believe in you, you have to believe in yourself.", author: "Peirce Brosnan" },
{ text: "Ordinary is easy. Extra-ordinary is what will separate you from the crowd.", author: "Darren Hardy" },
{ text: "Sometimes adversity is what you need to face in order to become successful.", author: "Zig Ziglar" },
{ text: "Take time to deliberate; but when the time for action arrives, stop thinking and go in.", author: "Napoleon Bonaparte" },
{ text: "To be a champ you have to believe in yourself when no one else will.", author: "Sugar Ray Robinson" },
{ text: "To dare is to lose one’s footing momentarily. To not dare is to lose oneself.", author: "Soren Kierkegaard" },
{ text: "I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine.", author: "Neil Armstrong" },
{ text: "When you cease to dream you cease to live.", author: "Malcom Forbes" },
{ text: "Paralyze resistance with persistence.", author: "Woody Hayes" },
{ text: "Winning means… you’re willing to go longer, work harder, give more than anyone else.", author: "Vince Lombardi" },
{ text: "We are made to persist. That’s how we find out who we are.", author: "Tobias Wolff" },
{ text: "Patience, persistence, and perspiration make an unbeatable combination for success.", author: "Napoleon Hill" },
{ text: "When you want to succeed as bad as you want to breathe, then you’ll be successful.", author: "Eric Thomas" },
{ text: "Money grows on the tree of persistence.", author: "Japanese Proverb" },
{ text: "Nothing in this world can take the place of persistence. Talent will not: nothing is more common than unsuccessful men with talent.", author: "Calvin Coolidge" },
{ text: "Champions keep playing until they get it right.", author: "Billy Jean King" },
{ text: "As long as there’s breath in You–Persist!", author: "Bernard Kelvin Clive" },
{ text: "Sometimes a winner is just a dreamer who just won’t quit.", author: "Rudy" },
{ text: "Press on. Nothing in the world can take the place of persistence.", author: "Ray Kroc" },
{ text: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", author: "William Arthur Ward" },
{ text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all — in which case, you fail by default.", author: "J.K. Rowling" },
{ text: "Obstacles are those frightful things you see when you take your eyes off your goals.", author: "Henry Ford" },
{ text: "What most of us never suspect of existing, is the silent but irresistible power which comes to the rescue of those who fight on in the face of discouragement.", author: "Napoleon Hill" },
  { text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.", author: "Frank Herbert" },
  { text: "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.", author: "Roy T. Bennett" },
  { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { text: "Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.", author: "Roy T. Bennett" },
  { text: "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.", author: "Roy T. Bennett" },
  { text: "The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.", author: "Steve Maraboli" },
  { text: "Do what is right, not what is easy nor what is popular.", author: "Roy T. Bennett" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "Pursue what catches your heart, not what catches your eyes.", author: "Roy T. Bennett" },
  { text: "Start each day with a positive thought and a grateful heart.", author: "Roy T. Bennett" },
  { text: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.", author: "Viktor E. Frankl" },
  { text: "Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.", author: "Roy T. Bennett" },
  { text: "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.", author: "Roy T. Bennett" },
  { text: "Be brave to stand for what you believe in even if you stand alone.", author: "Roy T. Bennett" },
  { text: "Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.", author: "Steve Maraboli" },
  { text: "Never lose hope. Storms make people stronger and never last forever.", author: "Roy T. Bennett" },
  { text: "Do not fear failure but rather fear not trying.", author: "Roy T. Bennett" },
  { text: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.", author: "Zig Ziglar" },
  { text: "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.", author: "Steve Maraboli" },
  { text: "You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.", author: "Roy T. Bennett" },
  { text: "Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind.", author: "Roy T. Bennett" },
  { text: "Let the improvement of yourself keep you so busy that you have no time to criticize others.", author: "Roy T. Bennett" },
  { text: "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.", author: "Steve Maraboli" },
  { text: "Believe in your infinite potential. Your only limitations are those you set upon yourself.", author: "Roy T. Bennett" },
  { text: "Happiness is not the absence of problems, it's the ability to deal with them.", author: "Steve Maraboli" },
  { text: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.", author: "Arthur C. Clarke" },
  { text: "Surround Yourself with People Who Believe in Your Dreams: Surround yourself with people who believe in your dreams, encourage your ideas, support your ambitions, and bring out the best in you.", author: "Roy T. Bennett" },
  { text: "Sometimes life knocks you on your ass... get up, get up, get up!!! Happiness is not the absence of problems, it's the ability to deal with them.", author: "Steve Maraboli" },
{ text: "Learn the rules like a pro, so you can break them like an artist.", author: "Pablo Picasso" },
{ text: "Do what you love, love what you do, and with all your heart give yourself to it.", author: "Roy T. Bennett" },
{ text: "Once you realize you deserve a bright future, letting go of your dark past is the best choice you will ever make.", author: "Roy T. Bennett" },
{ text: "Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.", author: "Ralph Waldo Emerson" },
{ text: "If you believe very strongly in something, stand up and fight for it.", author: "Roy T. Bennett" },
{ text: "Do not let arrogance go to your head and despair to your heart; do not let compliments go to your head and criticisms to your heart; do not let success go to your head and failure to your heart.", author: "Roy T. Bennett" },
{ text: "You cannot change anyone, but you can be the reason someone changes.", author: "Roy T. Bennett" },
{ text: "You are unique. You have different talents and abilities. You don’t have to always follow in the footsteps of others. And most important, you should always remind yourself that you don't have to do what everyone else is doing and have a responsibility to develop the talents you have been given.", author: "Roy T. Bennett" },
{ text: "Each day brings new opportunities, allowing you to constantly live with love—be there for others—bring a little light into someone's day. Be grateful and live each day to the fullest.", author: "Roy T. Bennett" },
{ text: "Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.", author: "Eleanor Roosevelt" },
{ text: "If you hang out with chickens, you're going to cluck and if you hang out with eagles, you're going to fly.", author: "Steve Maraboli" },
{ text: "To have what you have never had, you have to do what you have never done.", author: "Roy T. Bennett" },
{ text: "Live the Life of Your Dreams When you start living the life of your dreams, there will always be obstacles, doubters, mistakes and setbacks along the way. But with hard work, perseverance and self-belief there is no limit to what you can achieve.", author: "Roy T. Bennett" },
{ text: "You are the average of the five people you spend the most time with.", author: "Jim Rohn" },
{ text: "People are always blaming their circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and if they can't find them, make them.", author: "George Bernard Shaw" },
{ text: "You Are the Master of Your Attitude You cannot control what happens to you, but you can control the way you think about all the events. You always have a choice. You can choose to face them with a positive mental attitude.", author: "Roy T. Bennett" },
{ text: "Get Off The Scale! You are beautiful. Your beauty, just like your capacity for life, happiness, and success, is immeasurable. Day after day, countless people across the globe get on a scale in search of validation of beauty and social acceptance. Get off the scale! I have yet to see a scale that can tell you how enchanting your eyes are. I have yet to see a scale that can show you how wonderful your hair looks when the sun shines its glorious rays on it. I have yet to see a scale that can thank you for your compassion, sense of humor, and contagious smile. Get off the scale because I have yet to see one that can admire you for your perseverance when challenged in life. It’s true, the scale can only give you a numerical reflection of your relationship with gravity. That’s it. It cannot measure beauty, talent, purpose, life force, possibility, strength, or love. Don’t give the scale more power than it has earned. Take note of the number, then get off the scale and live your life. You are beautiful!", author: "Steve Maraboli" },
{ text: "Renew, release, let go. Yesterday’s gone. There’s nothing you can do to bring it back. You can’t “should’ve” done something. You can only DO something. Renew yourself. Release that attachment. Today is a new day!", author: "Steve Maraboli" },
{ text: "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.", author: "Brandon Sanderson" },
{ text: "How would your life be different if…You walked away from gossip and verbal defamation? Let today be the day…You speak only the good you know of other people and encourage others to do the same.", author: "Steve Maraboli" },
{ text: "LAW 4 Always Say Less Than Necessary When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish.", author: "Robert Greene" },
{ text: "Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.", author: "Steve Maraboli" },
{ text: "Don’t let others tell you what you can’t do. Don't let the limitations of others limit your vision. If you can remove your self-doubt and believe in yourself, you can achieve what you never thought possible.", author: "Roy T. Bennett" },
{ text: "You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.", author: "Eleanor Roosevelt" },
{ text: "Don't wish it were easier. Wish you were better.", author: "Jim Rohn" },
{ text: "I want to live my life in such a way that when I get out of bed in the morning, the devil says, \"aw shit, he's up!\"", author: "Steve Maraboli" },
{ text: "Great leaders create more leaders, not followers.", author: "Roy T. Bennett" },
{ text: "In the end, you have to choose whether or not to trust someone.", author: "Sophie Kinsella" },
{ text: "If you don’t give up on something you truly believe in, you will find a way.", author: "Roy T. Bennett" },
{ text: "Don't fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.", author: "Bruce Lee" },
{ text: "Turn your obstacles into opportunities and your problems into possibilities.", author: "Roy T. Bennett" },
{ text: "One of the most spiritual things you can do is embrace your humanity. Connect with those around you today. Say, \"I love you\", \"I'm sorry\", \"I appreciate you\", \"I'm proud of you\"...whatever you're feeling. Send random texts, write a cute note, embrace your truth and share it...cause a smile today for someone else...and give plenty of hugs.", author: "Steve Maraboli" },
{ text: "Rejection is an opportunity for your selection.", author: "Bernard Branson" },
{ text: "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don't just give up.", author: "Stephen Hawking" },
{ text: "Don't confuse poor decision-making with destiny. Own your mistakes. It’s ok; we all make them. Learn from them so they can empower you!", author: "Steve Maraboli" }
    ];
let serverQuotes = [];
let currentQuote = null;

const backgrounds = [
  'url("pexels-karolina-grabowska-4218701.jpg")',
  'url("pexels-mathew-thomas-318779-906531.jpg")',
  'url("pexels-ollivves-1047051.jpg")',
  'url("pexels-olly-3771058.jpg")',
   'url("34486701584_15f963451c_b.jpg")',
    'url("background-blur-clean-531880.jpg")',
     'url("OIP (1).jpeg")',
      'url("OIP (2).jpeg")',
       'url("OIP (3).jpeg")',
        'url("OIP (4).jpeg")',
         'url("OIP (5).jpeg")',
          'url("OIP (6).jpeg")',
           'url("OIP (7).jpeg")',
            'url("OIP (8).jpeg")',
             'url("OIP.jpeg")',
];
let currentBackground = 0;

function toggleAddForm() {
  const form = document.getElementById('add-quote-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

async function fetchServerQuotes() {
  try {
    const res = await fetch('/api/quotes');
    const data = await res.json();
    serverQuotes = data;
  } catch (err) {
    console.error("Error fetching server quotes:", err);
  }
}

function getQuote() {
  const allQuotes = [...localQuotes, ...serverQuotes];
  currentQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];

  document.getElementById('quote').textContent = `"${currentQuote.text}"`;
  document.getElementById('author').textContent = `— ${currentQuote.author || 'Unknown'}`;
}

function getQuoteByAuthor() {
  const author = document.getElementById('author-select').value;
  if (!author) {
    alert("Please select an author.");
    return;
  }

  const allQuotes = [...localQuotes, ...serverQuotes].filter(q => q.author === author);
  if (allQuotes.length === 0) {
    alert("No quotes found for this author.");
    return;
  }

  const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  currentQuote = quote;
  document.getElementById('quote').textContent = `"${quote.text}"`;
  document.getElementById('author').textContent = `— ${quote.author}`;
}

function populateAuthorDropdown() {
  const allQuotes = [...localQuotes, ...serverQuotes];
  const authorSet = new Set();

  allQuotes.forEach(q => {
    if (q.author) authorSet.add(q.author);
  });

  const select = document.getElementById('author-select');
  select.innerHTML = '<option value="">-- Choose Author --</option>';

  Array.from(authorSet).sort().forEach(author => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = author;
    select.appendChild(option);
  });
}

function shareQuote() {
  if (navigator.share) {
    navigator.share({
      title: "Daily Motivation",
      text: `"${currentQuote.text}" — ${currentQuote.author || 'Unknown'}`,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(`"${currentQuote.text}" — ${currentQuote.author || 'Unknown'}`).then(() => {
      alert("Quote copied to clipboard!");
    });
  }
}

async function submitQuote() {
  const textInput = document.getElementById('new-quote-text');
  const authorInput = document.getElementById('new-quote-author');

  const newQuoteText = textInput.value.trim();
  const newQuoteAuthor = authorInput.value.trim() || "Unknown";

  if (!newQuoteText) {
    return alert("Please enter a quote!");
  }

  try {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newQuoteText, author: newQuoteAuthor })
    });

    if (res.ok) {
      textInput.value = '';
      authorInput.value = '';
      await fetchServerQuotes();
      populateAuthorDropdown();
      getQuote();
      alert("Quote added successfully!");
      toggleAddForm();
    } else {
      alert("Failed to add quote.");
    }
  } catch (err) {
    console.error("Error submitting quote:", err);
    alert("Error submitting quote.");
  }
}

function rotateBackground() {
  document.body.style.backgroundImage = backgrounds[currentBackground];
  currentBackground = (currentBackground + 1) % backgrounds.length;
}

const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  modeToggleBtn.textContent = document.body.classList.contains('light-mode')
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
});

window.onload = async () => {
  await fetchServerQuotes();
  getQuote();
  rotateBackground();
  setInterval(rotateBackground, 5000);
  populateAuthorDropdown();
};

// ✅ ENTER key triggers quote by author
document.getElementById('author-select').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getQuoteByAuthor();
  }
});
