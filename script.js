const chapterTextDiv = document.getElementById('chapter-text');
const prevButton = document.getElementById('prev-chapter');
const nextButton = document.getElementById('next-chapter');
let currentChapter = 0;

const chapters = [
    "Chapter 1: The Awakening. The sun rose, casting long shadows across the ancient ruins...",
    "Chapter 2: The Journey Begins. They set off on their perilous journey, unsure of what lay ahead...",
    "Chapter 3: The Hidden City. Deeper into the ruins, they discovered a city hidden from time...",
    "Chapter 4: The Revelation. A shocking discovery changed everything they thought they knew."
];

function loadChapter(chapterIndex) {
    chapterTextDiv.innerHTML = chapters[chapterIndex];
    prevButton.disabled = chapterIndex === 0;
    nextButton.disabled = chapterIndex === chapters.length - 1;
}

loadChapter(currentChapter);

prevButton.addEventListener('click', () => {
    if (currentChapter > 0) {
        currentChapter--;
        loadChapter(currentChapter);
    }
});

nextButton.addEventListener('click', () => {
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        loadChapter(currentChapter);
    }
});