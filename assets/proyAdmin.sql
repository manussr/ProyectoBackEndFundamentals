CREATE DATABASE proyAdmin;
USE proyAdmin;
CREATE TABLE usuario(
     idUsuario INT PRIMARY KEY,
     nombre VARCHAR(50) NOT NULL,
		 cargo VARCHAR(50) NOT NULL,
     departamento VARCHAR(50) NOT NULL,
		 tipo VARCHAR(50) NOT NULL
 );

 /*DESCRIBE usuario;

+--------------+-------------+------+-----+---------+-------+
| Field        | Type        | Null | Key | Default | Extra |
+--------------+-------------+------+-----+---------+-------+
| idUsuario    | int         | NO   | PRI | NULL    |       |
| nombre       | varchar(50) | NO   |     | NULL    |       |
| cargo        | varchar(50) | NO   |     | NULL    |       |
| departamento | varchar(50) | NO   |     | NULL    |       |
| tipo         | varchar(50) | NO   |     | NULL    |       |
+--------------+-------------+------+-----+---------+-------+


*/
 
 CREATE TABLE proyecto(
     idProyecto INT PRIMARY KEY,
     nombre VARCHAR(50) NOT NULL,
		 prioridad CHAR NOT NULL,
     fecha_creacion date NOT NULL,
		 fecha_finalizacion date,
		 idCreador INT NOT NULL,
		 estado CHAR NOT NULL,
		 FOREIGN KEY (idCreador) REFERENCES usuario(idUsuario)
 );
 

 /*DESCRIBE proyecto;

+--------------------+-------------+------+-----+---------+-------+
| Field              | Type        | Null | Key | Default | Extra |
+--------------------+-------------+------+-----+---------+-------+
| idProyecto         | int         | NO   | PRI | NULL    |       |
| nombre             | varchar(50) | NO   |     | NULL    |       |
| prioridad          | char(1)     | NO   |     | NULL    |       |
| fecha_creacion     | date        | NO   |     | NULL    |       |
| fecha_finalizacion | date        | YES  |     | NULL    |       |
| idCreador          | int         | NO   | MUL | NULL    |       |
| estado             | char(1)     | NO   |     | NULL    |       |
+--------------------+-------------+------+-----+---------+-------+

*/
 
 CREATE TABLE historia(
     idHistoria INT PRIMARY KEY,
     nombre VARCHAR(50) NOT NULL,
		 estado CHAR NOT NULL,
		 prioridad CHAR NOT NULL,
     fecha_creacion DATE NOT NULL,
		 fecha_finalizacion DATE,
		 descripcion TEXT,
		 idProyecto INT NOT NULL,
		 idAdministrador INT NOT NULL,
		 idDesarrollador INT,
		 FOREIGN KEY (idAdministrador) REFERENCES usuario(idUsuario),
		 FOREIGN KEY (idDesarrollador) REFERENCES usuario(idUsuario),
		 FOREIGN KEY (idProyecto) REFERENCES proyecto(idProyecto)
		
 );

 /*DESCRIBE historia;

+--------------------+-------------+------+-----+---------+-------+
| Field              | Type        | Null | Key | Default | Extra |
+--------------------+-------------+------+-----+---------+-------+
| idHistoria         | int         | NO   | PRI | NULL    |       |
| nombre             | varchar(50) | NO   |     | NULL    |       |
| estado             | char(1)     | NO   |     | NULL    |       |
| prioridad          | char(1)     | NO   |     | NULL    |       |
| fecha_creacion     | date        | NO   |     | NULL    |       |
| fecha_finalizacion | date        | YES  |     | NULL    |       |
| descripcion        | text        | YES  |     | NULL    |       |
| idProyecto         | int         | NO   | MUL | NULL    |       |
| idAdministrador    | int         | NO   | MUL | NULL    |       |
| idDesarrollador    | int         | YES  | MUL | NULL    |       |
+--------------------+-------------+------+-----+---------+-------+

*/
 