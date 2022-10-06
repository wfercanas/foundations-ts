(() => {
  let myDynamicVar: any;
  myDynamicVar = 'Hola';
  const answer = (myDynamicVar as string).toLowerCase();

  myDynamicVar = 1212;
  const response = (<number>myDynamicVar).toFixed();
})();
