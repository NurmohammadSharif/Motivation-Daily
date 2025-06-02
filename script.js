const localQuotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn't just find you. You have to go out and get it.",
  "Don’t stop until you’re proud.",
  "Believe in yourself and all that you are."
];

let serverQuotes = [];
let currentQuote = "Loading motivation...";

// Background images
const backgrounds = [
  'url("pexels-karolina-grabowska-4218701.jpg")',
  'url("pexels-mathew-thomas-318779-906531.jpg")',
  'url("pexels-ollivves-1047051.jpg")',
  'url("pexels-olly-3771058.jpg")',
];
let currentBackground = 0;

// Toggle quote form visibility
function toggleAddForm() {
  const form = document.getElementById('add-quote-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Fetch user-submitted quotes
async function fetchServerQuotes() {
  try {
    const res = await fetch('/api/quotes');
    const data = await res.json();
    serverQuotes = data.map(q => q.text);
  } catch (err) {
    console.error("Error fetching server quotes:", err);
  }
}

// Get random quote
function getQuote() {
  const allQuotes = [...localQuotes, ...serverQuotes];
  currentQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  document.getElementById('quote').textContent = currentQuote;
}

// Share quote
function shareQuote() {
  if (navigator.share) {
    navigator.share({
      title: "Daily Motivation",
      text: currentQuote,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(currentQuote).then(() => {
      alert("Quote copied to clipboard!");
    });
  }
}

// Submit new quote
async function submitQuote() {
  const input = document.getElementById('new-quote-text');
  const newQuote = input.value.trim();
  if (!newQuote) return alert("Please enter a quote!");

  try {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newQuote })
    });

    if (res.ok) {
      input.value = '';
      await fetchServerQuotes();
      getQuote();
      alert("Quote added successfully!");
    } else {
      alert("Failed to add quote.");
    }
  } catch (err) {
    console.error("Error submitting quote:", err);
    alert("Error submitting quote.");
  }
}

// Background image rotation
function rotateBackground() {
  document.body.style.backgroundImage = backgrounds[currentBackground];
  currentBackground = (currentBackground + 1) % backgrounds.length;
}

// Initial load
window.onload = async () => {
  await fetchServerQuotes();
  getQuote();
  rotateBackground();
  setInterval(rotateBackground, 5000);
};
