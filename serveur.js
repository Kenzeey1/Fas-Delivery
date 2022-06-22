const express = require('express');
const { Pool } = require('pg');
const bodyParser = require("body-parser");

const pool = new Pool();
const config = require("dotenv").config()
const { acceptsEncodings } = require('express/lib/request');


const app = express();
app.listen(8000);
const urlencodeParse = bodyParser.urlencoded({extended : true});
app.use(urlencodeParse);
app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',function (req,res) {
    res.render("./index.ejs",{root:'root-client'});
});

app.set("view engine",'ejs');

app.get('/livraison',function (req,res) {
    res.render("./index.ejs",{root:'root-livreur'});
});

app.post ('/livraison',async function (req,res){
    const mail=req.body.email;
    const  password=req.body.pwd;
    
    const client = await pool.connect();
    try {
     
     await client.query('BEGIN')
     const queryText = 'select * from livreurs where mail = $1 and pwd=$2'
     const result = await client.query(queryText, [mail,password] )

    if (result.rows.length == 0) {
      
        res.render("./index.ejs",{root:'root-livreur'});
    }else{
        const queryText2 = 'select * from commandes'
        const result2 = await client.query(queryText2)
    
        if (result2.rows.length != 0){
            const commandealivrer = result2.rows[0];
            const idcommande = commandealivrer.id;
            res.render("./livraison.ejs",{commandealivrer : commandealivrer, root:true} );
            
        }
        else {
            res.render("./livraison.ejs",{commandealivrer : {},root:false })
        }
    }
     await client.query('COMMIT')
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
  } finally {
        client.release()
  }

});

app.post('/connection',async function (req, res){

    const mail = req.body.email;
    const  password = req.body.pwd;

    const client = await pool.connect();
    try {

     await client.query('BEGIN')
     const queryText = 'select * from utilisateurs where mail = $1 and pwd=$2'
     const result = await client.query(queryText, [mail,password] )

    if (result.rows.length == 0) {
        
        res.render("./index.ejs",{root:'root-client'});
    }else{
        let a = {
            name : result.rows[0].nom,
            fname : result.rows[0].prenom,
            email : result.rows[0].mail,
            pn : result.rows[0].numerotel
        }

        const queryText2 = 'select * from food where categorie= $1 '
        const result2 = await client.query(queryText2, ['dessert'] )
        let dessert = result2.rows
        const result3 = await client.query(queryText2, ['boisson'] )
        let boissons = result3.rows
        const result4 = await client.query(queryText2, ['pizza'] )
        let pi = result4.rows

        const queryText3='select * from entree';
        const result5=await client.query(queryText3);
        let entreeEtsauce=result5.rows;

        const queryText4='select * from ingredients where type=$1';
        const result6 = await client.query(queryText4,['base']);
        let base = result6.rows;
        const result7 = await client.query(queryText4, ['garniture']);
        let garniture = result7.rows;
        const result8 = await client.query(queryText4, ['fromage']);
        let fromage = result8.rows;
        const result9 = await client.query(queryText4, ['sauce']);
        let saucePizza = result9.rows;
        const queryText5='select * from formules';
        const result10 =await client.query(queryText5);
        let menus= result10.rows;

        res.render ('commandePage.ejs',{client:a, dessert:dessert ,boissons:boissons,pizza:pi,entree:entreeEtsauce,base:base,garniture:garniture,fromage:fromage,saucePizza:saucePizza ,menu:menus});
    }
     await client.query('COMMIT')
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
  } finally {
        client.release();
  }

});


app.post('/inscription', async function (req, res) {

    const mail = req.body.email;
    const password = req.body.pwd;
    const nom = req.body.name;
    const prenom = req.body.FN;
    const numeroTel = req.body.PN;

    let client = {
        name : nom,
        fname : prenom,
        email : mail,
        pn : numeroTel
    }

    pool.query("INSERT INTO utilisateurs (nom,prenom,mail,pwd,numerotel) VALUES ('"+nom+"','"+prenom+"','"+mail+"','"+password+"','"+numeroTel+"' )");

    res.render("./index.ejs",{root:'root-client'});

});

app.post("/request",async (req, res) => {

    const nom = req.body.info.nom;
    const prenom = req.body.info.prenom;
    const adresse = req.body.info.adresse;
    const commande = req.body.panier;
    const longeur = req.body.longeur;
    const addition = req.body.prixtotal;
    const client = await pool.connect();

    try {

        await client.query('BEGIN')
        const queryText = 'insert into commandes (nom,prenom,adresse,lacommande,addition ) values ($1,$2,$3,$4,$5) ';

        let com =[[]]
        if(longeur !== 0){
            for( var i =0 ; i< commande.length ; i++){
                let element =[];
                element[0] = commande[i].type;
                element[1] = commande[i].name;
                if(commande[i].size !== undefined){
                    element[2] = commande[i].size;
                }else{
                    element[2] = commande[i].sauce;
                }
                element[3] = commande[i].price;
                if(element[1] ==='perso'){
                
                }
                com[i] = element;
            }
           
            const result = await client.query(queryText,[nom,prenom,adresse,com,addition]);
        }
     
        await client.query('COMMIT')
    }
    catch(e){
        await client.query('ROLLBACK')
        throw e
    }finally {
        client.release()
    }
});

app.get("/delivered",async (req, res) => {
   
   const client = await pool.connect();
   try {
   
       await client.query('BEGIN')
       const queryText = 'select * from commandes'
       const result = await client.query(queryText)
       
       if (result.rows.length != 0){
       const commandealivrer=result.rows[0];
      
       const idcommande=commandealivrer.id;
       const livrer='';
       res.render("./livraison.ejs",{commandealivrer : commandealivrer, livrer:livrer,root:true} );
       
       const queryText3 = 'delete  from commandes where id=$1';

       await client.query(queryText3,[idcommande]);
       }else {
           res.render("./livraison.ejs",{commandealivrer : {},root:false })
       }
       await client.query('COMMIT')
   }
   
   catch(e)
   {
       await client.query('ROLLBACK')
       throw e
   }
   finally {
       client.release()        
   }
   })

   app.get("*", (req, res) => {
 
           res.render("./pageNotFound.ejs");
     });


