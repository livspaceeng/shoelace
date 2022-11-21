import replace from 'replace-in-file';

const options = {
  files: './src/shoelace.ts',
  from: /Sl/g,
  to: 'Liv'
};

try {
  const results = await replace(options);
  console.log('Replacement results:', results);
} catch (error) {
  console.error('Error occurred:', error);
}
