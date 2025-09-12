import PoodleTinyYellow1 from './assets/images/dogs/Poodle-Tiny-Yellow-1.png';
import PoodleTinySepia1 from './assets/images/dogs/Poodle-Tiny-Sepia-1.png';
import AlaskanMalamute1 from './assets/images/dogs/Alaskan-Malamute-1.png';
import ShibaInu1 from './assets/images/dogs/shiba-inu-1.png';
import Reflex from './assets/images/products/reflet.png';
import Salmon from './assets/images/products/salmon.png';
import Kiten from './assets/images/products/kiten.png';
import Cutepet from './assets/images/products/cutepet.png';
import Megagold from './assets/images/products/megagold.png';
import Rider from './assets/images/products/rider.png';
import Costumes from './assets/images/products/costumes.png';
import Plushpet from './assets/images/products/plushpet.png';
import Pomeranian from './assets/images/dogs/Pomeranian.png';
import Dogsbite from './assets/images/dogs/dogsbite.png';
import Dogdiet from './assets/images/dogs/dogdiet.png';
import Customer1 from './assets/images/lovelycustomer/image 22.png';
import Customer2 from './assets/images/lovelycustomer/image 22 (1).png';
import Customer3 from './assets/images/lovelycustomer/image 22 (2).png';
import Customer4 from './assets/images/lovelycustomer/image 22 (3).png';
import Customer5 from './assets/images/lovelycustomer/image 22 (4).png';

import GalleryTiny2 from './assets/images/dogs/Poodle-Tiny-Yellow-2.png';
import GalleryTiny3 from './assets/images/dogs/Poodle-Tiny-Yellow-3.png';
import GalleryTiny4 from './assets/images/dogs/Poodle-Tiny-Yellow-4.png';
import GalleryTiny5 from './assets/images/dogs/Poodle-Tiny-Yellow-5.png';

import GallerySepia2 from './assets/images/dogs/Poodle-Tiny-Sepia-2.jpg.png';
import GallerySepia3 from './assets/images/dogs/Poodle-Tiny-Sepia-3.jpg.png';
import GallerySepia4 from './assets/images/dogs/Poodle-Tiny-Sepia-4.jpg.png';
import GallerySepia5 from './assets/images/dogs/Poodle-Tiny-Sepia-5.jpg.png';

import GalleryMalamute2 from './assets/images/dogs/Alaskan-Malamute-2.png';
import GalleryMalamute3 from './assets/images/dogs/Alaskan-Malamute-3.png';
import GalleryMalamute4 from './assets/images/dogs/Alaskan-Malamute-4.png';
import GalleryMalamute5 from './assets/images/dogs/Alaskan-Malamute-5.png';

// import GalleryShiba2 from './assets/images/dogs/shiba-inu-2.jpg';
// import GalleryShiba3 from './assets/images/dogs/shiba-inu-3.jpg';
// import GalleryShiba4 from './assets/images/dogs/shiba-inu-4.jpg';
// import GalleryShiba5 from './assets/images/dogs/shiba-inu-5.jpg';

export const animals = [
    {
        sku: "MO502",
        name: "Poodle Tiny Yellow",
        breed: "Poodle",
        age: "02 months",
        gender: "Female",
        location: "Vietnam",
        color: "Yellow",
        size: "Small",
        price: "3.900.000 VND",
        image: PoodleTinyYellow1,
        gallery: [
            GalleryTiny2,
            GalleryTiny3,
            GalleryTiny4,
            GalleryTiny5,
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: false,
        cert: true,
        reviews: [
            {
                author: "Customer 1",
                comment: "Très joueur et affectueux, parfait pour la famille !",
                photo: "images/review1.jpg"
            },
            {
                author: "Customer 2",
                comment: "Un chiot adorable, en bonne santé.",
                photo: "images/review2.jpg"
            }
        ]
    },
    {
        sku: "MO102",
        name: "Poodle Tiny Sepia",
        breed: "Poodle",
        age: "02 months",
        gender: "Male",
        location: "Vietnam",
        color: "Sepia",
        size: "Small",
        price: "6.000.000 VND",
        image: PoodleTinySepia1,
        gallery: [
            GallerySepia2,
            GallerySepia3,
            GallerySepia4,
            GallerySepia5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 3",
                comment: "Très calme et bien dressé dès le début.",
                photo: "images/review3.jpg"
            }
        ]
    },
    {
        sku: "MO512",
        name: "Alaskan mute Grey",
        breed: "Alaskan Malamute",
        age: "02 months",
        gender: "Male",
        location: "Vietnam",
        color: "Grey",
        size: "Small",
        price: "8.900.000 VND",
        image: AlaskanMalamute1,
        gallery: [
            GalleryMalamute2,
            GalleryMalamute3,
            GalleryMalamute4,
            GalleryMalamute5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 4",
                comment: "Très énergique, mais tellement affectueux.",
                photo: "images/review4.jpg"
            }
        ]
    },
    {
        sku: "MO10078",
        name: "Shiba Inu Sepia",
        breed: "Shiba Inu",
        age: "02 months",
        gender: "Female",
        location: "Vietnam",
        color: "Apricot & Tan",
        size: "Small",
        price: "34.000.000 VND",
        image: ShibaInu1,
        gallery: [
            GalleryTiny2,
            GalleryTiny3,
            GalleryTiny4,
            GalleryTiny5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure-bred Shiba Inu. Good body structure. With MKA cert and Microchip. Father from champion lineage.",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 5",
                comment: "Un chien magnifique et plein d'énergie.",
                photo: "images/review5.jpg"
            },
            {
                author: "Customer 6",
                comment: "Très sociable, il adore jouer avec les enfants.",
                photo: "images/review6.jpg"
            }
        ]
    },
    
    {
        sku: "MO102",
        name: "Poodle Tiny Sepia",
        breed: "Poodle",
        age: "02 months",
        gender: "Male",
        location: "Vietnam",
        color: "Sepia",
        size: "Small",
        price: "6.000.000 VND",
        image: PoodleTinySepia1,
        gallery: [
            GallerySepia2,
            GallerySepia3,
            GallerySepia4,
            GallerySepia5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 3",
                comment: "Très calme et bien dressé dès le début.",
                photo: "images/review3.jpg"
            }
        ]
    },
    {
        sku: "MO502",
        name: "Poodle Tiny Yellow",
        breed: "Poodle",
        age: "02 months",
        gender: "Female",
        location: "Vietnam",
        color: "Yellow",
        size: "Small",
        price: "3.900.000 VND",
        image: PoodleTinyYellow1,
        gallery: [
            GalleryTiny2,
            GalleryTiny3,
            GalleryTiny4,
            GalleryTiny5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: false,
        cert: true,
        reviews: [
            {
                author: "Customer 1",
                comment: "Très joueur et affectueux, parfait pour la famille !",
                photo: "images/review1.jpg"
            },
            {
                author: "Customer 2",
                comment: "Un chiot adorable, en bonne santé.",
                photo: "images/review2.jpg"
            }
        ]
    },
    {
        sku: "MO10078",
        name: "Shiba Inu Sepia",
        breed: "Shiba Inu",
        age: "02 months",
        gender: "Female",
        location: "Vietnam",
        color: "Apricot & Tan",
        size: "Small",
        price: "34.000.000 VND",
        image: ShibaInu1,
        gallery: [
            GalleryTiny2,
            GalleryTiny3,
            GalleryTiny4,
            GalleryTiny5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure-bred Shiba Inu. Good body structure. With MKA cert and Microchip. Father from champion lineage.",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 5",
                comment: "Un chien magnifique et plein d'énergie.",
                photo: "images/review5.jpg"
            },
            {
                author: "Customer 6",
                comment: "Très sociable, il adore jouer avec les enfants.",
                photo: "images/review6.jpg"
            }
        ]
    },
    {
        sku: "MO512",
        name: "Alaskan Mala Grey",
        breed: "Alaskan Malamute",
        age: "02 months",
        gender: "Male",
        location: "Vietnam",
        color: "Grey",
        size: "Small",
        price: "8.900.000 VND",
        image: AlaskanMalamute1,
        gallery: [
            GalleryMalamute2,
            GalleryMalamute3,
            GalleryMalamute4,
            GalleryMalamute5
        ],
        Publicate_date: "12-oct-2022",
        Additionnal_Informations: "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
        vaccinated: true,
        dewormed: true,
        microchip: true,
        cert: true,
        reviews: [
            {
                author: "Customer 4",
                comment: "Très énergique, mais tellement affectueux.",
                photo: "images/review4.jpg"
            }
        ]
    },
];

export const products = [
    {
        name: "Reflex Plus Adult Cat Food Salmon",
        product: "Dog Food",
        size: "385gm",
        price: "140.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Reflex,
    },
    {
        name: "Reflex Plus Adult Cat Food Salmon",
        product: "Cat Food",
        size: "1.5kg",
        price: "165.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Salmon,
    },
    {
        name: "Cat scratching ball toy kitten sisal rope ball",
        product: "Toy",
        price: "1.100.000 VND",
        gifts: "Free Cat Food",
        image: Kiten,
    },
    {
        name: "Cute Pet Cat Warm Nest",
        product: "Toy",
        price: "410.000 VND",
        gifts: "Free Cat Food",
        image: Cutepet,
    },
    {
        name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
        product: "Dog Food",
        size: "385gm",
        price: "350.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Megagold,
    },
    {
        name: "Reflex Plus Adult Cat Food Salmon",
        product: "Dog Food",
        size: "1.5kg",
        price: "500.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Rider,
    },
    {
        name: "Costumes Chicken Drumsti ck Headband",
        product: "Costume",
        price: "400.000 VND",
        gifts: "Free Cat Food",
        image: Costumes,
    },
    {
        name: "Plush Pet Toy",
        product: "Toy",
        price: "250.000 VND",
        gifts: "Free Food & Shaker",
        image: Plushpet,
    },
]

export const knowledges = [
    {
        title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
        description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
        image: Pomeranian,
    },
    {
        title: "Dog Diet You Need To Know",
        description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        image: Dogdiet,
    },
    {
        title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
        description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        image: Dogsbite,
    },
]

export const lovelycustomers = [
    {
        image: Customer1,
    },
    {
        image: Customer2,
    },
    {
        image: Customer3,
    },
    {
        image: Customer4,
    },
    {
        image: Customer5,
    }
]
