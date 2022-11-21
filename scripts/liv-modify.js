import replace from 'replace-in-file';

const options = {
  files: './src/**/*',
  from: /sl-/g,
  to: 'liv-'
};

try {
  const results = await replace(options);
  console.log('Replacement results:', results);
} catch (error) {
  console.error('Error occurred:', error);
}

// const options1 = {
//   files: './src/**/*',
//   from: /Sl/g,
//   to: 'Liv'
// };

// try {
//   const results1 = await replace(options1);
//   console.log('Replacement results:', results1);
// } catch (error) {
//   console.error('Error occurred:', error);
// }

const options2 = {
  files: './docs/**/*',
  from: /sl-/g,
  to: 'liv-'
};

try {
  const results2 = await replace(options2);
  console.log('Replacement results:', results2);
} catch (error) {
  console.error('Error occurred:', error);
}

const options3 = {
  files: './src/shoelace.ts',
  from: /Sl/g,
  to: 'Liv'
};

try {
  const results3 = await replace(options3);
  console.log('Replacement results:', results3);
} catch (error) {
  console.error('Error occurred:', error);
}
