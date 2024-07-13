import React from 'react';
import ProductCard from './ProductCard';
import './product.css';

function NavBar () {
  
    return (
        <div className="navbar">
            <div className="nav-item">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 19V10.5C20.5 10.3448 20.4639 10.1916 20.3944 10.0528C20.325 9.91393 20.2242 9.79315 20.1 9.7L13.1 4.45C12.9269 4.32018 12.7164 4.25 12.5 4.25C12.2836 4.25 12.0731 4.32018 11.9 4.45L4.9 9.7C4.7758 9.79315 4.675 9.91393 4.60557 10.0528C4.53614 10.1916 4.5 10.3448 4.5 10.5V19C4.5 19.2652 4.60536 19.5196 4.79289 19.7071C4.98043 19.8946 5.23478 20 5.5 20H9.5C9.76522 20 10.0196 19.8946 10.2071 19.7071C10.3946 19.5196 10.5 19.2652 10.5 19V16C10.5 15.7348 10.6054 15.4804 10.7929 15.2929C10.9804 15.1054 11.2348 15 11.5 15H13.5C13.7652 15 14.0196 15.1054 14.2071 15.2929C14.3946 15.4804 14.5 15.7348 14.5 16V19C14.5 19.2652 14.6054 19.5196 14.7929 19.7071C14.9804 19.8946 15.2348 20 15.5 20H19.5C19.7652 20 20.0196 19.8946 20.2071 19.7071C20.3946 19.5196 20.5 19.2652 20.5 19Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Home</span>
            </div>
            <div className="nav-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_0_637" maskUnits="userSpaceOnUse" x="2.5" y="5" width="17" height="17" fill="black">
            <rect fill="white" x="2.5" y="5" width="17" height="17"/>
            <path d="M10.9902 10.2998C10.5444 10.2998 10.1292 10.3834 9.74466 10.5506C9.36013 10.7178 9.02019 10.9463 8.72483 11.2361C8.42946 11.5258 8.19819 11.8686 8.031 12.2643C7.86381 12.6599 7.78022 13.0751 7.78022 13.5098C7.78022 13.9556 7.86381 14.3708 8.031 14.7553C8.19819 15.1399 8.42668 15.4798 8.71647 15.7752C9.00626 16.0705 9.3462 16.3018 9.7363 16.469C10.1264 16.6362 10.5444 16.7198 10.9902 16.7198C11.4305 16.7198 11.8456 16.6362 12.2357 16.469C12.6258 16.3018 12.9658 16.0733 13.2556 15.7835C13.5454 15.4937 13.7766 15.1538 13.9494 14.7637C14.1222 14.3736 14.2058 13.9556 14.2002 13.5098C14.2002 13.288 14.1765 13.0663 14.1291 12.8445C14.086 12.6431 14.2307 12.4398 14.4366 12.4398H14.9022C15.0399 12.4398 15.1609 12.5333 15.1875 12.6684C15.2076 12.7705 15.224 12.8727 15.2367 12.9748C15.259 13.1531 15.2702 13.3315 15.2702 13.5098C15.2702 14.1005 15.1587 14.655 14.9358 15.1733C14.7129 15.6916 14.4064 16.143 14.0163 16.5275C13.6262 16.912 13.172 17.2186 12.6537 17.447C12.1354 17.6755 11.5809 17.7898 10.9902 17.7898C10.3995 17.7898 9.84498 17.6783 9.3267 17.4554C8.80842 17.2325 8.35702 16.926 7.97249 16.5359C7.58796 16.1458 7.28145 15.6916 7.05296 15.1733C6.82447 14.655 6.71301 14.1005 6.71859 13.5098C6.71859 12.9191 6.83004 12.3646 7.05296 11.8463C7.27588 11.328 7.5796 10.8766 7.96413 10.4921C8.34866 10.1075 8.80285 9.80104 9.3267 9.57255C9.85055 9.34406 10.4051 9.22982 10.9902 9.22982C11.1685 9.22982 11.3469 9.24097 11.5252 9.26326C11.6273 9.27602 11.7295 9.29245 11.8316 9.31253C11.9667 9.33908 12.0602 9.46014 12.0602 9.5978V10.0634C12.0602 10.2693 11.8569 10.414 11.6555 10.3709C11.4337 10.3235 11.212 10.2998 10.9902 10.2998ZM17.861 11.9639C18.0245 11.8004 18.3019 11.8762 18.3457 12.1033C18.4353 12.5676 18.4802 13.0365 18.4802 13.5098C18.4802 14.1953 18.391 14.8556 18.2127 15.491C18.0343 16.1263 17.7836 16.7226 17.4603 17.2799C17.1371 17.8371 16.7442 18.3443 16.2817 18.8013C15.8191 19.2582 15.3148 19.6483 14.7686 19.9716C14.2225 20.2948 13.6262 20.5484 12.9797 20.7323C12.3333 20.9162 11.6701 21.0053 10.9902 20.9998C10.3047 20.9998 9.64435 20.9106 9.00904 20.7323C8.37373 20.5539 7.77744 20.3031 7.22015 19.9799C6.66286 19.6567 6.15573 19.2638 5.69875 18.8013C5.24177 18.3387 4.85167 17.8344 4.52844 17.2882C4.20522 16.7421 3.95165 16.1458 3.76774 15.4993C3.58384 14.8529 3.49467 14.1897 3.50025 13.5098C3.50025 12.8243 3.58941 12.1639 3.76774 11.5286C3.94608 10.8933 4.19686 10.297 4.52008 9.73974C4.84331 9.18245 5.2362 8.67532 5.69875 8.21834C6.1613 7.76137 6.66564 7.37126 7.21179 7.04804C7.75793 6.72481 8.35423 6.47124 9.00068 6.28734C9.64714 6.10343 10.3103 6.01427 10.9902 6.01984C11.4635 6.01984 11.9324 6.06465 12.3967 6.15428C12.6238 6.19811 12.6996 6.4755 12.5361 6.63902L12.0726 7.10253C12.0646 7.11046 12.0602 7.12121 12.0602 7.13241C12.0602 7.15835 12.037 7.17816 12.0114 7.1743C11.8493 7.1499 11.6873 7.1301 11.5252 7.11491C11.3469 7.09819 11.1685 7.08983 10.9902 7.08983C10.3995 7.08983 9.83104 7.16507 9.2849 7.31553C8.73876 7.466 8.22884 7.68334 7.75514 7.96756C7.28145 8.25178 6.84676 8.58615 6.45109 8.97068C6.05541 9.35521 5.72104 9.78711 5.44797 10.2664C5.1749 10.7456 4.96034 11.2584 4.8043 11.8045C4.64826 12.3506 4.57024 12.9191 4.57024 13.5098C4.57024 14.1005 4.64547 14.669 4.79594 15.2151C4.94641 15.7612 5.16375 16.2712 5.44797 16.7449C5.73219 17.2186 6.06656 17.6532 6.45109 18.0489C6.83562 18.4446 7.26752 18.779 7.74678 19.052C8.22605 19.3251 8.73876 19.5397 9.2849 19.6957C9.83104 19.8517 10.3995 19.9298 10.9902 19.9298C11.5809 19.9298 12.1494 19.8545 12.6955 19.7041C13.2416 19.5536 13.7516 19.3362 14.2253 19.052C14.699 18.7678 15.1336 18.4334 15.5293 18.0489C15.925 17.6644 16.2594 17.2325 16.5324 16.7532C16.8055 16.2739 17.0201 15.7612 17.1761 15.2151C17.3321 14.669 17.4102 14.1005 17.4102 13.5098C17.4102 13.3315 17.4018 13.1531 17.3851 12.9748C17.3699 12.8127 17.3501 12.6507 17.3257 12.4886C17.3218 12.463 17.3416 12.4398 17.3676 12.4398C17.3788 12.4398 17.3895 12.4354 17.3975 12.4274L17.861 11.9639ZM13.0423 10.697C13.0986 10.6407 13.1302 10.5644 13.1302 10.4848V8.33425C13.1302 8.25468 13.1618 8.17838 13.2181 8.12211L15.828 5.51213C16.017 5.32314 16.3402 5.45699 16.3402 5.72426V7.85983C16.3402 8.02551 16.4745 8.15983 16.6402 8.15983H18.7757C19.043 8.15983 19.1769 8.48297 18.9879 8.67196L16.3779 11.2819C16.3216 11.3382 16.2453 11.3698 16.1658 11.3698H14.0152C13.9356 11.3698 13.8593 11.4014 13.803 11.4577L12.1491 13.1116C12.0734 13.1873 12.0467 13.2976 12.0558 13.4042C12.0587 13.4383 12.0602 13.4735 12.0602 13.5098C12.0602 13.6603 12.0323 13.7996 11.9766 13.9278C11.9209 14.0559 11.8456 14.1674 11.7509 14.2621C11.6562 14.3569 11.5419 14.4349 11.4082 14.4962C11.2744 14.5575 11.1351 14.5854 10.9902 14.5798C10.8397 14.5798 10.7004 14.5519 10.5722 14.4962C10.4441 14.4405 10.3326 14.3652 10.2379 14.2705C10.1431 14.1758 10.0651 14.0615 10.0038 13.9278C9.9425 13.794 9.91464 13.6547 9.92021 13.5098C9.92021 13.3593 9.94807 13.22 10.0038 13.0918C10.0595 12.9637 10.1348 12.8522 10.2295 12.7575C10.3242 12.6627 10.4385 12.5847 10.5722 12.5234C10.706 12.4621 10.8453 12.4342 10.9902 12.4398C11.0265 12.4398 11.0617 12.4413 11.0958 12.4442C11.2024 12.4533 11.3127 12.4266 11.3884 12.3509L13.0423 10.697ZM14.2002 9.99981C14.2002 10.1655 14.3345 10.2998 14.5002 10.2998H15.7227C15.8023 10.2998 15.8786 10.2682 15.9348 10.2119L16.4048 9.74195C16.5938 9.55296 16.46 9.22982 16.1927 9.22982H15.5702C15.4045 9.22982 15.2702 9.09551 15.2702 8.92982V8.3073C15.2702 8.04003 14.947 7.90618 14.758 8.09516L14.2881 8.56516C14.2318 8.62142 14.2002 8.69773 14.2002 8.77729V9.99981Z"/>
            </mask>
            <path d="M10.9902 10.2998C10.5444 10.2998 10.1292 10.3834 9.74466 10.5506C9.36013 10.7178 9.02019 10.9463 8.72483 11.2361C8.42946 11.5258 8.19819 11.8686 8.031 12.2643C7.86381 12.6599 7.78022 13.0751 7.78022 13.5098C7.78022 13.9556 7.86381 14.3708 8.031 14.7553C8.19819 15.1399 8.42668 15.4798 8.71647 15.7752C9.00626 16.0705 9.3462 16.3018 9.7363 16.469C10.1264 16.6362 10.5444 16.7198 10.9902 16.7198C11.4305 16.7198 11.8456 16.6362 12.2357 16.469C12.6258 16.3018 12.9658 16.0733 13.2556 15.7835C13.5454 15.4937 13.7766 15.1538 13.9494 14.7637C14.1222 14.3736 14.2058 13.9556 14.2002 13.5098C14.2002 13.288 14.1765 13.0663 14.1291 12.8445C14.086 12.6431 14.2307 12.4398 14.4366 12.4398H14.9022C15.0399 12.4398 15.1609 12.5333 15.1875 12.6684C15.2076 12.7705 15.224 12.8727 15.2367 12.9748C15.259 13.1531 15.2702 13.3315 15.2702 13.5098C15.2702 14.1005 15.1587 14.655 14.9358 15.1733C14.7129 15.6916 14.4064 16.143 14.0163 16.5275C13.6262 16.912 13.172 17.2186 12.6537 17.447C12.1354 17.6755 11.5809 17.7898 10.9902 17.7898C10.3995 17.7898 9.84498 17.6783 9.3267 17.4554C8.80842 17.2325 8.35702 16.926 7.97249 16.5359C7.58796 16.1458 7.28145 15.6916 7.05296 15.1733C6.82447 14.655 6.71301 14.1005 6.71859 13.5098C6.71859 12.9191 6.83004 12.3646 7.05296 11.8463C7.27588 11.328 7.5796 10.8766 7.96413 10.4921C8.34866 10.1075 8.80285 9.80104 9.3267 9.57255C9.85055 9.34406 10.4051 9.22982 10.9902 9.22982C11.1685 9.22982 11.3469 9.24097 11.5252 9.26326C11.6273 9.27602 11.7295 9.29245 11.8316 9.31253C11.9667 9.33908 12.0602 9.46014 12.0602 9.5978V10.0634C12.0602 10.2693 11.8569 10.414 11.6555 10.3709C11.4337 10.3235 11.212 10.2998 10.9902 10.2998ZM17.861 11.9639C18.0245 11.8004 18.3019 11.8762 18.3457 12.1033C18.4353 12.5676 18.4802 13.0365 18.4802 13.5098C18.4802 14.1953 18.391 14.8556 18.2127 15.491C18.0343 16.1263 17.7836 16.7226 17.4603 17.2799C17.1371 17.8371 16.7442 18.3443 16.2817 18.8013C15.8191 19.2582 15.3148 19.6483 14.7686 19.9716C14.2225 20.2948 13.6262 20.5484 12.9797 20.7323C12.3333 20.9162 11.6701 21.0053 10.9902 20.9998C10.3047 20.9998 9.64435 20.9106 9.00904 20.7323C8.37373 20.5539 7.77744 20.3031 7.22015 19.9799C6.66286 19.6567 6.15573 19.2638 5.69875 18.8013C5.24177 18.3387 4.85167 17.8344 4.52844 17.2882C4.20522 16.7421 3.95165 16.1458 3.76774 15.4993C3.58384 14.8529 3.49467 14.1897 3.50025 13.5098C3.50025 12.8243 3.58941 12.1639 3.76774 11.5286C3.94608 10.8933 4.19686 10.297 4.52008 9.73974C4.84331 9.18245 5.2362 8.67532 5.69875 8.21834C6.1613 7.76137 6.66564 7.37126 7.21179 7.04804C7.75793 6.72481 8.35423 6.47124 9.00068 6.28734C9.64714 6.10343 10.3103 6.01427 10.9902 6.01984C11.4635 6.01984 11.9324 6.06465 12.3967 6.15428C12.6238 6.19811 12.6996 6.4755 12.5361 6.63902L12.0726 7.10253C12.0646 7.11046 12.0602 7.12121 12.0602 7.13241C12.0602 7.15835 12.037 7.17816 12.0114 7.1743C11.8493 7.1499 11.6873 7.1301 11.5252 7.11491C11.3469 7.09819 11.1685 7.08983 10.9902 7.08983C10.3995 7.08983 9.83104 7.16507 9.2849 7.31553C8.73876 7.466 8.22884 7.68334 7.75514 7.96756C7.28145 8.25178 6.84676 8.58615 6.45109 8.97068C6.05541 9.35521 5.72104 9.78711 5.44797 10.2664C5.1749 10.7456 4.96034 11.2584 4.8043 11.8045C4.64826 12.3506 4.57024 12.9191 4.57024 13.5098C4.57024 14.1005 4.64547 14.669 4.79594 15.2151C4.94641 15.7612 5.16375 16.2712 5.44797 16.7449C5.73219 17.2186 6.06656 17.6532 6.45109 18.0489C6.83562 18.4446 7.26752 18.779 7.74678 19.052C8.22605 19.3251 8.73876 19.5397 9.2849 19.6957C9.83104 19.8517 10.3995 19.9298 10.9902 19.9298C11.5809 19.9298 12.1494 19.8545 12.6955 19.7041C13.2416 19.5536 13.7516 19.3362 14.2253 19.052C14.699 18.7678 15.1336 18.4334 15.5293 18.0489C15.925 17.6644 16.2594 17.2325 16.5324 16.7532C16.8055 16.2739 17.0201 15.7612 17.1761 15.2151C17.3321 14.669 17.4102 14.1005 17.4102 13.5098C17.4102 13.3315 17.4018 13.1531 17.3851 12.9748C17.3699 12.8127 17.3501 12.6507 17.3257 12.4886C17.3218 12.463 17.3416 12.4398 17.3676 12.4398C17.3788 12.4398 17.3895 12.4354 17.3975 12.4274L17.861 11.9639ZM13.0423 10.697C13.0986 10.6407 13.1302 10.5644 13.1302 10.4848V8.33425C13.1302 8.25468 13.1618 8.17838 13.2181 8.12211L15.828 5.51213C16.017 5.32314 16.3402 5.45699 16.3402 5.72426V7.85983C16.3402 8.02551 16.4745 8.15983 16.6402 8.15983H18.7757C19.043 8.15983 19.1769 8.48297 18.9879 8.67196L16.3779 11.2819C16.3216 11.3382 16.2453 11.3698 16.1658 11.3698H14.0152C13.9356 11.3698 13.8593 11.4014 13.803 11.4577L12.1491 13.1116C12.0734 13.1873 12.0467 13.2976 12.0558 13.4042C12.0587 13.4383 12.0602 13.4735 12.0602 13.5098C12.0602 13.6603 12.0323 13.7996 11.9766 13.9278C11.9209 14.0559 11.8456 14.1674 11.7509 14.2621C11.6562 14.3569 11.5419 14.4349 11.4082 14.4962C11.2744 14.5575 11.1351 14.5854 10.9902 14.5798C10.8397 14.5798 10.7004 14.5519 10.5722 14.4962C10.4441 14.4405 10.3326 14.3652 10.2379 14.2705C10.1431 14.1758 10.0651 14.0615 10.0038 13.9278C9.9425 13.794 9.91464 13.6547 9.92021 13.5098C9.92021 13.3593 9.94807 13.22 10.0038 13.0918C10.0595 12.9637 10.1348 12.8522 10.2295 12.7575C10.3242 12.6627 10.4385 12.5847 10.5722 12.5234C10.706 12.4621 10.8453 12.4342 10.9902 12.4398C11.0265 12.4398 11.0617 12.4413 11.0958 12.4442C11.2024 12.4533 11.3127 12.4266 11.3884 12.3509L13.0423 10.697ZM14.2002 9.99981C14.2002 10.1655 14.3345 10.2998 14.5002 10.2998H15.7227C15.8023 10.2998 15.8786 10.2682 15.9348 10.2119L16.4048 9.74195C16.5938 9.55296 16.46 9.22982 16.1927 9.22982H15.5702C15.4045 9.22982 15.2702 9.09551 15.2702 8.92982V8.3073C15.2702 8.04003 14.947 7.90618 14.758 8.09516L14.2881 8.56516C14.2318 8.62142 14.2002 8.69773 14.2002 8.77729V9.99981Z" fill="#B5B5B5"/>
            <path d="M10.9902 10.2998C10.5444 10.2998 10.1292 10.3834 9.74466 10.5506C9.36013 10.7178 9.02019 10.9463 8.72483 11.2361C8.42946 11.5258 8.19819 11.8686 8.031 12.2643C7.86381 12.6599 7.78022 13.0751 7.78022 13.5098C7.78022 13.9556 7.86381 14.3708 8.031 14.7553C8.19819 15.1399 8.42668 15.4798 8.71647 15.7752C9.00626 16.0705 9.3462 16.3018 9.7363 16.469C10.1264 16.6362 10.5444 16.7198 10.9902 16.7198C11.4305 16.7198 11.8456 16.6362 12.2357 16.469C12.6258 16.3018 12.9658 16.0733 13.2556 15.7835C13.5454 15.4937 13.7766 15.1538 13.9494 14.7637C14.1222 14.3736 14.2058 13.9556 14.2002 13.5098C14.2002 13.288 14.1765 13.0663 14.1291 12.8445C14.086 12.6431 14.2307 12.4398 14.4366 12.4398H14.9022C15.0399 12.4398 15.1609 12.5333 15.1875 12.6684C15.2076 12.7705 15.224 12.8727 15.2367 12.9748C15.259 13.1531 15.2702 13.3315 15.2702 13.5098C15.2702 14.1005 15.1587 14.655 14.9358 15.1733C14.7129 15.6916 14.4064 16.143 14.0163 16.5275C13.6262 16.912 13.172 17.2186 12.6537 17.447C12.1354 17.6755 11.5809 17.7898 10.9902 17.7898C10.3995 17.7898 9.84498 17.6783 9.3267 17.4554C8.80842 17.2325 8.35702 16.926 7.97249 16.5359C7.58796 16.1458 7.28145 15.6916 7.05296 15.1733C6.82447 14.655 6.71301 14.1005 6.71859 13.5098C6.71859 12.9191 6.83004 12.3646 7.05296 11.8463C7.27588 11.328 7.5796 10.8766 7.96413 10.4921C8.34866 10.1075 8.80285 9.80104 9.3267 9.57255C9.85055 9.34406 10.4051 9.22982 10.9902 9.22982C11.1685 9.22982 11.3469 9.24097 11.5252 9.26326C11.6273 9.27602 11.7295 9.29245 11.8316 9.31253C11.9667 9.33908 12.0602 9.46014 12.0602 9.5978V10.0634C12.0602 10.2693 11.8569 10.414 11.6555 10.3709C11.4337 10.3235 11.212 10.2998 10.9902 10.2998ZM17.861 11.9639C18.0245 11.8004 18.3019 11.8762 18.3457 12.1033C18.4353 12.5676 18.4802 13.0365 18.4802 13.5098C18.4802 14.1953 18.391 14.8556 18.2127 15.491C18.0343 16.1263 17.7836 16.7226 17.4603 17.2799C17.1371 17.8371 16.7442 18.3443 16.2817 18.8013C15.8191 19.2582 15.3148 19.6483 14.7686 19.9716C14.2225 20.2948 13.6262 20.5484 12.9797 20.7323C12.3333 20.9162 11.6701 21.0053 10.9902 20.9998C10.3047 20.9998 9.64435 20.9106 9.00904 20.7323C8.37373 20.5539 7.77744 20.3031 7.22015 19.9799C6.66286 19.6567 6.15573 19.2638 5.69875 18.8013C5.24177 18.3387 4.85167 17.8344 4.52844 17.2882C4.20522 16.7421 3.95165 16.1458 3.76774 15.4993C3.58384 14.8529 3.49467 14.1897 3.50025 13.5098C3.50025 12.8243 3.58941 12.1639 3.76774 11.5286C3.94608 10.8933 4.19686 10.297 4.52008 9.73974C4.84331 9.18245 5.2362 8.67532 5.69875 8.21834C6.1613 7.76137 6.66564 7.37126 7.21179 7.04804C7.75793 6.72481 8.35423 6.47124 9.00068 6.28734C9.64714 6.10343 10.3103 6.01427 10.9902 6.01984C11.4635 6.01984 11.9324 6.06465 12.3967 6.15428C12.6238 6.19811 12.6996 6.4755 12.5361 6.63902L12.0726 7.10253C12.0646 7.11046 12.0602 7.12121 12.0602 7.13241C12.0602 7.15835 12.037 7.17816 12.0114 7.1743C11.8493 7.1499 11.6873 7.1301 11.5252 7.11491C11.3469 7.09819 11.1685 7.08983 10.9902 7.08983C10.3995 7.08983 9.83104 7.16507 9.2849 7.31553C8.73876 7.466 8.22884 7.68334 7.75514 7.96756C7.28145 8.25178 6.84676 8.58615 6.45109 8.97068C6.05541 9.35521 5.72104 9.78711 5.44797 10.2664C5.1749 10.7456 4.96034 11.2584 4.8043 11.8045C4.64826 12.3506 4.57024 12.9191 4.57024 13.5098C4.57024 14.1005 4.64547 14.669 4.79594 15.2151C4.94641 15.7612 5.16375 16.2712 5.44797 16.7449C5.73219 17.2186 6.06656 17.6532 6.45109 18.0489C6.83562 18.4446 7.26752 18.779 7.74678 19.052C8.22605 19.3251 8.73876 19.5397 9.2849 19.6957C9.83104 19.8517 10.3995 19.9298 10.9902 19.9298C11.5809 19.9298 12.1494 19.8545 12.6955 19.7041C13.2416 19.5536 13.7516 19.3362 14.2253 19.052C14.699 18.7678 15.1336 18.4334 15.5293 18.0489C15.925 17.6644 16.2594 17.2325 16.5324 16.7532C16.8055 16.2739 17.0201 15.7612 17.1761 15.2151C17.3321 14.669 17.4102 14.1005 17.4102 13.5098C17.4102 13.3315 17.4018 13.1531 17.3851 12.9748C17.3699 12.8127 17.3501 12.6507 17.3257 12.4886C17.3218 12.463 17.3416 12.4398 17.3676 12.4398C17.3788 12.4398 17.3895 12.4354 17.3975 12.4274L17.861 11.9639ZM13.0423 10.697C13.0986 10.6407 13.1302 10.5644 13.1302 10.4848V8.33425C13.1302 8.25468 13.1618 8.17838 13.2181 8.12211L15.828 5.51213C16.017 5.32314 16.3402 5.45699 16.3402 5.72426V7.85983C16.3402 8.02551 16.4745 8.15983 16.6402 8.15983H18.7757C19.043 8.15983 19.1769 8.48297 18.9879 8.67196L16.3779 11.2819C16.3216 11.3382 16.2453 11.3698 16.1658 11.3698H14.0152C13.9356 11.3698 13.8593 11.4014 13.803 11.4577L12.1491 13.1116C12.0734 13.1873 12.0467 13.2976 12.0558 13.4042C12.0587 13.4383 12.0602 13.4735 12.0602 13.5098C12.0602 13.6603 12.0323 13.7996 11.9766 13.9278C11.9209 14.0559 11.8456 14.1674 11.7509 14.2621C11.6562 14.3569 11.5419 14.4349 11.4082 14.4962C11.2744 14.5575 11.1351 14.5854 10.9902 14.5798C10.8397 14.5798 10.7004 14.5519 10.5722 14.4962C10.4441 14.4405 10.3326 14.3652 10.2379 14.2705C10.1431 14.1758 10.0651 14.0615 10.0038 13.9278C9.9425 13.794 9.91464 13.6547 9.92021 13.5098C9.92021 13.3593 9.94807 13.22 10.0038 13.0918C10.0595 12.9637 10.1348 12.8522 10.2295 12.7575C10.3242 12.6627 10.4385 12.5847 10.5722 12.5234C10.706 12.4621 10.8453 12.4342 10.9902 12.4398C11.0265 12.4398 11.0617 12.4413 11.0958 12.4442C11.2024 12.4533 11.3127 12.4266 11.3884 12.3509L13.0423 10.697ZM14.2002 9.99981C14.2002 10.1655 14.3345 10.2998 14.5002 10.2998H15.7227C15.8023 10.2998 15.8786 10.2682 15.9348 10.2119L16.4048 9.74195C16.5938 9.55296 16.46 9.22982 16.1927 9.22982H15.5702C15.4045 9.22982 15.2702 9.09551 15.2702 8.92982V8.3073C15.2702 8.04003 14.947 7.90618 14.758 8.09516L14.2881 8.56516C14.2318 8.62142 14.2002 8.69773 14.2002 8.77729V9.99981Z" stroke="#B5B5B5" stroke-width="0.22" mask="url(#path-1-outside-1_0_637)"/>
            </svg>

                <span>Track</span>
            </div>
            <div className="nav-item">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0451 19.205L14.3289 15.4896C15.406 14.1965 15.9431 12.5379 15.8285 10.8589C15.7139 9.17986 14.9563 7.60967 13.7135 6.47495C12.4706 5.34023 10.8382 4.72835 9.15568 4.76658C7.47319 4.80482 5.87021 5.49024 4.6802 6.68024C3.49019 7.87025 2.80477 9.47324 2.76653 11.1557C2.7283 12.8382 3.34018 14.4707 4.4749 15.7135C5.60962 16.9564 7.17981 17.7139 8.85883 17.8285C10.5378 17.9432 12.1964 17.4061 13.4895 16.329L17.2049 20.0451C17.2601 20.1003 17.3256 20.1441 17.3977 20.1739C17.4697 20.2038 17.547 20.2191 17.625 20.2191C17.703 20.2191 17.7803 20.2038 17.8523 20.1739C17.9244 20.1441 17.9899 20.1003 18.0451 20.0451C18.1002 19.99 18.144 19.9245 18.1739 19.8524C18.2037 19.7803 18.2191 19.7031 18.2191 19.625C18.2191 19.547 18.2037 19.4698 18.1739 19.3977C18.144 19.3256 18.1002 19.2601 18.0451 19.205ZM3.96875 11.3125C3.96875 10.2557 4.28216 9.22249 4.86933 8.34372C5.45651 7.46494 6.29109 6.78002 7.26754 6.37557C8.24398 5.97111 9.31843 5.86529 10.355 6.07148C11.3916 6.27767 12.3438 6.78661 13.0911 7.53395C13.8384 8.28128 14.3474 9.23345 14.5536 10.27C14.7598 11.3066 14.6539 12.3811 14.2495 13.3575C13.845 14.334 13.1601 15.1685 12.2813 15.7557C11.4026 16.3429 10.3694 16.6563 9.3125 16.6563C7.89573 16.6547 6.53744 16.0912 5.53563 15.0894C4.53383 14.0876 3.97032 12.7293 3.96875 11.3125Z" fill="#B5B5B5"/>
</svg>

                <span>Search</span>
            </div>
            <div className="nav-item">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_647)">
<path d="M3.83334 19.5008V18.5563C3.83334 15.4267 6.37039 12.8896 9.5 12.8896H13.2778C16.4074 12.8896 18.9444 15.4267 18.9444 18.5563V19.5008" stroke="#B5B5B5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.3888 10.0556C9.30239 10.0556 7.61102 8.36419 7.61102 6.27778C7.61102 4.19137 9.30239 2.5 11.3888 2.5C13.4752 2.5 15.1666 4.19137 15.1666 6.27778C15.1666 8.36419 13.4752 10.0556 11.3888 10.0556Z" stroke="#B5B5B5" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_0_647">
<rect width="20" height="20" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

                <span>Account</span>
            </div>
          
        </div>
      
  );
};

export default NavBar;