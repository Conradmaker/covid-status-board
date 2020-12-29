interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

const capt = {} as Hero;
capt.name = 'capt';
capt.skill = 'shield';

let a: string | number;

a!.toString();
