export interface Review {
  name: string;
  date: string;
  image: string;
  text: string;
  game?: string;
  rating?: number;
}

export const REVIEWS: Review[] = [
  {
    name: "Gibby",
    date: "26/03/2026",
    image: "/gibby.webp",
    text: "Shoutout to Grand and the admin team, guys a wizard! My first proper PC for gaming and I had no clue but guy was able to easily explain everything he was doing and went the extra mile to make sure everything was how I wanted it with no issues. Man has a great skill set and great customer service skills, would highly recommend! Thanks again mate🤝",
    game: "PC Setup & Optimization",
    rating: 5
  },
  {
    name: "Cameron",
    date: "26/03/2026",
    image: "/Cameron.webp",
    text: "Highly recommend Grand did an amazing job optimising my pc, gained 150fps! Wouldn’t recommend anyone else, cheap and reliable to!!",
    game: "Call of Duty: Warzone",
    rating: 5
  },
  {
    name: "Johnson",
    date: "26/03/2026",
    image: "/johnson.webp",
    text: "Top man. Dealt with everything rapid style very helpful and informative along the way. Admins Even helped recommending a prebuild for my budget. Got my build running buttery smooth. Easily 10%+ fps boost along side better latency and input. Cant recommend enough!",
    game: "Fortnite",
    rating: 5
  },
  {
    name: "Kyro",
    date: "19/03/2026",
    image: "/kyro.webp",
    text: "Amazing at what he does even tho we both knew my pc specs wouldn’t get much boost my game is way smoother my ping feels more balanced and hit reg feels way better small jump in fps but still seeing a massive difference in game where im getting more fps and a way smoother game This man is a wizard and so speedy when it comes to this stuff and the support from his team is super impressive highly recommended",
    game: "Valorant",
    rating: 5
  },
  {
    name: "Dan",
    date: "3/19/2026",
    image: "/dan.webp",
    text: "Amazing at what he does even tho we both knew my pc specs wouldn’t get much boost my game is way smoother my ping feels more balanced and hit reg feels way better small jump in fps but still seeing a massive difference in game where im getting more fps and a way smoother game This man is a wizard and so speedy when it comes to this stuff and the support from his team is super impressive highly recommended",
    game: "Competitive Gaming",
    rating: 5
  },
  {
    name: "Rxwki",
    date: "3/19/2026",
    image: "/Rxwki.webp",
    text: "Highly recommend Grand the guy is a rocket sorting stuff out and shoutout to his team aswell for helping out game feel so much better and hit reg is better 👌👌",
    game: "Modern Warfare 3",
    rating: 5
  },
  {
    name: "Lien",
    date: "3/19/2026",
    image: "/lien.png",
    text: "Massive shoutout to Grand the guy is a wizard! After countless hours of sorting my shit pc I've gone from averaging 90ish fps to 150 fps in game which i didn't even think was possible. game runs smoother, bullet reg feels nice and no more stutters due to following his tips. his team also helped me massively with my cpu as it was running at 100 degrees and I would of never knew how bad it was.",
    game: "System Overhaul",
    rating: 5
  },
  {
    name: "Lanax",
    date: "15/03/2026",
    image: "/lax.webp",
    text: "The goat has went and done it again @Grand┃Head Optimiser huge difference and my game and pc feels the best it’s ever been delighted with the results no complaints ever the guys just a magician didn’t think my pc would get any better🐐",
    game: "Apex Legends",
    rating: 5
  },
  {
    name: "OJ",
    date: "06/03/2026",
    image: "/oj.webp",
    text: "Absolute legend @Grand┃Head Optimiser huge vouch! Made in game feel like a different game hit reg and packet burst issues gone and very smooth recommend to anyone looking for a opti top bloke",
    game: "Counter-Strike 2",
    rating: 5
  },
  {
    name: "Poro",
    date: "03/03/2026",
    image: "/poro.webp",
    text: "What a Chad, spent most of his afternoon working though my cursed PC sorted the game out so i could finaly play expo without being at 70 fps and also i got a fps increase thankyou my dude ",
    game: "Optimization Service",
    rating: 5
  }
];
