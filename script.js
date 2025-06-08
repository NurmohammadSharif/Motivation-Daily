
    const localQuotes = [
      { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
     
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
