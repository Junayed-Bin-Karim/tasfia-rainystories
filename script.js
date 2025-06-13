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











document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.getElementById('rain-container');
    const rainIntensity = 100; // Number of raindrops
    
    // Create raindrops
    for (let i = 0; i < rainIntensity; i++) {
        createRaindrop();
    }
    
    function createRaindrop() {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        
        // Random position and animation duration
        const left = Math.random() * 100;
        const duration = 0.5 + Math.random() * 1.5;
        const delay = Math.random() * 2;
        
        drop.style.left = `${left}%`;
        drop.style.top = `${-20}px`;
        drop.style.animationDuration = `${duration}s`;
        drop.style.animationDelay = `${delay}s`;
        
        rainContainer.appendChild(drop);
        
        // Create splash when drop hits bottom
        setTimeout(() => {
            createSplash(left);
            
            // Remove drop after animation completes
            setTimeout(() => {
                drop.remove();
                createRaindrop(); // Create new drop to replace this one
            }, duration * 1000);
        }, delay * 1000);
    }
    
    function createSplash(left) {
        const splash = document.createElement('div');
        splash.classList.add('splash');
        
        splash.style.left = `${left}%`;
        splash.style.bottom = '0';
        
        rainContainer.appendChild(splash);
        
        // Remove splash after animation completes
        setTimeout(() => {
            splash.remove();
        }, 500);
    }
    
    // Adjust for window resize
    window.addEventListener('resize', function() {
        const drops = document.querySelectorAll('.drop');
        drops.forEach(drop => {
            const currentLeft = parseFloat(drop.style.left);
            drop.style.left = `${(currentLeft / 100) * window.innerWidth}px`;
        });
    });
});









const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // স্ক্রল ডাউন করলে হেডার লুকাবে, স্ক্রল আপ করলে দেখাবে
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  
  // যদি স্ক্রল 50px এর বেশি হয়, তখন রং গাঢ় পিঙ্ক হবে
  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
