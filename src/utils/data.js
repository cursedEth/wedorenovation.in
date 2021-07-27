import React from 'react';

// icons for skills
import {
  FaRegClock,
  FaRegThumbsUp,
  FaUsers,
  FaMapMarkerAlt,
  FaRegChartBar,
  FaFlagCheckered,
} from 'react-icons/fa';

// icons for services
import {
  GiBrickWall,
  Gi3DStairs,
  GiPaintRoller,
  GiWaterSplash,
  GiAbstract036,
  GiTeePipe,
} from 'react-icons/gi';

// skills - [HOMEPAGE]
export const skills = [
  {
    id: 1,
    icon: <FaRegClock />,
    text: 'timely work',
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    text: 'locally owned',
  },
  {
    id: 3,
    icon: <FaFlagCheckered />,
    text: 'certified',
  },
  {
    id: 4,
    icon: <FaUsers />,
    text: 'experienced',
  },
  {
    id: 5,
    icon: <FaRegChartBar />,
    text: 'top quality',
  },
  {
    id: 6,
    icon: <FaRegThumbsUp />,
    text: 'best services',
  },
];

// services - [HOMEPAGE & SINGLE SERVICE PAGE]
export const services = [
  {
    id: 1,
    icon: <Gi3DStairs />,
    name: 'renovation',
    title: 'Remodeling, Renovation & Designing',
    desc: `Aren't you tired of the classic old looks of your house? Just like everything else, your house should change with time too! We can make that happen and we'll do it in a way that you won't be able to take your eyes off your house. We'll remodel your old simple bedrooms, kitchens, bathrooms, etc. to the latest trends and give them the modern look you deserve. We take complete responsibility providing you a wonderful ambiance It's not RENOVATION, it's RE-NEW-INNOVATION for us.`,
    quote: `Converting houses into homes since 1960s.`,
    image: [
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'remodeling-and-renovation',
  },

  {
    id: 2,
    icon: <GiBrickWall />,
    name: 'construction',
    title: 'Construction Services',
    desc: `With Home™ Renovation, you're not just building a house, you're making dreams happen!
    A home is the biggest investment most people will ever make and we make sure that your perfect home dream comes true. Aside from building homes, we build all kinds of offices, apartments, schools, colleges, factories, shops, showrooms, and buildings. We offer our clients direct access to a team of highly qualified and experienced specialists offering consultancy services in preliminary work, building design, construction management as well as construction supervision and maintenance work.`,
    quote: `Extraordinary service for extraordinary customers.`,
    image: [
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'construction',
  },

  {
    id: 3,
    icon: <GiPaintRoller />,
    name: 'painting',
    title: 'Painting Services',
    desc: `Give new looks to your walls and ceilings by our experience eye for design. We do all kinds of latest trendy designs, textures, patterns, and paints. Home™ Renovation guarantees you to present with the best of its confirmed experts. We interface you with very much prepared painters who will investigate every possibility while painting your home, office or business space. Home™ Renovation gives a scope of custom best painting services , taking into account a smooth, consistent experience and uncommon outcome in every place.`,
    quote: `Exceeding expectations is our motto.`,
    image: [
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'painting',
  },

  {
    id: 4,
    icon: <GiWaterSplash />,
    name: 'proofing',
    title: 'Waterproofing & Heatproofing',
    desc: `As your house gets old, it's very common to see dampness(silan) in the walls. You can keep repairing it with paint every year but it just increase the cost and the problem doesn't get solved. WELL, the solution is WATER PROOFING. Get your house water proofed by us at a very reasonable cost and we'll get rid of the problem once and for all.    
    We also do HEAT PROOFING. It is a simple and effective way to protect building Structure from harmful heat waves. This anti-heat system reflects heat backwards and It may be applied on concrete, wooden, metal structures so properties in hot sunny weather save energy and money`,
    quote: `We repair what your husband fixed.`,
    image: [
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'waterproofing-and-heatproofing',
  },

  {
    id: 5,
    icon: <GiAbstract036 />,
    name: 'decoration',
    title: 'Interior & Exterior Decoration',
    desc: 'Wolf prism affogato kombucha franzen biodiesel post-ironic taiyaki gluten-free meggings twee organic crucifix pop-up. Church-key hoodie actually, meh lo-fi echo park skateboard jean shorts everyday carry shaman slow-carb kogi butcher VHS schlitz. Helvetica mixtape subway tile, enamel pin bespoke bicycle rights fashion axe hell of lomo fam single-origin coffee. Tattooed chia semiotics irony, butcher austin gastropub locavore shaman vaporware fanny pack 3 wolf moon retro fingerstache readymade. Tattooed shabby chic hexagon, locavore pug semiotics microdosing.',
    quote: `Why do it yourself? Leave it to the pros.`,
    image: [
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'interior-and-exterior-decoration',
  },

  {
    id: 6,
    icon: <GiTeePipe />,
    name: 'others',
    title: 'Aluminum, uPVC, & Glass Work',
    desc: `We provide all kinds of other related services including ALUMINIUM and METAL works, uPVC, GLASS, and WOOD works. We also have a very experienced crew for PLUMBING services. This includes, but is not limited to creating doors and windows (metal as well as wood ones), fabircation sheets, glass windows, creating durable cost effective frames, fixing and repairing water pipes, and so much more. We have one and all the things you need to upgrade your place.`,
    quote: `Because you deserve the best.`,
    image: [
      'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    url: 'aluminium-upvc-glass-works',
  },
];

// reviews - [HOMEPAGE]
export const reviews = [
  {
    id: 1,
    name: 'susan smith',
    title: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    stars: 4.5,
  },
  {
    id: 2,
    name: 'anna johnson',
    title: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    stars: 5,
  },
  {
    id: 3,
    name: 'peter jones',
    title: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    stars: 5,
  },
  {
    id: 4,
    name: 'bill anderson',
    title: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    stars: 5,
  },
];

// gallery - [HOMEPAGE]
export const galleryWorks = [
  {
    id: 1,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/72138/pexels-photo-72138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/191648/pexels-photo-191648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 6,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 7,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 8,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 9,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 10,
    title: 'Panting Work',
    url: 'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

// team members - [WHO WE ARE]
export const teamMembers = [
  {
    id: 1,
    name: 'Durgesh',
    title: 'Developer & Digital Creator',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_600/v1627386088/sameer-renovation-website/team-members/IMG_20200304_104221_pldudd.webp',
    mail: '48durgesh.kumar@gmail.com',
    social: 'https://twitter.com/yodkwtf',
  },
  {
    id: 2,
    name: 'Riya',
    title: 'Employee',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1615844922/images%20of%20random%20people%20for%20projects/nine_pydfjt.webp',
  },
  {
    id: 3,
    name: 'John',
    title: 'Manager',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1615844924/images%20of%20random%20people%20for%20projects/seven_cmucen.webp',
  },
];

// questions - [FAQS]
export const questions = [
  {
    id: 1,
    ques: 'Do I have to allow the use of cookies?',
    ans: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    ques: 'How do I change my My Page password?',
    ans: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    ques: 'What is BankID?',
    ans: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    ques: 'Whose birth number can I use?',
    ans: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    ques: 'When do I recieve a password ordered by letter?',
    ans: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
];
