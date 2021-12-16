const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const json_books = fs.readFileSync('./db/db.json', 'utf-8');
let books = JSON.parse(json_books);

        //consultar todos los productos
router.get('/', (req, res) => {
 // console.log({books});
 res.json(books);
 
});

//----------------------------------------------------------------------



        //Consultar un producto
router.get('/:id',(req, res)=>{
    const {id} = req.params
   // console.log('el parametro que me llega',id);
     bookse = books.filter(book => book.id == req.params.id);
    // console.log(bookse);
     res.json(bookse);
    
  });
  
//----------------------------------------------------------------------


        //Agregar un producto
    router.post('/',( req, res)=>{
    const { nombre, categoria, sabor, precio,estado } = req.body;
  
    if (!nombre || !categoria || !sabor || !precio || !estado) {
      res.status(400).send("Debe llenar todos los campos");
      return;
    }
  
    var newBook = {
      id: uuidv4(),
      nombre,
      categoria,
      sabor,
      precio,
      estado
    };
  
        //  agregar un nuevo producto al array
    books.push(newBook);
    //console.log("asi va la lista",books);
        //  guardar el array en el archivo db
    const json_books = JSON.stringify(books);
    fs.writeFileSync('./db/db.json', json_books, 'utf-8');
    //res.json({status: 'producto guardado'})
    res.status(200).send("producto guardado");
  
  });

//---------- --------------------------------------------------

//Eliminar un producto Definitivo
    router.delete('/x:id',(req, res)=>{
        //console.log(req.params.id);
        // buscamos todos los productos menos el id que envie
    books = books.filter(book => book.id != req.params.id);
    //console.log(books);
        // guardando informacion
    const json_books = JSON.stringify(books);
    fs.writeFileSync('./db/db.json', json_books, 'utf-8');
    //res.json({status: 'producto eliminado'})
    res.status(200).send("producto eliminado");
   // res.redirect('/')
  });



//--------------------------------------------------------------------

//Eliminar un producto Cambiando el estado
router.delete('/:id',(req, res)=>{
    //console.log(req.params.id);
    // buscamos todos los productos menos el id que envie

bookse = books.filter(book => book.id == req.params.id);
//console.log(bookse[0]);
bookse[0].estado=false;

books = books.filter(book => book.id != req.params.id);
books.push(bookse[0]);
console.log(books);
    // guardando informacion
const json_books = JSON.stringify(books);
fs.writeFileSync('./db/db.json', json_books, 'utf-8');
//res.json({status: 'equiposs eliminado'})
res.status(200).send({message:"producto eliminado"});
 //res.redirect('/')
});



//--------------------------------------------------------------------
// MODIFICAR PRODUCTO

router.put('/:id',(req, res)=>{

    const { nombre, categoria, sabor, precio,estado } = req.body;
         //buscamos a todos los productos menos el enviamos 
    books = books.filter(book => book.id != req.params.id);
        //agregamos el objeto modificado
    books.push(req.body);
        //guardamos en el archivo
const json_books = JSON.stringify(books);
fs.writeFileSync('./db/db.json', json_books, 'utf-8');

//res.json({status: 'equipo modificado'})
res.status(200).send("producto modificado");
});
//--------------------------------------------------------------------


module.exports = router;

