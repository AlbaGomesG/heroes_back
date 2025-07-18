\c postgres

DROP DATABASE IF EXISTS heroes_db;

CREATE DATABASE heroes_db;

\c heroes_db;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    photo TEXT,
    publisher_id INTEGER REFERENCES publishers(id) ON DELETE SET NULL
);

INSERT INTO publishers (name) VALUES
('Marvel Comics'),
('DC Comics'),
('Image Comics'),
('Dark Horse Comics'),
('IDW Publishing'),
('Boom! Studios'),
('Dynamite Entertainment'),
('Valiant Comics'),
('Archie Comics'),
('Kodansha Comics'),
('Shueisha'),
('Viz Media'),
('Tokyopop'),
('Panini Comics'),
('Editora Abril'),
('Mythos Editora'),
('New Pop'),
('JBC'),
('Comix Zone'),
('Graphix'),
('Papercutz'),
('Fantagraphics Books'),
('Top Shelf Productions'),
('AfterShock Comics'),
('Action Lab Comics'),
('Black Mask Studios'),
('Humanoids Publishing'),
('Titan Comics'),
('Oni Press'),
('Red 5 Comics'),
('Scout Comics'),
('Z2 Comics'),
('Ahoy Comics'),
('AWA Studios'),
('Bad Idea Comics'),
('Heavy Metal'),
('WildStorm'),
('Epic Comics'),
('Vertigo Comics'),
('Malibu Comics'),
('Charlton Comics'),
('Dell Comics'),
('Gold Key Comics'),
('EC Comics'),
('Atlas Comics'),
('First Comics'),
('ComiXology Originals'),
('Europe Comics'),
('Drawn & Quarterly'),
('Le Lombard'),
('Soleil Productions');


INSERT INTO heroes (name, photo, publisher_id) VALUES
('Homem-Aranha', NULL, 1),
('Viúva Negra', '1746380333211-viuva negra.jpg', 2),
('Homem de Ferro', NULL, 1),
('Capitão América', NULL, 1),
('Hulk', NULL, 1),
('Thor', NULL, 1),
('Pantera Negra', NULL, 1),
('Doutor Estranho', NULL, 1),
('Feiticeira Escarlate', NULL, 1),
('Visão', NULL, 1),
('Gavião Arqueiro', NULL, 1),
('Capitã Marvel', NULL, 1),
('Homem-Formiga', NULL, 1),
('Vespa', NULL, 1),
('Falcão', NULL, 1),
('Soldado Invernal', NULL, 1),
('Loki', NULL, 1),
('Nick Fury', NULL, 1),
('Justiceiro', NULL, 1),
('Demolidor', NULL, 1),
('Jessica Jones', NULL, 1),
('Luke Cage', NULL, 1),
('Punho de Ferro', NULL, 1),
('Motoqueiro Fantasma', NULL, 1),
('Wolverine', NULL, 1),
('Tempestade', NULL, 1),
('Jean Grey', NULL, 1),
('Ciclope', NULL, 1),
('Noturno', NULL, 1),
('Colossus', NULL, 1),
('Professor Xavier', NULL, 1),
('Magneto', NULL, 1),
('Deadpool', NULL, 1),
('Gambit', NULL, 1),
('Superman', NULL, 2),
('Batman', NULL, 2),
('Mulher-Maravilha', NULL, 2),
('Flash', NULL, 2),
('Lanterna Verde', NULL, 2),
('Aquaman', '1746386556171-aquaman.jpg', 2),
('Cyborg', NULL, 2),
('Arqueiro Verde', NULL, 2),
('Zatanna', NULL, 2),
('Caçador de Marte', NULL, 2),
('Shazam', NULL, 2),
('Constantine', NULL, 2),
('Supergirl', NULL, 2),
('Batgirl', NULL, 2),
('Asa Noturna', NULL, 2),
('Ravena', NULL, 2);


/*Mais inserts de publishers e heroes*/

INSERT INTO publishers (name) VALUES
('Bliss on Tap Publishing'),
('Antarctic Press'),
('Zenescope Entertainment'),
('Storm King Comics'),
('Alterna Comics'),
('Arcana Studio'),
('Ablaze Publishing'),
('Red Giant Entertainment'),
('Big Dog Ink'),
('Abstract Studio'),
('Amigo Comics'),
('Aspen MLT'),
('Avatar Press'),
('Bluewater Productions'),
('Caliber Comics'),
('Devil''s Due Publishing'),
('Digital Webbing'),
('Fierce Comics'),
('Heroic Publishing'),
('Kingstone Comics'),
('Liquid Comics'),
('Moonstone Books'),
('NBM Publishing'),
('Rebellion Developments'),
('SLG Publishing'),
('Speakeasy Comics'),
('Tundra Publishing'),
('UDON Entertainment'),
('Viper Comics'),
('Zenith Comics'),
('Blackbox Comics'),
('Behemoth Comics'),
('Tartarus Press'),
('Scout Redshift'),
('Tiny Onion Studios'),
('Monkeybrain Comics'),
('Panel Syndicate'),
('NeoScope Media'),
('Cloudscape Comics'),
('Iron Circus Comics'),
('Rocketship Entertainment'),
('Beano Studios'),
('Rising Sun Comics'),
('Silverline Comics'),
('Clover Press'),
('Hound Comics'),
('Vault Comics'),
('CEX Publishing'),
('Uncivilized Books'),
('Power Comics');


INSERT INTO heroes (name, photo, publisher_id) VALUES
('Mulher-Hulk', NULL, 1),
('Blade', NULL, 1),
('Namor', NULL, 2),
('Agente Coulson', NULL, 2),
('Yondu', NULL, 3),
('Mantis', NULL, 3),
('Groot', NULL, 4),
('Rocket Raccoon', NULL, 4),
('Gamora', NULL, 5),
('Star-Lord', NULL, 5),
('Nova', NULL, 6),
('Adam Warlock', NULL, 6),
('Drax', NULL, 7),
('Maria Hill', NULL, 7),
('Echo', NULL, 8),
('Moon Knight', NULL, 8),
('Shang-Chi', NULL, 9),
('Kate Bishop', NULL, 9),
('Ironheart', NULL, 10),
('Ms. Marvel', NULL, 10),
('Monica Rambeau', NULL, 11),
('Valquíria', NULL, 11),
('Patriota de Ferro', NULL, 12),
('Capitão Britânia', NULL, 12),
('Homem-Areia', NULL, 13),
('Abominável', NULL, 13),
('Electra', NULL, 14),
('Cavaleiro Negro', NULL, 14),
('Homem-Calendário', NULL, 15),
('Vagalume', NULL, 15),
('Senhor Frio', NULL, 16),
('Chapeleiro Louco', NULL, 16),
('Bizarro', NULL, 17),
('Caçadora', NULL, 17),
('Aqualad', NULL, 18),
('Donna Troy', NULL, 18),
('Static Shock', NULL, 19),
('Tornado Vermelho', NULL, 19),
('Vixen', NULL, 20),
('Hawkman', NULL, 20),
('Hawkgirl', NULL, 21),
('Blue Beetle', NULL, 21),
('Booster Gold', NULL, 22),
('Metamorfo', NULL, 22),
('Animal Man', NULL, 23),
('Zauriel', NULL, 23),
('Rorschach', NULL, 24),
('Ozymandias', NULL, 24),
('Spawn', NULL, 25),
('The Tick', NULL, 26);
