(() => {
  let myNull = null; //type = any
  let myUndefined = undefined; //type = any

  // Permitir que pueda ser null o undefined
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

  // Operar
  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';

    console.log(hello);
  }

  hi('Nicolas');
  hi(null);
})();
