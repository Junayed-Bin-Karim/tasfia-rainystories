// ওয়েলকাম মেসেজ
document.addEventListener('DOMContentLoaded', function() {
    console.log('স্বাগতম "তাসফিয়ার নামে লেখা" ওয়েবসাইটে');
    
    // অ্যানিমেশন যোগ করা
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // স্মুথ স্ক্রোলিং
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// কনটেন্ট টগল ফাংশন
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const button = event.target;
    
    content.classList.toggle('show');
    
    if (content.classList.contains('show')) {
        button.textContent = 'সংক্ষিপ্ত করুন';
    } else {
        button.textContent = 'সম্পূর্ণ পড়ুন';
    }
    
    // স্মুথ স্ক্রোলিং টু বাটন
    button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}