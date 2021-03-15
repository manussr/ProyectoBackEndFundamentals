CREATE DATABASE DVxKsCODLM;
USE DVxKsCODLM;

CREATE TABLE `usuarios`  (
  `idUsuario` int(11) NOT NULL,
  `email` varchar(255)  NOT NULL,
  `nombre` varchar(255)  NOT NULL,
  `cargo` varchar(255)  NOT NULL,
  `departamento` varchar(255)  NOT NULL,
  `tipo` varchar(255)  NOT NULL,
  `salt` varchar(255)  NULL DEFAULT NULL,
  `hash` varchar(255)  NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ;



 
 
 
 CREATE TABLE `proyectos`  (
  `idProyecto` int(11) NOT NULL,
  `nombre` varchar(255)  NULL DEFAULT NULL,
  `idAdministrador` int(11) NULL DEFAULT NULL,
  `idAsignado` int(11) NULL DEFAULT NULL,
  `prioridad` varchar(255)  NULL DEFAULT NULL,
  `estado` varchar(255)  NULL DEFAULT NULL,
  `fechaCreacion` varchar(255)  NULL DEFAULT NULL,
  `fechaTermino` varchar(255)  NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`idProyecto`) ,
  INDEX `proyectos_ibfk_1`(`idAdministrador`) ,
  INDEX `proyectos_ibfk_2`(`idAsignado`) ,
  FOREIGN KEY (`idAdministrador`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`idAsignado`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ;

 
 
 CREATE TABLE historias(
    `idHistoria` int(11) NOT NULL,
    `nombre` text  NOT NULL,
    `estado` varchar(255)  NOT NULL,
    `prioridad` varchar(255)  NOT NULL,
    `fecha_creacion` date NOT NULL,
    `fecha_finalizacion` date NULL DEFAULT NULL,
    `descripcion` text  NULL,
    `idProyecto` int(11) NULL DEFAULT NULL,
    `idAdministrador` int(11) NULL DEFAULT NULL,
    `idDesarrollador` int(11) NULL DEFAULT NULL,
    `createdAt` datetime(0) NOT NULL,
    `updatedAt` datetime(0) NOT NULL,
	PRIMARY KEY (`idHistoria`)
	FOREIGN KEY (`idProyecto`) REFERENCES `proyectos` (`idproyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`idAdministrador`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`idDesarrollador`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE
		
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
 