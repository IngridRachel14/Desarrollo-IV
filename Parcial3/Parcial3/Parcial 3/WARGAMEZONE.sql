
CREATE DATABASE WARGAMEZONE

USE WARGAMEZONE

CREATE TABLE Seccion
(
	SecID varchar(20) 
		constraint Usuario_ID_pk primary key,
)

CREATE TABLE Contenido
(
	img varchar(600),
	titulo varchar(100),
	parrafo text,
	SecID varchar(20) 
		constraint Contenido_ID_fk foreign key (SecID)
			references Seccion (SecID)
)



-- Inserts para la tabla Seccion
INSERT INTO Seccion (SecID) VALUES 
  ('seccion1'),
  ('seccion2'),
  ('seccion3'),
  ('seccion4'),
  ('seccion5'),
  ('seccion6'),
  ('seccion7'),
  ('seccion8'),
  ('seccion9')


-- Inserts para la tabla Contenido
INSERT INTO Contenido (titulo, img, SecID) 
VALUES ('Combate por Equipos','https://i.imgur.com/OzLjiHS.jpeg', 'seccion1'),
       ('Todos contra Todos', 'https://i.imgur.com/ypCMv6X.jpeg', 'seccion1'),
	   ('Warzone','https://i.imgur.com/tntbfWF.jpeg','seccion1'),
	   ('Dominio', 'https://i.imgur.com/IReJSKl.jpeg', 'seccion1')

INSERT INTO Contenido (titulo, parrafo, img, SecID) 
VALUES ('Nuestra Comunidad', 'Únete a nuestra comunidad para estar actualizado con todo nuestro contenido, único y
                exclusivo para nuestros usuarios.', 'https://i.imgur.com/yEL7GM8.jpeg', 'seccion2')


INSERT INTO Contenido (titulo, parrafo, img, SecID)
VALUES ('Quienes Somos', 'Somos un juego de Armas, especialmente en guerra que buscamos que desarrolles habilidades
                como: precisión, velocidad y agilidad. ', 'https://i.imgur.com/EcaGDNS.jpeg', 'seccion3')

INSERT INTO Contenido (titulo, SecID)
VALUES ('Nuestro Equipo', 'seccion4')

INSERT INTO Contenido (titulo, parrafo, img, SecID)
VALUES ('Sué Acosta','Soldado fundador, encargada del mantenimiento del juego, prevee futuros errores
                        del juego, bugs y mantiene el juego libre de fallos.','https://i.imgur.com/JqeaM1l.png','seccion4'),
       ('John Grant','Soldado fundador, encargado de la jugabilidad de los usuarios, le encanta
                        relacionarse con nuestros usuarios, para quejas y comentarios del juego.','https://i.imgur.com/cgB7p5g.png','seccion4'),
	   ('Ingrid Quintanar','Soldado fundador, encargada de los planes a futuros, proyecciones de maneras de
                        jurgo, actualizaciones e ideas que tenga el versión actual.','https://i.imgur.com/JJCJhwB.png','seccion4')

INSERT INTO Contenido (titulo, parrafo, img, SecID)
VALUES('Disponible para dispositivos','La mejor parte de War Game Zone es que está disponible para dispositivos móviles.
                Puedes descargar el juego de forma gratuita desde las tiendas de aplicaciones de iOS y Android,
                lo que significa que puedes llevar la emoción de la guerra contigo donde quiera que vayas.','https://i.imgur.com/auk1RZz.jpeg','seccion5')

INSERT INTO Contenido (parrafo, SecID)
VALUES('Página diseñada por el equipo GL122-E.', 'seccion6')

insert into Contenido (titulo, img, SecID)
values ('¡Sé un héroe y únete a la aventura en War Game Zone!', '', 'seccion7')

insert into Contenido (img, SecID)
values ('https://i.imgur.com/8yC05zG.jpg','seccion8')

insert into Contenido (img, SecID)
values ('https://i.imgur.com/YjpF232.png','seccion9')