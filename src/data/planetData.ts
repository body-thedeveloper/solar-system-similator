export interface MoonData {
  name: string;
  radius: number;
}

export interface PlanetData {
  id: string;
  name: string;
  radius: number;
  distanceFromSun: number;
  orbitSpeed: number;
  texture: string;
  description: string;
  diameter: number;
  mass: string;
  dayLength: string;
  yearLength: string;
  avgTemp: string;
  funFact: string;
  moons?: MoonData[];
}

export const planetData: PlanetData[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    radius: 1.5,
    distanceFromSun: 20,
    orbitSpeed: 0.004,
    texture: 'mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth but is much smaller, with a diameter of about 4,880 km.',
    diameter: 4880,
    mass: '3.3 × 10^23 kg',
    dayLength: '176 Earth days',
    yearLength: '88 Earth days',
    avgTemp: '-173°C to 427°C',
    funFact: 'Mercury has wrinkles! As the iron core of the planet cooled and contracted, the surface developed "wrinkles" or compressional features.'
  },
  {
    id: 'venus',
    name: 'Venus',
    radius: 2.2,
    distanceFromSun: 30,
    orbitSpeed: 0.0035,
    texture: 'venus.jpg',
    description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and it's often called Earth's twin because it's similar in size and density.",
    diameter: 12104,
    mass: '4.87 × 10^24 kg',
    dayLength: '243 Earth days',
    yearLength: '225 Earth days',
    avgTemp: '462°C',
    funFact: 'Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.'
  },
  {
    id: 'earth',
    name: 'Earth',
    radius: 2.5,
    distanceFromSun: 40,
    orbitSpeed: 0.003,
    texture: 'earth.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world in our solar system with liquid water on the surface.',
    diameter: 12756,
    mass: '5.97 × 10^24 kg',
    dayLength: '24 hours',
    yearLength: '365.25 days',
    avgTemp: '15°C',
    funFact: 'The Earth\'s rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years.',
    moons: [
      { name: 'Moon', radius: 0.6 }
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    radius: 2,
    distanceFromSun: 50,
    orbitSpeed: 0.0024,
    texture: 'mars.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the "Red Planet".',
    diameter: 6792,
    mass: '6.42 × 10^23 kg',
    dayLength: '24 hours 37 minutes',
    yearLength: '687 Earth days',
    avgTemp: '-63°C',
    funFact: 'Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet.',
    moons: [
      { name: 'Phobos', radius: 0.3 },
      { name: 'Deimos', radius: 0.2 }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    radius: 5,
    distanceFromSun: 65,
    orbitSpeed: 0.0013,
    texture: 'jupiter.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets combined.',
    diameter: 142984,
    mass: '1.90 × 10^27 kg',
    dayLength: '9 hours 56 minutes',
    yearLength: '11.86 Earth years',
    avgTemp: '-145°C',
    funFact: 'Jupiter has the shortest day of all the planets. It rotates once about every 10 hours.',
    moons: [
      { name: 'Io', radius: 0.5 },
      { name: 'Europa', radius: 0.5 },
      { name: 'Ganymede', radius: 0.6 },
      { name: 'Callisto', radius: 0.6 }
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    radius: 4.5,
    distanceFromSun: 85,
    orbitSpeed: 0.0009,
    texture: 'saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    diameter: 120536,
    mass: '5.68 × 10^26 kg',
    dayLength: '10 hours 42 minutes',
    yearLength: '29.45 Earth years',
    avgTemp: '-178°C',
    funFact: 'Saturn has a unique feature - its spectacular ring system that stretches out more than 120,000 km from the planet, but is only about 20 meters thick.',
    moons: [
      { name: 'Titan', radius: 0.6 },
      { name: 'Enceladus', radius: 0.3 },
      { name: 'Mimas', radius: 0.2 },
      { name: 'Rhea', radius: 0.4 },
      { name: 'Iapetus', radius: 0.4 }
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    radius: 3.5,
    distanceFromSun: 100,
    orbitSpeed: 0.0007,
    texture: 'uranus.jpg',
    description: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    diameter: 51118,
    mass: '8.68 × 10^25 kg',
    dayLength: '17 hours 14 minutes',
    yearLength: '84 Earth years',
    avgTemp: '-224°C',
    funFact: 'Uranus rotates on its side with an axial tilt of 98 degrees. This means that its poles experience 42 years of continuous sunlight followed by 42 years of darkness.',
    moons: [
      { name: 'Miranda', radius: 0.3 },
      { name: 'Ariel', radius: 0.3 },
      { name: 'Umbriel', radius: 0.3 },
      { name: 'Titania', radius: 0.4 },
      { name: 'Oberon', radius: 0.4 }
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    radius: 3.5,
    distanceFromSun: 120,
    orbitSpeed: 0.0005,
    texture: 'neptune.jpg',
    description: 'Neptune is the eighth and farthest-known planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
    diameter: 49528,
    mass: '1.02 × 10^26 kg',
    dayLength: '16 hours 6 minutes',
    yearLength: '164.8 Earth years',
    avgTemp: '-214°C',
    funFact: 'Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).',
    moons: [
      { name: 'Triton', radius: 0.5 },
      { name: 'Nereid', radius: 0.2 },
      { name: 'Proteus', radius: 0.3 },
      { name: 'Larissa', radius: 0.2 }
    ]
  }
];