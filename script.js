// Get all the FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listener to each FAQ question
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Get the answer div

        // Toggle the answer's display
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
// Get all testimonial items
const testimonialItems = document.querySelectorAll('.testimonial-item');

// Set an initial index for the testimonial display
let currentIndex = 0;

// Function to show the next testimonial
function showNextTestimonial() {
    // Hide the current testimonial
    testimonialItems[currentIndex].style.display = 'none';
    
    // Move to the next testimonial
    currentIndex = (currentIndex + 1) % testimonialItems.length;

    // Show the next testimonial
    testimonialItems[currentIndex].style.display = 'block';
}

// Initially hide all testimonials except the first one
testimonialItems.forEach((item, index) => {
    if (index !== 0) {
        item.style.display = 'none';
    }
});

// Change testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);
