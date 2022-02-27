import React from 'react';

// icons for skills
import {
  FaRegClock,
  FaRegThumbsUp,
  FaUsers,
  FaShieldAlt,
  FaAward,
  FaHandsHelping,
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
    text: 'timely delivered work',
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    text: 'Upto 10 years material warranty',
  },
  {
    id: 3,
    icon: <FaHandsHelping />,
    text: '8000+ happy customers',
  },
  {
    id: 4,
    icon: <FaUsers />,
    text: 'skilled team members',
  },
  {
    id: 5,
    icon: <FaAward />,
    text: 'high quality work',
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
    desc: `Aren't you tired of the classic old looks of your house? Just like everything else, your house should change with time too! We can make that happen and we'll do it in a way that you won't be able to take your eyes off your house. We'll remodel your old simple bedrooms, kitchens, bathrooms, etc. to the latest trends and give them the modern look you deserve. We take complete responsibility providing you a wonderful ambiance. When we work with you, it's not RENOVATION, it's RE-NEW-INNOVATION.`,
    quote: `Converting houses into homes since 1960s.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627556080/sameer-renovation-website/services/renovation/im3rd-media-FJZtZldA-uE-unsplash-min_nrvpkj.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555452/sameer-renovation-website/services/renovation/reno-1-min_a2mcc4.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555452/sameer-renovation-website/services/renovation/reno-2-min_cvjseq.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555452/sameer-renovation-website/services/renovation/reno-3-min_r3xdvu.webp',
    ],
    url: 'remodeling-and-renovation',
    keywords: `Kitchen remodeling, bathroom remodeling, kitchen and bathroom remodeling, kitchen remodeler, bathroom remodelers, remodeler in Noida, bathroom remodelers, kitchen remodelers, kitchen remodel, bathroom remodel, kitchen remodeling in Delhi, bathroom remodeling in Delhi, bathroom remodelers in Delhi, kitchen remodeler in Delhi, kitchen remodeling in Gurgaon, kitchen remodeling in gurugram, bathroom remodeling in Gurgaon, bathroom remodeling in gurugram, remodelers in gurugram, remodelers in Gurgaon, remodeling work in Delhi NCR, remodelling work in Noida, remodeling work in Gurugram, remodeling work in Gurgaon, kitchen and bathroom remodeling work , kitchen remodeling near me, bathroom remodelers near me, kitchen remodeling near me, bathroom remodeling near me, remodelers near me, remodeling work near me, remodeling contractor near me, kitchen remodeling contractor, bathroom remodeling contractors
    Modular kitchen makers, modular kitchen designer, modular kitchen appliers, modular kitchen designs, modular kitchen contractors, modular kitchen in Noida, modular kitchen makers near me, modular kitchen work near me, modular kitchen work in Noida, modular kitchen work in Delhi, modular kitchen work in gurugram, मॉडलर किचन बनाने वाले, नोएडा में मॉडलर किचन बनाने वाले , गुरुग्राम में मॉडलर किचन बनाने वाले , दिल्ली में मॉडलर किचन बनाने वाले`,
  },

  {
    id: 2,
    icon: <GiBrickWall />,
    name: 'construction',
    title: 'Construction Services',
    desc: `With We Do Renovation™, you're not just building a house, you're making dreams happen!
    A home is the biggest investment most people will ever make and we make sure that your perfect home dream comes true. Aside from building homes, we build all kinds of offices, apartments, schools, colleges, factories, shops, showrooms, buildings, etc. We offer our clients direct access to a team of highly qualified and experienced specialists offering consultancy services in preliminary work, building design, construction management as well as construction supervision and maintenance work.`,
    quote: `Extraordinary service for extraordinary customers.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627556185/sameer-renovation-website/services/construction/construction_omt2w5-min_ngjydy.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555477/sameer-renovation-website/services/construction/cons-1-min_cnfywu.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555477/sameer-renovation-website/services/construction/cons-2-min_jgu52u.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555477/sameer-renovation-website/services/construction/cons-3-min_sgmeuf.webp',
    ],
    url: 'construction',
    keywords: `Construction company, construction company near me, construction in Noida, Noida construction, construction company  Delhi, construction work, construction contractors, construction contractor near me, building construction, building construction contractor, Noida construction contractor, best construction contractor, daily construction contractor, construction contractor in Delhi, construction contractor in Noida, construction contractor in gurugram, construction contractors near me, civil construction contractor, civil construction contractors, civil construction contractor near me, office construction contractors, house construction contractor, home construction contractor, boundary wall construction, contractor near me.`,
  },

  {
    id: 3,
    icon: <GiPaintRoller />,
    name: 'painting',
    title: 'Painting Services',
    desc: `Give new looks to your walls and ceilings by our experience eye for design. We do all kinds of latest trendy designs, textures, patterns, and paints. We Do Renovation™ guarantees you to present with the best of its confirmed experts. We interface you with very much prepared painters who will investigate every possibility while painting your home, office or business space. We Do Renovation™ gives a scope of custom best painting services , taking into account a smooth, consistent experience and uncommon outcome in every place.`,
    quote: `Exceeding expectations is our motto.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627556339/sameer-renovation-website/services/painting/painting_u18kkh-min_lrg4zz.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555576/sameer-renovation-website/services/painting/paint-1-min_nwfux8.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555576/sameer-renovation-website/services/painting/paint-2-min_ccxeny.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555576/sameer-renovation-website/services/painting/paint-3-min_ascsnh.webp',
    ],
    url: 'painting',
    keywords: `Painter near me, Painters near me, painting contractor near me, painting contractors, painting contractor in Noida, painting contractor in Delhi, painting contractor in gurugram, painting contractor in NCR,  painting contractor Noida, painting contractor gurugram, painting contractor Delhi, daily painting contractor, Noida painting contractors, gurugram painting contractors, Delhi painting contractors, painting work near me, painting worker near me, painting contractor, best painting contractor, painting service provider near me, painting service provider, best painting service provider, House painting contractor, home painting contractor, flat painting contractor, office painting contractor, building painting contractor, painting professionals, painting professional near me, wall designer near me, wall design painting, design wall painter,`,
  },

  {
    id: 4,
    icon: <GiWaterSplash />,
    name: 'proofing',
    title: 'Waterproofing & Heatproofing',
    desc: `As your house gets old, it's very common to see dampness(silan) in the walls. You can keep repairing it with paint every year but it just increases the cost and the problem doesn't get solved. WELL, the solution is WATER PROOFING. Get your house water proofed by us at a very reasonable cost and we'll get rid of the problem once and for all.    
    We also do HEAT PROOFING which is a simple and effective way to protect building structure from harmful heat waves. This anti-heat system reflects heat backwards and it may be applied on concrete, wooden, and metal structures.`,
    quote: `We repair what your husband fixed.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555598/sameer-renovation-website/services/proofing/proof-1-min_ygqse0.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555598/sameer-renovation-website/services/proofing/proof-2-min_fa3fnf.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555598/sameer-renovation-website/services/proofing/proof-3-min_dwf1jk.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555598/sameer-renovation-website/services/proofing/proof-4-min_ialykq.webp',
    ],
    url: 'waterproofing-and-heatproofing',
    keywords: `Waterproofing contractor, heat proofing contractor, waterproofing contractor near me, heat proofing contractor near me, ceiling waterproofing , ceiling heat proofing , roof waterproofing, roof heat proofing, waterproofing contractor near me, heat proofing contractor near me, building waterproofing, building heat proofing, waterproofing professionals, heat proofing professionals, proofing professionals, proofing professionals near me, best proofing professionals, best waterproofing contractors, home waterproofing professional, home waterproofing contractor, house waterproofing professional, house waterproofing contractor, home heat proofing contractors, house heat proofing contractor, waterproofing contractor in Noida, waterproofing contractor in gurugram, waterproofing contractor in Delhi, Noida waterproofing contractors, gurugram waterproofing contractors, Delhi waterproofing contractor, heat proofing contractor in Noida, heatproofing contractor in gurugram, heat proofing contractor in Delhi`,
  },

  {
    id: 5,
    icon: <GiAbstract036 />,
    name: 'decoration',
    title: 'Interior & Exterior Decoration',
    desc: `Is it a special function? Do you want your place to look extra beautiful today? Well, say no more and leave it to us! We do all kinds of interior and exterior decorations and we do it in such a way that you'll want to contact us every weekend to make your place look like a living heaven. We work with you to discuss the look you want and the things you'd like to see including lights, flowers, candles, and so much more.`,
    quote: `Why do it yourself? Leave it to the pros.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627556607/sameer-renovation-website/services/decoration/decoration_rzbu1q-min_zva6um.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555643/sameer-renovation-website/services/decoration/deco-1-min_wrgfco.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555643/sameer-renovation-website/services/decoration/deco-2-min_i3k8o0.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555644/sameer-renovation-website/services/decoration/deco-3-min_batyt1.webp',
    ],
    url: 'interior-and-exterior-decoration',
    keywords: `Renovation of house, renovation of building, renovation of school, renovation of college, renovation contractor, Renovation contractor in Noida, renovation contractors, renovation contractor in Delhi,  renovation contractor near me, renovation contractor in gurugram, renovation contractor in Delhi NCR, best renovation contractor near me, best renovation contractor in Noida, renovator in Noida, renovators in Gurgaon, Renovator in gurugram, renovator in Delhi renovator near me, home renovation contractor, home renovator, home renovation contractors, home renovation contractor in Noida, home renovation contractor in Delhi, home renovation contractor in Gurgaon, home renovation contractor in gurugram, renovators near me,  full house renovator in Noida coma full house renovator in Delhi, full house renovator in gurugram, full house renovation contractor in cyber city, professional building renovators, professional home renovators, professional house renovators, professional renovators, professional renovator near me`,
  },

  {
    id: 6,
    icon: <GiTeePipe />,
    name: 'others',
    title: 'Aluminum, uPVC, & Glass Work',
    desc: `We provide all kinds of other related services including ALUMINIUM and METAL works, uPVC, GLASS, and WOOD works. We also have a very experienced crew for PLUMBING services. This includes, but is not limited to creating doors and windows (metal as well as wood ones), fabircation sheets, glass windows, creating durable cost effective frames, fixing and repairing water pipes, and so much more. We have one and all the things you need to upgrade your place.`,
    quote: `Because you deserve the best.`,
    image: [
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627556704/sameer-renovation-website/services/other-works/other-works_yi6xmf-min_enc5mc.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555670/sameer-renovation-website/services/other-works/other-1-min_wdvfld.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555670/sameer-renovation-website/services/other-works/other-2-min_xayfb1.webp',
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1627555670/sameer-renovation-website/services/other-works/other-3-min_un2rk9.webp',
    ],
    url: 'aluminium-upvc-glass-works',
    keywords: `Renovation of house, renovation of building, renovation of school, renovation of college, renovation contractor, Renovation contractor in Noida, renovation contractors, renovation contractor in Delhi,  renovation contractor near me, renovation contractor in gurugram, renovation contractor in Delhi NCR, best renovation contractor near me, best renovation contractor in Noida, renovator in Noida, renovators in Gurgaon, Renovator in gurugram, renovator in Delhi renovator near me, home renovation contractor, home renovator, home renovation contractors, home renovation contractor in Noida, home renovation contractor in Delhi, home renovation contractor in Gurgaon, home renovation contractor in gurugram, renovators near me,  full house renovator in Noida coma full house renovator in Delhi, full house renovator in gurugram, full house renovation contractor in cyber city, professional building renovators, professional home renovators, professional house renovators, professional renovators, professional renovator near me`,
  },
];

// reviews - [HOMEPAGE]
export const reviews = [
  {
    id: 1,
    name: 'Riya Saroha',
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_200/v1629049151/sameer-renovation-website/reviews/ravi-gumber_rhfjst.webp',
    text: `Loved the work!
    I contacted them online for wallpaper installation. I was impressed by the work so called them again for modular kitchen, false ceiling and interior decoration work. Truly excellent work. Completed it on time. The workers were very professional and polite. Used good quality material. The interior decoration was very unique and beautiful. Will definitely call them for any future work.`,
    stars: 5,
  },
  {
    id: 2,
    name: 'Khushi Sharma',
    image:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_200/v1629049151/sameer-renovation-website/reviews/essel-towers_k9thx5.webp',
    text: `A friend recommended them to me when I wanted to get my home renovated. I called them and they started the work from next day. So pleased with the work done. My home looks so beautiful and new. Painting was done with perfect finishing. Floor grinding and polishing work was done well too. I am very happy and satisfied. Strongly recommend them for any construction, renovation and designing related works.`,
    stars: 5,
  },
  {
    id: 3,
    name: 'Aryan Ali',
    image: `https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_200/v1629049151/sameer-renovation-website/reviews/mongol_j0ouxt.webp`,
    text: `I contacted them for wallpaper installation, interior decoration, modular kitchen and False ceiling work. I am really satisfied with the work provided by We do Renovation team and I've given him the whole contract to construct my new home. If you are looking for the best in class and one stop solution for all your home maintenance needs you should consider contacting Sameer. They are really professional guys.`,
    stars: 5,
  },
  {
    id: 4,
    name: 'karon anand',
    image: `https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_200/v1629049151/sameer-renovation-website/reviews/mongol_j0ouxt.webp`,
    text: `I contacted We do Renovation for building my house from scratch  in greater noida,sector - 130. The architectural design I wanted was complex so, many contractors had declined the offer. But we do renovation started the job with ease. It's still a work in progress but I'm sure it will be done before the deadline. I'm sharing some photos of the design I wanted and the current  progress made in building it.`,
    stars: 5,
  },
];

// gallery - [HOMEPAGE]
export const galleryWorks = [
  {
    id: 1,
    title: 'Renovation & Remodeling',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/reno-1-min_dxn6ev.webp',
    keyword: 'Renovator near me remodelers near me',
  },
  {
    id: 2,
    title: 'Painting Works',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550354/sameer-renovation-website/recent-works/painting-1-min_q7oqo3.webp',
    keyword: 'Painting contractor in Noida',
  },
  {
    id: 3,
    title: 'Construction Services',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/cons-2-min_y5x1bz.webp',
    keyword: 'Construction work in Noida',
  },
  {
    id: 4,
    title: 'Waterproofing',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/proofing-1-min_hn6hzb.webp',
    keyword: 'Waterproofing work contractor',
  },
  {
    id: 5,
    title: 'Renovation & Remodeling',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/reno-2-min_ojkrvv.webp',
    keyword: 'Renovator near me remodelers near me',
  },
  {
    id: 6,
    title: 'Glass Works',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550354/sameer-renovation-website/recent-works/others-1-min_a9bsvg.webp',
    keyword: 'Bathroom remodeling glass partition',
  },
  {
    id: 7,
    title: 'Decoration',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/deco-1-min_gbedhj.webp',
    keyword: 'Renovation work in Noida',
  },
  {
    id: 8,
    title: 'Painting Work',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/painting-2-min_m0pxlu.webp',
    keyword: 'Royale paint contractor Wooden panelling',
  },
  {
    id: 9,
    title: 'Constructions',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550353/sameer-renovation-website/recent-works/cons-1-min_zgr645.webp',
    keyword: 'Fabricator near me',
  },
  {
    id: 10,
    title: 'Kitchen Remodeling',
    url: 'https://res.cloudinary.com/dds18bzdy/image/upload/v1627550354/sameer-renovation-website/recent-works/others-2-min_irgo7k.webp',
    keyword: 'Kitchen remodeling contractors',
  },
];

// team members - [WHO WE ARE]
export const teamMembers = [
  {
    id: 1,
    name: 'Sameer',
    title: 'CEO',
    work: 'H&M exports Noida, All Cargo Logistics park Pvt Ltd , Aptara',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628568248/sameer-renovation-website/team-members/sameer_wblwiz.webp',
    mail: 'sameerathomerenovation@gmail.com',
  },

  {
    id: 2,
    name: 'Khalid',
    title: 'Construction, Renovation Head Delhi NCR',
    work: 'Aptara , Radnik Exports Noida , Radnik Auto Exports NSEZ',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628572286/sameer-renovation-website/team-members/khalid_psaehx.webp',
    mail: 'ak418067@gmail.com',
  },

  {
    id: 3,
    name: 'Sikandar',
    title: 'Gurugram Renovation head',
    work: 'Eldeco , Nirvana Country, South City - 1 Gurugram',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628543811/sameer-renovation-website/team-members/sikandar_g2q3qp.webp',
    mail: 'homemaintenance59@gmail.com',
  },

  {
    id: 4,
    name: 'Babu',
    title: 'Painting head contractor Gurugram',
    work: 'The Millenium International school gurugram, Emaar Greens, Nirvana Country',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628544124/sameer-renovation-website/team-members/babu1_peaf22.webp',
    mail: 'shamsudin9811@gmail.com ',
  },

  {
    id: 5,
    name: 'Vishal',
    title: 'Painting contractor Head of Gurugram and New Delhi',
    work: 'Shree ram school, Essel Towers',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628544125/sameer-renovation-website/team-members/vishal_xd0xob.webp',
    mail: 'vishalchokhrat@gmail.com',
  },

  {
    id: 6,
    name: 'Nancy',
    title: 'Interior & Exterior Designer',
    work: 'Concor Logistics, supertech sports village, supertech Livingston',
    avatar:
      'https://res.cloudinary.com/dds18bzdy/image/upload/c_scale,w_400/v1628543811/sameer-renovation-website/team-members/nancy1_y7ibzv.webp',
    mail: 'nancygiri95777@gmail.com',
  },
];

// questions - [FAQS]
export const questions = [
  {
    id: 1,
    ques: 'How do I get in touch with you?',
    ans: 'You can either click the button at the top to give us a call or contact us through any of the contact  links mentioned at the end of the page.',
  },

  {
    id: 2,
    ques: 'What is your response time?',
    ans: 'You can call us anytime, 24x7, and we will be there to help you as much as we can. Alternatively, if you drop us an email, we will get back to you within 24 hours.',
  },

  {
    id: 3,
    ques: 'Is there any consulting charges?',
    ans: 'Absolutely not! You can call us anytime for a free no obligation quote.',
  },

  {
    id: 4,
    ques: 'Do you do waterproofing and heatproofing?',
    ans: 'Yes. We have a very experienced staff for both water proofing anf heatproofing. Infact, it is one of our major speciality along with renovation works.',
  },

  {
    id: 5,
    ques: 'Are there any sample of the work you have done?',
    ans: 'Yes. You can checkout a few of our recent works on the main page of this website. Currently, we are also working on creating a facebook and instagram page for our comapany where you will be able to see most of our works.',
  },

  {
    id: 6,
    ques: 'Do you provide any kind of guarantee?',
    ans: 'Yes. The actual gaurantee varies from service to service and depends on several other factors. Give us a call if you want to discuss this in detail.',
  },
];
