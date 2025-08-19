document.addEventListener("DOMContentLoaded",function(){initScrollAnimations(),initParallaxEffect(),initSmoothScrolling(),initLoadingAnimations(),initHoverEffects(),initContentAnimations()});function initContentAnimations(){const t={threshold:.1,rootMargin:"0px 0px -30px 0px"},e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},t),n=document.querySelectorAll(".service-content p, .product-content p, .capabilities-content p");n.forEach((t,n)=>{t.classList.add("content-animate"),t.style.animationDelay=`${n*.1}s`,e.observe(t)});const s=document.querySelectorAll(".service-content h2, .service-content h3, .product-content h2, .product-content h3, .capabilities-content h2, .capabilities-content h3");s.forEach((t,n)=>{t.classList.add("content-slide-in"),t.style.animationDelay=`${n*.15}s`,e.observe(t)});const o=document.querySelectorAll(".service-content ul, .service-content ol, .product-content ul, .product-content ol, .capabilities-content ul, .capabilities-content ol");o.forEach((t,n)=>{t.classList.add("content-scale-in"),t.style.animationDelay=`${n*.2}s`,e.observe(t)})}function initScrollAnimations(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("animate-in");const t=e.target.querySelectorAll(".stagger-child");t.forEach((e,t)=>{setTimeout(()=>{e.classList.add("animate-in")},t*100)})}})},e),n=document.querySelectorAll(".service-card, .feature-card, .service-modern-card, [data-animate]");n.forEach(e=>{t.observe(e)})}function initParallaxEffect(){const e=document.querySelectorAll("[data-parallax]");if(e.length===0)return;window.addEventListener("scroll",throttle(()=>{const t=window.pageYOffset;e.forEach(e=>{const n=e.dataset.parallax||.5,s=-(t*n);e.style.transform=`translateY(${s}px)`})},16))}function initSmoothScrolling(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const e=document.querySelector(this.getAttribute("href"));if(e){const t=document.querySelector(".modern-header")?.offsetHeight||0,n=e.offsetTop-t-20;window.scrollTo({top:n,behavior:"smooth"})}})})}function initLoadingAnimations(){document.body.style.opacity="0",document.body.style.transition="opacity 0.5s ease-in-out",window.addEventListener("load",()=>{document.body.style.opacity="1"});const e=document.querySelectorAll(".stagger-animation");e.forEach(e=>{const t=e.querySelectorAll(".service-card, .feature-card, .service-modern-card");t.forEach((e,t)=>{e.style.animationDelay=`${t*.1}s`,e.classList.add("stagger-child")})})}function initHoverEffects(){const e=document.querySelectorAll(".modern-cta, .btn-modern");e.forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-3px) scale(1.02)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)"})});const t=document.querySelectorAll(".service-modern-card, .feature-card");t.forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-5px)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0)"})})}function throttle(t,n){let e;return function(){const s=arguments,o=this;e||(t.apply(o,s),e=!0,setTimeout(()=>e=!1,n))}}function showLoadingScreen(){const e=`
        <div id="loading-screen" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out;
        ">
            <div style="text-align: center; color: white;">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(255,255,255,0.3);
                    border-top: 3px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <p style="font-size: 1.2rem; margin: 0;">Loading...</p>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;document.body.insertAdjacentHTML("afterbegin",e),window.addEventListener("load",()=>{const e=document.getElementById("loading-screen");e&&(e.style.opacity="0",setTimeout(()=>{e.remove()},500))})}const modernStyles=`
<style>
/* Animation Classes */
.animate-in {
    animation: fadeInUp 0.8s ease-out forwards;
}

.stagger-child {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.stagger-child.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Hover states */
.hover-glow:hover {
    box-shadow: 0 0 30px rgba(16, 107, 224, 0.3);
}

.hover-scale:hover {
    transform: scale(1.05);
}

/* Loading animations */
.skeleton-loader {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Responsive animations */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
`;document.head.insertAdjacentHTML("beforeend",modernStyles),window.ModernSite={initScrollAnimations,initParallaxEffect,initSmoothScrolling,showLoadingScreen,throttle}