//async function main () {
//  console.log("hola mundo");
//}
//console.log("hola mundo");
//main();
async function main () {
  const req = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
  if (req.ok) {
    const data = await req.json();
    console.log(data.docs[0].author_name);
  }
}
main();