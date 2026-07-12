const categoriesBtn = document.querySelector('#categories-btn')
const categoriesBox = document.querySelector('#categories-box')
const overlay = document.querySelector('#overlay')
const categoriesCloseBtn = document.querySelector('#categories-close-btn')
const loginPage = document.querySelector('.login-page')
const headerLoginElem = document.querySelector('.header__login')
const navMobileLogin=document.querySelector('#nav-mobile-login')
const loginPageCloseBtn = document.querySelector('#login-page-close-btn')
const headerShoppingCartElem = document.querySelector('.header__shopping-cart')
const navMobileShoppingCart=document.querySelector('#nav-mobile-shopping-cart')
const navMobileSearch=document.querySelector('#nav-mobile-search')
const modalSearchBox=document.querySelector('.modal-search-box')
const modalSearchCloseBtn=document.querySelector('#modal-search-box-close-btn')
const modalshoppingCart = document.querySelector('#modal-cart')
const modalCartCloseBtn = document.querySelector('#modal-shopping-cart-close-btn')
const navMobileCategories=document.querySelector('#nav-mobile-categories')
const modalCategories=document.querySelector('.modal-categories')
const modalCategoriesCloseBtn=document.querySelector('#modal-categories-close-btn')
const productsArray = document.querySelectorAll('.hot-offer__product')
const modalProduct = document.querySelector('#modal-product')
const modalProductBtn = document.querySelector('#modal-product-btn')
const modalImageTop=document.querySelector('#modal-topimage')
const modalImageBottom=document.querySelector('#modal-bottomimage')
const modalTitle=document.querySelector('#modal-title')
const modalOffValue=document.querySelector('#modal-offprice')
const modalOffPercentage=document.querySelector('#modal-offpercent')
const modalPrice=document.querySelector('#modal-price')
const productCategoryItems=document.querySelectorAll('.product-category__item')


productsArray.forEach((product) => {
    console.log(product);
    product.addEventListener('click', () => {
        modalProduct.classList.remove('hidden')
        overlay.classList.remove('hidden')
        // when opening the modal, it's common to prevent the page behind it from scrolling:
        document.body.style.overflow = "hidden";
        modalProductBtn.addEventListener('click', () => {
            modalProduct.classList.add('hidden')
            overlay.classList.add('hidden')
            // and when closing the modal:
            document.body.style.overflow = "";
        })
        overlay.addEventListener('click', () => {
            modalProduct.classList.add('hidden')
            overlay.classList.add('hidden')
            document.body.style.overflow = "";
        })
    })
})
productCategoryItems.forEach((product) => {
    product.addEventListener('click', () => {
        modalProduct.scrollTop = 0;
        modalProduct.classList.remove('hidden')
        overlay.classList.remove('hidden')
        // when opening the modal, it's common to prevent the page behind it from scrolling:
        document.body.style.overflow = "hidden";
        modalProductBtn.addEventListener('click', () => {
            modalProduct.classList.add('hidden')
            overlay.classList.add('hidden')
            // and when closing the modal:
            document.body.style.overflow = "";
        })
        overlay.addEventListener('click', () => {
            modalProduct.classList.add('hidden')
            overlay.classList.add('hidden')
            document.body.style.overflow = "";
        })
    })
})

function openBox() {
    categoriesBox.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeBox() {
    categoriesBox.classList.add('hidden')
    overlay.classList.add('hidden')
}
function openLoginPage() {
    loginPage.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeLoginPage() {
    loginPage.classList.add('hidden')
    overlay.classList.add('hidden')
}
function openShoppingCartModal() {
    modalshoppingCart.classList.add('modal-shopping-cart--show')
    overlay.classList.remove('hidden')
}
function closeShoppingCartModal() {
    modalshoppingCart.classList.remove('modal-shopping-cart--show')
    overlay.classList.add('hidden')
}
function openSearchBoxModal() {
    modalSearchBox.classList.add('modal-search-box--show')
    overlay.classList.remove('hidden')
    document.body.style.overflow = "hidden";
}
function closeSearchBoxModal() {
    modalSearchBox.classList.remove('modal-search-box--show')
    overlay.classList.add('hidden')
    document.body.style.overflow = "";
}
function openCategoriesModal() {
    modalCategories.classList.add('modal-categories--show')
    overlay.classList.remove('hidden')
    document.body.style.overflow = "hidden";
}
function closeCategoriesModal() {
    modalCategories.classList.remove('modal-categories--show')
    overlay.classList.add('hidden')
    document.body.style.overflow = "";
}

categoriesBtn.addEventListener('click', openBox)
overlay.addEventListener('click', closeBox)
categoriesCloseBtn.addEventListener('click', closeBox)

headerLoginElem.addEventListener('click', openLoginPage)
navMobileLogin.addEventListener('click', openLoginPage)
overlay.addEventListener('click', closeLoginPage)
loginPageCloseBtn.addEventListener('click', closeLoginPage)

headerShoppingCartElem.addEventListener('click', openShoppingCartModal)
navMobileShoppingCart.addEventListener('click', openShoppingCartModal)
modalCartCloseBtn.addEventListener('click', closeShoppingCartModal)
overlay.addEventListener('click', closeShoppingCartModal)

navMobileSearch.addEventListener('click',openSearchBoxModal)
overlay.addEventListener('click', closeSearchBoxModal)
modalSearchCloseBtn.addEventListener('click',closeSearchBoxModal)

navMobileCategories.addEventListener('click',openCategoriesModal)
overlay.addEventListener('click',closeCategoriesModal)
modalCategoriesCloseBtn.addEventListener('click',closeCategoriesModal)

// اجرای فیکس کردن هدر در بالای صفحه
// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('.header')
//     const headerHeight = header.offsetHeight
//     // create placeholder
//     const placeholder = document.createElement('div');
//     placeholder.className = 'header-placeholder';
//     header.parentNode.insertBefore(placeholder, header.nextSibling);

//     // create observer
//     const observer = new IntersectionObserver(([entery]) => {
//             if (!entery.isIntersecting) {
//                 header.classList.add('sticky');
//                 placeholder.style.display = 'block';
//                 placeholder.style.height = headerHeight + 'px';
//             } else {
//                 header.classList.remove('sticky');
//                 placeholder.style.display = 'none';
//             }
//     }, { threshold: 0 , rootMargin: '0px 0px 0px 0px'});

//     // Observe the header
//     observer.observe(header);

//     // Update on resize
//     window.addEventListener('resize',function(){
//         const newHeight=header.offsetHeight;
//         if(header.classList.contains('sticky')){
//           placeholder.style.height = newHeight + 'px';  
//         }
//     })
// })

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    // Get the initial offset position of the header
    let headerOffsetTop = header.offsetTop;
    let headerHeight = header.offsetHeight;

    // Create a placeholder element to prevent content jump
    const placeholder = document.createElement('div');
    placeholder.className = 'header-placeholder';
    header.parentNode.insertBefore(placeholder, header.nextSibling);

    // Function to handle scroll event
    function handleScroll() {
        // Check if we've scrolled past the header
        if (window.pageYOffset > headerOffsetTop) {
            if (!header.classList.contains('sticky')) {
                header.classList.add('sticky');
                // Set placeholder height to match header height
                placeholder.style.height = headerHeight + 'px';
                placeholder.style.display = 'block';
            }
        } else {
            if (header.classList.contains('sticky')) {
                header.classList.remove('sticky');
                placeholder.style.display = 'none';
            }
        }
    }

    // Recalculate header position on window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            headerOffsetTop = header.offsetTop;
            headerHeight = header.offsetHeight;

            if (header.classList.contains('sticky')) {
                placeholder.style.height = headerHeight + 'px';
            }
        }, 100);
    });

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case page is already scrolled
    handleScroll();
});
