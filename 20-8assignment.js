async function foo() {

    await setTimeout(() => console.log("Inside foo"),3000) 

    async function faa() {
        await setTimeout(() => console.log("Inside faa"),3000)
        console.log(2);
      }
    
    faa();
    console.log("faa called")
    console.log(1);
}

foo();
