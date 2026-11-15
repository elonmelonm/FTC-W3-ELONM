import PoodleTinyYellow1 from './assets/images/dogs/Poodle-Tiny-Yellow-1.webp';
import PoodleTinySepia1 from './assets/images/dogs/Poodle-Tiny-Sepia-1.webp';
import AlaskanMalamute1 from './assets/images/dogs/Alaskan-Malamute-1.webp';
import ShibaInu1 from './assets/images/dogs/shiba-inu-1.webp';
import Reflex from './assets/images/products/reflet.webp';
import Salmon from './assets/images/products/salmon.webp';
import Kiten from './assets/images/products/kiten.webp';
import Cutepet from './assets/images/products/cutepet.webp';
import Megagold from './assets/images/products/megagold.webp';
import Rider from './assets/images/products/rider.webp';
import Costumes from './assets/images/products/costumes.webp';
import Plushpet from './assets/images/products/plushpet.webp';
import Pomeranian from './assets/images/dogs/Pomeranian.webp';
import Dogsbite from './assets/images/dogs/dogsbite.webp';
import Dogdiet from './assets/images/dogs/dogdiet.webp';
import Customer1 from './assets/images/lovelycustomer/image 22.webp';
import Customer2 from './assets/images/lovelycustomer/image 22 (1).webp';
import Customer3 from './assets/images/lovelycustomer/image 22 (2).webp';
import Customer4 from './assets/images/lovelycustomer/image 22 (3).webp';
import Customer5 from './assets/images/lovelycustomer/image 22 (4).webp';

import GalleryTiny2 from './assets/images/dogs/Poodle-Tiny-Yellow-2.webp';
import GalleryTiny3 from './assets/images/dogs/Poodle-Tiny-Yellow-3.webp';
import GalleryTiny4 from './assets/images/dogs/Poodle-Tiny-Yellow-4.webp';
import GalleryTiny5 from './assets/images/dogs/Poodle-Tiny-Yellow-5.webp';

import GallerySepia2 from './assets/images/dogs/Poodle-Tiny-Sepia-2.webp';
import GallerySepia3 from './assets/images/dogs/Poodle-Tiny-Sepia-3.webp';
import GallerySepia4 from './assets/images/dogs/Poodle-Tiny-Sepia-4.webp';
import GallerySepia5 from './assets/images/dogs/Poodle-Tiny-Sepia-5.webp';

import GalleryMalamute2 from './assets/images/dogs/Alaskan-Malamute-2.webp';
import GalleryMalamute3 from './assets/images/dogs/Alaskan-Malamute-3.webp';
import GalleryMalamute4 from './assets/images/dogs/Alaskan-Malamute-4.webp';
import GalleryMalamute5 from './assets/images/dogs/Alaskan-Malamute-5.webp';

// Fiche commune : seules les valeurs qui changent d'un chiot à l'autre sont passées.
const pet = (id, sku, name, gender, price, image, gallery, extra = {}) => ({
    id,
    sku,
    name,
    breed: name,
    age: "02 months",
    gender,
    location: "Vietnam",
    color: "Apricot & Tan",
    size: "Small",
    price,
    image,
    // La première vignette est toujours la photo principale, comme dans la maquette.
    gallery: [image, ...gallery],
    Publicate_date: "12-Oct-2022",
    Additionnal_Informations: "Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.",
    vaccinated: true,
    dewormed: true,
    microchip: true,
    cert: true,
    ...extra,
});

// Photos du projet (les noms de fichiers ne correspondent pas tous à la race affichée).
const PomeranianWhite = GalleryMalamute3;
const PoodleYellow = GalleryTiny2;
const PoodleSepia = PoodleTinySepia1;
const MalamuteGrey = GalleryMalamute2;
const CorgiCream = GalleryMalamute5;
const CorgiTricolor = PoodleTinyYellow1;
const PomeranianGrey = AlaskanMalamute1;
const PoodleDairyCow = GalleryTiny3;

// Ordre et contenu de la section « Whats new? » de la maquette.
export const animals = [
    pet("pomeranian-white", "MO231", "Pomeranian White", "Male", "6.900.000 VND", PomeranianWhite, [PomeranianGrey, CorgiCream, MalamuteGrey, PoodleDairyCow], { color: "White" }),
    pet("poodle-tiny-yellow", "MO502", "Poodle Tiny Yellow", "Female", "3.900.000 VND", PoodleYellow, [GalleryTiny5, PoodleDairyCow, CorgiTricolor, GalleryTiny4], { color: "Yellow" }),
    pet("poodle-tiny-sepia", "MO102", "Poodle Tiny Sepia", "Male", "4.000.000 VND", PoodleSepia, [GallerySepia4, GallerySepia2, GallerySepia3, GallerySepia5], { color: "Sepia" }),
    pet("alaskan-malamute-grey", "MO512", "Alaskan Malamute Grey", "Male", "8.900.000 VND", MalamuteGrey, [GalleryMalamute4, PomeranianWhite, GalleryMalamute5, PomeranianGrey], { color: "Grey" }),
    pet("pembroke-corgi-cream", "MO231", "Pembroke Corgi Cream", "Male", "7.900.000 VND", CorgiCream, [GallerySepia2, CorgiTricolor, GalleryTiny4, GallerySepia5], { color: "Cream" }),
    pet("pembroke-corgi-tricolor", "MO502", "Pembroke Corgi Tricolor", "Female", "9.000.000 VND", CorgiTricolor, [GalleryTiny4, CorgiCream, GallerySepia2, PoodleYellow], { color: "Tricolor" }),
    pet("pomeranian-grey", "MO231", "Pomeranian White", "Female", "6.500.000 VND", PomeranianGrey, [GalleryMalamute4, PomeranianWhite, MalamuteGrey, CorgiCream], { color: "Black & White" }),
    pet("poodle-tiny-dairy-cow", "MO512", "Poodle Tiny Dairy Cow", "Male", "5.000.000 VND", PoodleDairyCow, [PoodleYellow, GalleryTiny5, PomeranianGrey, PoodleSepia], { color: "Black & White" }),
];

// Chiot présenté sur la maquette « Product detail ».
export const featuredAnimal = pet("shiba-inu-sepia", "1000078", "Shiba Inu Sepia", "Female", "34.000.000 VND", ShibaInu1, [CorgiCream, CorgiTricolor, PoodleYellow, PoodleSepia], {
    age: "2 Months",
    color: "Appricot & Tan",
    category: "Large Dog",
});

// Grille de la page catégorie : 15 cartes, dans l'ordre de la maquette.
const categoryOrder = [1, 2, 3, 5, 4, 6, 7, 3, 0, 1, 2, 3, 5, 4, 6];
export const categoryAnimals = categoryOrder.map((index) => animals[index]);

// Recherche par identifiant, limitée au catalogue connu (liste blanche).
export const findAnimal = (id) =>
    [featuredAnimal, ...animals].find((animal) => animal.id === id) ?? null;

export const products = [
    {
        name: "Reflex Plus Adult Cat Food Salmon",
        product: "Dog Food",
        size: "385gm",
        price: "140.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Reflex,
        packshot: true,
    },
    {
        name: "Reflex Plus Adult Cat Food Salmon",
        product: "Cat Food",
        size: "1.5kg",
        price: "165.000 VND",
        gifts: "Free Toy & Free Shaker",
        image: Salmon,
        packshot: true,
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
        packshot: true,
    },
    {
        name: "Costumes Fashion Pet Clother Cowboy Rider",
        product: "Costume",
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
