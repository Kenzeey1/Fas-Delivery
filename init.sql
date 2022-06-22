drop database if exists fastdelivery;
create database fastdelivery;

\c fastdelivery

drop table if exists utilisateurs;
drop table if exists livreurs;
drop table if exists food;
drop table if exists commandes;
drop table if exists entree;
drop table if exists ingredients;
drop table if exists formules;

create table utilisateurs
(
    user_id  serial primary key,
    nom varchar(255),
    prenom varchar(255),
    mail varchar(255),
    numeroTel  varchar(25),
    pwd   varchar(25)
);

create table livreurs
(
    user_id  serial primary key,
    nom varchar(255),
    prenom varchar(255),
    mail varchar(255),
    numeroTel  varchar(25),
    pwd   varchar(25)
);

create table food
(
    id  serial primary key,
    nom varchar(255),
    prix float,
    categorie varchar(100),
    description varchar(255)
);

create table entree 
(
id serial primary key,
nom varchar(255),
prix float,
description varchar(255),
sauces text []
);

create table ingredients
(
    id serial primary key,
    nom varchar(255),
    type varchar(255),
    prix float

);

create table commandes
(
    id serial primary key,
    nom varchar (255),
    prenom varchar(255),
    adresse varchar(255),
    lacommande text [],
     addition float
);

create table formules 
(
    id serial primary key,
    titre varchar(255),
    ladescription varchar(255),
    taillePizza varchar(10),
    NBentrees integer,
    tailleBoisson varchar(10),
    prix float
);

INSERT INTO formules (titre,ladescription,  taillePizza,NBentrees,tailleBoisson,prix) VALUES
('EXTRA_MENU ',' 1 * pizza M,  1 entree, 1 boisson 33cl' ,'M', 1 , '33cl',22),
('MEGA_MENU ',' 1 * pizza L, 2 entrees, 1 boisson 1.5 L',  'L', 2 , '1.5L',26),
('GIGA_MENU ',' 1 * pizza XL,  3 entrees, 1 boisson 2L', 'XL', 3 , '2L',31);

INSERT INTO ingredients (nom,type,prix) VALUES
('base_tomate','base',5),
('base_creme_fraiche','base',5),
('thon', 'garniture', 2),
('anchoix','garniture' , 2),
('pepperoni','garniture' , 2),
('nuggets','garniture' , 2),
('viande_hachée','garniture' , 2),
('poulet_fumé','garniture' , 2),
('merguez','garniture' , 2),
('saumon','garniture' , 2),
('tomate','garniture' , 1),
('champigonon','garniture' , 1),
('artichaut','garniture' , 1),
('oignons','garniture' , 1),
('tomate_séchée_marinée','garniture',1),
('basilic','garniture' , 1),
('poivrons','garniture' , 1),
('mozzarella', 'fromage',2),
('cheddar','fromage',2),
('parmesan','fromage',2),
('fruits de mer ','garniture' , 2 ),
('maiz','garniture' , 2),
('poulet tikka','garniture' , 2),
('emincé de poulet','garniture' , 2),
('oeuf','garniture' , 2),
('raquette','garniture' , 1),
('pomme de terre','garniture' , 1),
('cordon bleu','garniture' , 1),
('boursin','fromage' , 2),
('chèvre','fromage' ,2),
('burrata', 'fromage',3),
('raclette', 'fromage',2),
('reblochon', 'fromage', 2),
('capre', 'garniture',1),
('piment_rouge', 'garniture',1),
('ananas','garniture',1),
('tinders', 'garniture',1),
('lardons_de_veau' ,'garniture',2),
('jambon_de_dinde', 'garniture',2),
('bacon_de_boeuf', 'garniture',2),
('Algérienne', 'sauce' , 0.5),
('Harrissa', 'sauce' , 0.5),
('Blanche', 'sauce' , 0.5),
('Barbecue', 'sauce' , 0.5),
('Miel', 'sauce' , 0.5),
('Vinaigrette', 'sauce' , 0.5),
('Sans_sauce','sauce',0);

INSERT INTO entree (nom,prix, description,sauces) VALUES
('Chicken-wing_x6',5,'Recette originale : 6 ailes de poulet marinées',ARRAY ['sauce_barbecue','sauce_curry','ketchup']	),
('Breadsticks-mozzarella', 5, '8 Bâtonnets de pâte à pizza garnis de mozzarella. Servis avec une délicieuse sauce au choix',ARRAY ['sauce_barbecue','sauce_curry','ketchup']),
('Breadsticks-Extra-Mozzarella', 6.5,'Comme le Breadsticks Mozzarella, avec en plus de la Mozzarella gratinée par-dessus! Servis avec une sauce au choix',ARRAY ['sauce_barbecue','sauce_curry','ketchup']),
('Salade-Caesar', 5,'Salade verte, tomates fraîches, filet de poulet rôti et mariné, Parmigiano Reggiano AOP, tranche de pain à l’ail et une sauce Caesar',ARRAY ['sauce_mayonnaise','sauce_curry'] ),
('Potatoes', 3,'Des Potatoes cuites au four. Servies avec une sauce au choix',ARRAY ['sauce_barbecue','sauce_curry','ketchup','mayonnaise']),
('Pain-à-l''ail',5,'4 Tranches de pain à l''ail gratinées à la mozzarella',ARRAY ['sauce_blanche','sauce_curry'] ),
('chicken-tasty',5,'4 Aiguillettes de poulet cuites au four, panées et assaisonnées d''épices. Servies avec une sauce au choix',ARRAY ['sauce_barbecue','sauce_curry','ketchup']),
('chicken-croqs',5,'8 Bouchées Panées au Poulet. Servis avec une délicieuse sauce au choix',ARRAY ['sauce_barbecue','sauce_curry','ketchup']);

INSERT INTO food (nom,categorie,prix,description) VALUES
('Chicken-wing_x6','entree' , 5 ,'Recette originale : 6 ailes de poulet marinées'),
('Breadsticks-mozzarella','entree', 5, '8 Bâtonnets de pâte à pizza garnis de mozzarella. Servis avec une délicieuse sauce au choix'),
('Breadsticks-Extra-Mozzarella','entree', 6.5,'Comme le Breadsticks Mozzarella, avec en plus de la Mozzarella gratinée par-dessus! Servis avec une sauce au choix'),
('Salade-Caesar', 'entree', 5,'Salade verte, tomates fraîches, filet de poulet rôti et mariné, Parmigiano Reggiano AOP, tranche de pain à l’ail et une sauce Caesar'),
('Potatoes', 'entree', 3,'Des Potatoes cuites au four. Servies avec une sauce au choix'),
('Pain-à-l''ail', 'entree',5,'4 Tranches de pain à l''ail gratinées à la mozzarella'),
('chicken-tasty', 'entree',5,'4 Aiguillettes de poulet cuites au four, panées et assaisonnées d''épices. Servies avec une sauce au choix'),
('chicken-croqs', 'entree',5,'8 Bouchées Panées au Poulet. Servis avec une délicieuse sauce au choix'),
( '4-Fromages', 'pizza',11.5,'Sauce tomate à l''origan,crème fraiche légère,mozzarella,fromage de chèvre'),
('Queen', 'pizza', 10,	'Sauce tomate à l''origan, mozzarella, jambon et champignons frais 		'),
('Montagnarde', 'pizza', 11.5,'Crème fraîche légère, mozzarella, jambon cru, fromage à raclette et champignons frais'),
('Destiny', 'pizza', 20,'every thing'),
('Chèvre-Miel','pizza',11,'	Crème fraîche légère, mozzarella, fromage de chèvre, miel'),
('Nordique', 'pizza',11.5,'Crème fraîche légère, mozzarella et saumon fumé de Norvège '),
('Supreme', 'pizza',11,'Sauce tomate à l''origan, mozzarella, emietté au boeuf, saucisse pepperoni, champignons frais, oignons rouges frais et poivrons verts frais '),
('Raclette', 'pizza', 11,'Crème fraîche légère, mozzarella, pommes de terre, lardons et fromage à raclette '),
('Végétarienne', 'pizza',10,'	Sauce tomate à l''origan, mozzarella, champignons frais, oignons rouges frais, poivrons verts frais, tomates fraîches et Olives noires '),
('Texane-Barbecue', 'pizza',11,'Sauce barbecue, mozzarella, jambon, emietté au boeuf, lardons, champignons frais et oignons rouges frais	'),
('Samourai', 'pizza',11,'Sauce tomate à l''origan, mozzarella, merguez, filet de poulet rôti, oignons rouges frais, Sauce Samouraï	'),
('Orientale', 'pizza',11,'Sauce tomate à l''origan, mozzarella, merguez et champignons frais '),
('Provencale', 'pizza',11,'Sauce tomate à l''origan, mozzarella, thon, tomates fraîches, oignons rouges frais et olives noires '),
('Cookie-Geant_x6', 'dessert', 6,'Délicieux Cookie aux pépites de chocolat noir servi chaud. Idéal à partager!'),
('Ben&Jerry''s-cookie ', 'dessert', 3, 'Crème glacée vanille avec des morceaux de pâte de cookie aux pépites de chocolat et des inclusions cacaotées'),
('Ben&Jerry''s-chocolate ', 'dessert',3,'Crème glacée chocolat avec des morceaux de gâteau fondant au cacao maigre'),
('Ben&Jerry''s-vanilla ', 'dessert',3,'Crème glacée vanille avec une sauce au caramel salé, des morceaux de pécan caramélisés et des morceaux de gâteau fondant'),
('Donut-chocolat_x3','dessert',3,'Au coeur Fondant au chocolat'),
('Coca-Original', 'boisson' ,3 ,null),
('Coca-Cherry', 'boisson'  , 2,null),
('Oasis-tropical', 'boisson', 3,null),
('Orangina', 'boisson' ,3,null);

INSERT INTO livreurs(nom,prenom,mail,numeroTel,pwd) VALUES
('ab','cd','e@gmail.com','4888','pmp'),
('fg','jk','l@gmail.com','44558','pmpk');

INSERT INTO utilisateurs(nom,prenom,mail,numeroTel,pwd) VALUES
('all','zahra','z@gmail.com','458','rtr'),
('abd','kenzi','k@gmail.com','4458','prk');
