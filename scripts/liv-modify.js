import replace from 'replace-in-file';

let componentList = [
  'SlAlert',
  'SlAnimatedImage',
  'SlAnimation',
  'SlAvatar',
  'SlBadge',
  'SlBreadcrumb',
  'SlBreadcrumbItem',
  'SlButton',
  'SlButtonGroup',
  'SlCard',
  'SlCheckbox',
  'SlColorPicker',
  'SlDetails',
  'SlDialog',
  'SlDivider',
  'SlDrawer',
  'SlDropdown',
  'SlFormatBytes',
  'SlFormatDate',
  'SlFormatNumber',
  'SlIcon',
  'SlIconButton',
  'SlImageComparer',
  'SlInclude',
  'SlInput',
  'SlMenu',
  'SlMenuItem',
  'SlMenuLabel',
  'SlMutationObserver',
  'SlPopup',
  'SlProgressBar',
  'SlProgressRing',
  'SlQrCode',
  'SlRadio',
  'SlRadioButton',
  'SlRadioGroup',
  'SlRange',
  'SlRating',
  'SlRelativeTime',
  'SlResizeObserver',
  'SlSelect',
  'SlSkeleton',
  'SlSpinner',
  'SlSplitPanel',
  'SlSwitch',
  'SlTab',
  'SlTabGroup',
  'SlTabPanel',
  'SlTag',
  'SlTextarea',
  'SlTooltip',
  'SlTree',
  'SlTreeItem',
  'SlVisuallyHidden'
];

let modifiedFromList = JSON.parse(JSON.stringify(componentList)).map(comp => {
  return new RegExp(comp + ',', 'g');
});

let modifiedToList = JSON.parse(JSON.stringify(componentList)).map(comp => {
  let livcomp = `${comp}`.replace('Sl', 'Liv');
  return `${comp} as ${livcomp},`;
});

console.log(modifiedFromList, modifiedToList);
const options = {
  files: './dist/shoelace.js',
  from: modifiedFromList,
  to: modifiedToList
};

try {
  const results = await replace(options);
  console.log('Replacement results:', results);
} catch (error) {
  console.error('Error occurred:', error);
}
