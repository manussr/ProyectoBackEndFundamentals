# Proyecto Backend Fundamentals - Equipo 7

  

  

Este proyecto sirve para la evaluación del módulo. Se debe desarrollar en equipos.

  

  

# Entregables:

  

  

## 📜 1. Reporte Escrito

  

  

Este reporte debe ser el archivo Readme.md del repositorio de GitHub en donde se encuentre el proyecto. Se deben abordar los siguientes puntos:

  

  

- Definir detalladamente las especificaciones del proyecto.

  

- Utilizar historias de usuario para definir el papel que jugaran.

  

  

## 👾 2. API

  

  

Se debe desarrollar una API con las siguientes características:

  

  

- El tema es a elección de los alumnos.

  

- Una base de datos poblada con al menos 50 registros cada uno con un id.

  

- Como mínimo la API debe tener el CRUD completo con los siguientes servicios:

  

- Servicio para crear un nuevo registro en la base.

  

- Servicio para eliminar un registro.

  

- Servicio para modificar un registro, se debe de considerar los casos de modifica- ciones por atributo, es decir, si los registros tienen un atributo nombre el servi- cio debe ser capaz de solo modificar el nombre. Así como una modificación total, es decir, de todos los atributos. Se recomienda definir servicios por separado para cada caso.

  

- Consulta por id.

  

- Consulta de todos los registros.

  

- Consulta por coincidencia de atributos, es decir, si los registros tienen un campo nombre el servicio debe ser capaz de regresar todos los registros que compartan el valor de nombre. Y esto debe funcionar en general para todos los campos de la base.

  

- Servicio de consulta de todos los registros, limitado a un número determinado por el cliente.

  

- Servicio de consulta por campos, es decir, un servicio que solo regrese los campos que se piden por el usuario.

  

- La API se debe desarrollar en Node.js.

  

- Utilizar un ORM/ODM para la conexión con la base de datos.

  

- Hacer deploy de la API usando Heroku.

  

  

## 👽 3. Swagger

  

  

Un swagger son la documentación de la API.

  

  

- Documentar cada uno de los servicios desarrollados en una página de swagger para que

  

los usuarios puedan consultarla.

  

- Seguir todas las buenas prácticas y requerimientos para la documentación.

  

  

## ✅ Rúbrica de evaluación

  
  

Para la evaluación del proyecto se usará la siguiente rúbrica:

  ![rubrica](https://github.com/beduExpert/Backend-Fundamentals-Santander/blob/main/Proyecto/img/rubrica.jpg)


  

## :man_technologist: Integrantes



- Edder Alejandro Serna Álvarez

- Alan Esaú García Gutiérrez

- Emmanuel Santos Rodríguez

  
# Proyecto - *Administrador de Proyectos Agiles*
  

## Especificaciones 📑

### **Temática del proyecto**

El tema de este proyecto será el de realizar una API para registrar el seguimiento de las historias de usuario en un proyecto desarrollado bajo la metodología de software ágil “SCRUM”.

### **Requerimientos del proyecto y estructura**

-   **Objetivo del proyecto**

Fungir como una herramienta de desarrollo de proyectos brindando un mejor control de flujo

-   **Usuarios del sistema**

Administrador.

Desarrollador.

-   **Métodos de Usuarios**


**Administrador** 

1. Crear Usuario

2. Obtener Usuario

3. Modificar Usuario

4. Eliminar Usuario

5. Iniciar Sesión de Usuario

6. Búsqueda por atributos de Usuario

7. Obtener Información Por Campos de Usuario

8. Crear Proyecto

9. Consultar Proyectos

10. Modificar Proyectos

11. Eliminar Proyecto

12. Consultar Proyecto Por ID

13. Consultar Proyecto por Atributo

14. Consulta Avanzada de Proyecto

15. Crear Historia

16. Consultar Historias

17. Modificar historia

18. eliminar Historia

19. Búsqueda de atributos de historia

20. Obtener Información de historia por campos


**Desarrollador**


1. Iniciar Sesión de Usuario

2. Búsqueda por atributos de Usuario

3. Obtener Información Por Campos de Usuario

4. Consultar Proyectos

5. Consultar Proyecto Por ID

6. Consultar Proyecto por Atributo

7. Consulta Avanzada de Proyecto

8. Consultar Historias

9. Búsqueda de atributos de historia

10. Obtener Información de historia por campos


**-   Entidades y sus Atributos**
***Entidades*** 
Usuario
Proyecto
Historia

***-   Atributos*** 



*Historia:*
- idHistoria
- Nombre
- Estado
- Descripción
- Prioridad
- Fecha creación
- Fecha finalizacion
- idProyecto
- idAdministrador
- idDesarrollador

*Usuario:*
- idUsuario
- Email
- Nombre
- Cargo
- Departamento
- Tipo
- Salt
- Hash


*Proyecto*
- idProyecto
- nombre
- idAdministrador
- idAsignado
- prioridad 
- estado
- fechaCreacion
- fechaTermino

**Historias de Usuario**

- Como administrador deseo crear, modificar y eliminar usuarios de tipo administrador y desarrollador.

- Como usuario deseo iniciar sesión para acceder a las opciones correspondiente al nivel de permisos correspondientes.

- Como Administrador deseo consultar un listado de usuarios totales

- Como administrador deseo consultar usuarios específicos indicando el id

- Como administrador deseo que los listados de búsqueda de usuarios, proyectos e historias tengan un límite que sea indicado por el usuario.

- Como administrador deseo buscar palabras que coincidan en cualquier atributo de usuario.

- Como administrador deseo Crear, modificar y eliminar proyectos

- Como usuario deseo consultar proyectos, ya sea de manera general o en específico.

- Como usuario deseo consultar el atributo de un proyecto específico.

- Como Administrador deseo crear, modificar y eliminar historias relacionadas a un proyecto

- Como usuario deseo consultar proyectos en general o especifico, y que incluya un límite en el listado.

## Diseño de Base de Datos 🖋

### Diagrama Entidad - Relacion

![](https://github.com/manussr/ProyectoBackEndFundamentals/blob/main/assets/img/DIAGRAMAENTIDADRELACION.png)

### Diagrama Relacional

![](https://github.com/manussr/ProyectoBackEndFundamentals/blob/main/assets/img/diagramaR.jpg)

### Diagrama de base de datos

![](https://github.com/manussr/ProyectoBackEndFundamentals/blob/main/assets/img/DiagramaBase.jpg)

### Descripcion de Tablas

    CREATE  DATABASE DVxKsCODLM;
    USE DVxKsCODLM;
    CREATE  TABLE  `usuarios` (
    `idUsuario`  int(11) NOT  NULL,
    `email`  varchar(255) NOT  NULL,
    `nombre`  varchar(255) NOT  NULL,
    `cargo`  varchar(255) NOT  NULL,
    `departamento`  varchar(255) NOT  NULL,
    `tipo`  varchar(255) NOT  NULL,
    `salt`  varchar(255) NULL  DEFAULT  NULL,
    `hash`  varchar(255) NULL  DEFAULT  NULL,
    `createdAt`  datetime(0) NOT  NULL,
    `updatedAt`  datetime(0) NOT  NULL,
    PRIMARY  KEY (`idUsuario`)
    ) ;
    
    CREATE  TABLE `proyectos` (
    `idProyecto`  int(11) NOT  NULL,
    `nombre`  varchar(255) NULL  DEFAULT  NULL,
    `idAdministrador`  int(11) NULL  DEFAULT  NULL 
    `idAsignado`  int(11) NULL  DEFAULT  NULL,
    `prioridad`  varchar(255) NULL  DEFAULT  NULL,
    `estado`  varchar(255) NULL  DEFAULT  NULL,
    `fechaCreacion`  varchar(255) NULL  DEFAULT  NULL,
    `fechaTermino`  varchar(255) NULL  DEFAULT  NULL,
    `createdAt`  datetime(0) NOT  NULL,
    `updatedAt`  datetime(0) NOT  NULL,
    PRIMARY  KEY (`idProyecto`) ,
    FOREIGN KEY (`idAdministrador`) REFERENCES  `usuarios` (`idusuario`) ON DELETE CASCADE  ON  UPDATE CASCADE,
    FOREIGN KEY (`idAsignado`) REFERENCES  `usuarios` (`idusuario`) ON DELETE CASCADE  ON  UPDATE CASCADE
    ) ;
    
    CREATE  TABLE  historias(
    `idHistoria`  int(11) NOT  NULL,
    `nombre`  text  NOT  NULL,
    `estado`  varchar(255) NOT  NULL,
    `prioridad`  varchar(255) NOT  NULL,
    `fecha_creacion`  date  NOT  NULL,
    `fecha_finalizacion`  date  NULL  DEFAULT  NULL,
    `descripcion`  text  NULL,
    `idProyecto`  int(11) NULL  DEFAULT  NULL,
    `idAdministrador`  int(11) NULL  DEFAULT  NULL,
    `idDesarrollador`  int(11) NULL  DEFAULT  NULL,
    `createdAt`  datetime(0) NOT  NULL,
    `updatedAt`  datetime(0) NOT  NULL,
    PRIMARY  KEY (`idHistoria`)
    FOREIGN KEY (`idProyecto`) REFERENCES  `proyectos` (`idproyecto`) ON DELETE CASCADE  ON  UPDATE CASCADE,
    FOREIGN KEY (`idAdministrador`) REFERENCES  `usuarios` (`idusuario`) ON DELETE CASCADE  ON  UPDATE CASCADE,
    FOREIGN KEY (`idDesarrollador`) REFERENCES  `usuarios` (`idusuario`) ON DELETE CASCADE  ON  UPDATE CASCADE
    );
    
### Registros de la base

    INSERT INTO `usuarios` VALUES (1, 'BrunoHartman@correo.com', 'Bruno Hartman', 'Auxiliar_B', 'Gestion_planificacion_y_estrategia_de_servicios', 'Administrador', 'ada5d013375f936423e46af4ae94c66a', '31e7d1558ffea57f2b05f4b6626df059994d068fb84f49b944b4e676c4da4d5361a14d383be99885821d75e6776f48f5aa2c66b312f06bbc7f49517edc153ecd', '2021-03-15 05:31:50', '2021-03-15 05:31:50');
    INSERT INTO `usuarios` VALUES (2, 'FleurSims@correo.com', 'Fleur Sims', 'SubJefe', 'Control_de_riesgos', 'Administrador', '826b11216e20128524dae5979ab4c4d5', 'fb6f22f7baec76319afaaa30123d5e6ec51ef612cf55e7a707f96ce655c6ce4866d1dfe3cc847edfecb4319455da25779084a8237caada5043cdcebba1d48e25', '2021-03-15 05:32:12', '2021-03-15 05:32:12');
    INSERT INTO `usuarios` VALUES (3, 'KasimirStevenson@correo.com', 'Kasimir Stevenson', 'Auxiliar_A', 'Sistemas_e_infraestructuras', 'Administrador', 'dc990dcc1e6946d580765a355ac84ecc', '68c1e2189a50c96f1cb4e4f2e2a81f0f3146cad49fb8d8f9e5db7657eb4617fb0065a5c737c14ff7b7f623718489600a78e7c4800816e0301497a60005194823', '2021-03-15 05:32:23', '2021-03-15 05:32:23');
    INSERT INTO `usuarios` VALUES (4, 'GalvinHarrell@correo.com', 'Galvin Harrell', 'Jefe', 'Sistemas_e_infraestructuras', 'Desarrollador', 'e65c385645880d2e9ccc13a9f7649050', '25a1e0adb0eda965648a0d84184580c139ce5d4565814d4b808898a3f239637c0335a8d97420717ce5bb3c2e364972a1a65ecafda7cd35919eb94a335c5e7e95', '2021-03-15 05:32:33', '2021-03-15 05:32:33');
    INSERT INTO `usuarios` VALUES (5, 'FaithConrad@correo.com', 'Faith Conrad', 'Jefe', 'Gestion_planificacion_y_estrategia_de_servicios', 'Administrador', '93cbeeef8808510b1384f28722bbeaaa', '125b860d9cf2903b3823605b9684bac5aeb582c73a0dc36ba067f98c6a24a1c1ad721f1c1a7675788b96d975c3e2f8ae334c43198e0014d228201c964bb20177', '2021-03-15 05:33:26', '2021-03-15 05:33:26');
    INSERT INTO `usuarios` VALUES (6, 'ChristenWebster@correo.com', 'Christen Webster', 'Jefe', 'Comunicaciones', 'Desarrollador', '01496c1426212225d13242bbc19b5476', '64eda7bef3b3322bf6bfbaffa7cd58f46c0c808f8d6033343c72fba21831eee99f7c8e5abecaa9d5b0b285d7457bea36c0af8bca890b170838903af16c66b86a', '2021-03-15 05:33:39', '2021-03-15 05:33:39');
    INSERT INTO `usuarios` VALUES (7, 'DanePollard@correo.com', 'Dane Pollard', 'Jefe', 'Negocio_y_aplicaciones_empresariales', 'Desarrollador', 'b14735bf33a7a704714ce9da4f48f104', 'd946153a4a6ab14a18ed0e78627e1427b8c8ca8e637c993e8f629b231aa2b8b7738539bde519caa85a3d2760dd6fdfbdf41e35f22ada33e2b91f85916b48886e', '2021-03-15 05:33:50', '2021-03-15 05:33:50');
    INSERT INTO `usuarios` VALUES (8, 'ChelseaJimenez@correo.com', 'Chelsea Jimenez', 'Jefe', 'Control_de_riesgos', 'Desarrollador', '93e7440d55bdbc0e672c0ce5224e3118', '1434d799b616b464624b94480e748495b6c5d7a162d7ae8f61407879d5f65209ccc3581bbb58912db52269af80bd8865276cb2ff52eafcebc8525ec0577dc189', '2021-03-15 05:33:59', '2021-03-15 05:33:59');
    INSERT INTO `usuarios` VALUES (9, 'AureliaFisher@correo.com', 'Aurelia Fisher', 'SubJefe', 'Sistemas_e_infraestructuras', 'Desarrollador', 'b48dfdc148eb746de80e7539c4a348a7', '47a964fbd92141ab2cf7dba7aedaa78caf844d7a308e5a049b5ff361983877b1d2f4233fdb06f438e9f52757c176670736817799fdc95f3a15d0868fdd749b28', '2021-03-15 05:34:11', '2021-03-15 05:34:11');
    INSERT INTO `usuarios` VALUES (10, 'DarylBarton@correo.com', 'Daryl Barton', 'Auxiliar_B', 'Centro_de_atencion_al_usuario', 'Administrador', '2a026e9ff7174e2cba36cd451b26c05e', 'ad4c7ea5efc374f29e52783912033ea13d6fedfd301ee4a8970530fc7eeffd8d3ceffeddb08bf1ee09a0d9f0e2387f16453609bf1aaf1d68f9acdd831501f2a3', '2021-03-15 05:34:21', '2021-03-15 05:34:21');
    INSERT INTO `usuarios` VALUES (11, 'LaithSharp@correo.com', 'Laith Sharp', 'Auxiliar_B', 'Centro_de_atencion_al_usuario', 'Administrador', 'c54c8fb0b6ca2c681c5c1bf9b3fb1370', 'f02d6dde23e3f9af376bd407f72234f9c1e5e664f894582101732560ae06c3c5865caa51e6690b757d5e8bfcd46f5415779d9f04be06fb20761be2b1c35df375', '2021-03-15 05:40:28', '2021-03-15 05:40:28');
    INSERT INTO `usuarios` VALUES (12, 'GannonKirk@correo.com', 'Gannon Kirk', 'Jefe', 'Gestion_planificacion_y_estrategia_de_servicios', 'Administrador', '73c9c163db5ead9ce0abe8ea60ee24ee', 'eea849e9d883b3f584d1d69ba9691cfdf4495c3947b345b860cbac4674b7c7538d62d732805a9d04fae7e634fd4c976650e0419f8648888104d1da2394c48b46', '2021-03-15 05:40:43', '2021-03-15 05:40:43');
    INSERT INTO `usuarios` VALUES (13, 'GeorgeSawyer@correo.com', 'George Sawyer', 'SubJefe', 'Comunicaciones', 'Administrador', 'c50496635e37e2eba3679603d8bc8d48', 'e025ccbdc6a51003a342559f04933a4e3419e3089492fb26eafdfe7e099be0d2daf50148c1ba32405123e318af4e1aee4c2885af8f987c6f962745a9297c4509', '2021-03-15 05:40:57', '2021-03-15 05:40:57');
    INSERT INTO `usuarios` VALUES (14, 'JesseHutchinson@correo.com', 'Jesse Hutchinson', 'Jefe', 'Negocio_y_aplicaciones_empresariales', 'Desarrollador', '019388fa652c0a8ab8149ad431270753', '1b628510dd2c5b93483ac4adc22f0b4f42ca1a5821de359a5c262be9f71973d6b23c125ee27f8d4aa0f1198872952047a0519879b9fc4ff508e389465012760a', '2021-03-15 05:41:11', '2021-03-15 05:41:11');
    INSERT INTO `usuarios` VALUES (15, 'BiancaMueller@correo.com', 'Bianca Mueller', 'Auxiliar_B', 'Negocio_y_aplicaciones_empresariales', 'Desarrollador', 'e22491d076f13e9eae8807a270a6dcf9', '1891e9b9a46d8bb85cf103be8f03ade124e0aa09b99ea689e1e31139f189b1b8457d434b9d8b1dbd08c2c3236da4c90b30771e88e588a6783bc1121de7252916', '2021-03-15 05:42:29', '2021-03-15 05:42:29');
    INSERT INTO `usuarios` VALUES (16, 'HedwigWilliams@correo.com', 'Hedwig Williams', 'Auxiliar_B', 'Comunicaciones', 'Administrador', 'a6614b11c8b5fa2ca4c281467ba67bd3', '3e690e1f22323e46d902b13d0ef6afaa9977196e03606fc7005da58c67c8ba8257052c3e548ac5bdaa944c270b2cb7772216c388c2de7a91cce2061b7e58e00b', '2021-03-15 05:42:43', '2021-03-15 05:42:43');
    INSERT INTO `usuarios` VALUES (17, 'BaxterPark@correo.com', 'Baxter Park', 'SubJefe', 'Comunicaciones', 'Administrador', '8f5a750b514413beaa7a8388958874ba', '2ec833df451370ac1fc7d1da267cb8d60e096e5d657db0eea1bbd47661e89d1781615b492c0ebdbfec37b3186d7453c9ed838a3f628b8bfa50086b0894ba19de', '2021-03-15 05:42:55', '2021-03-15 05:42:55');
    INSERT INTO `usuarios` VALUES (18, 'MartinFowler@correo.com', 'Martin Fowler', 'Auxiliar_A', 'Sistemas_e_infraestructuras', 'Desarrollador', '41df1ee195f739c929fd0bdb523b7672', 'c2a3b294243a2be0e472d13a5af0f8c250bd5d1411d588d355faa10b93af407b0c8901d3b2c2f377db72f2b3374cbfe87e1b4b0e03c3eecb5fd4d287b7baf988', '2021-03-15 05:43:10', '2021-03-15 05:43:10');
    INSERT INTO `usuarios` VALUES (19, 'KyraShannon@correo.com', 'Kyra Shannon', 'Auxiliar_A', 'Gestion_planificacion_y_estrategia_de_servicios', 'Desarrollador', '5e804b1aaefe84d9e7a1d55ec5c63f9c', '0313f58a0d54faeb06db1c125dded2ee0a79df5ce2b19fc7b926ca55e1df30f257ed9eedd73f1c9bf8b051f0dcf6ad045d308e8c50632439ca69a8aca413c884', '2021-03-15 05:43:20', '2021-03-15 05:43:20');
    INSERT INTO `usuarios` VALUES (20, 'ShellyWilson@correo.com', 'Shelly Wilson', 'Auxiliar_B', 'Control_de_riesgos', 'Administrador', '560aca368d093b0592b30a81c39ae427', '4e07a344dc02fed1473aeb0ec5a83ecd298227bd0fbdde9e2848b6dbcd65ee85dbed8b35cd826a11b5334142f09a2222253f6f1cd83886d116a269843ba32611', '2021-03-15 05:43:30', '2021-03-15 05:43:30');
    INSERT INTO `usuarios` VALUES (48, 'edz2@g.com', 'Pepe Rodriguez', 'desarrollador', 'dept-4', 'administrador', '7dc24ef7869fa1ffaa52c48d5a2f2608', 'aa6751097fa6325f94d06f67c92f70df4eef68263a3e5f0ff3b2328cd2c98f807e3cc591c885f0900735e08f9276c21f01f72bf3500f7e8ac94a01e475df9f1d', '2021-03-15 05:31:16', '2021-03-15 05:31:16');
    INSERT INTO `usuarios` VALUES (100, 'expertoBedu@correo.com', 'Experto Bedu', 'Experto', 'Centro_de_atencion_al_usuario', 'Administrador', '3223ed51b7fd7bc0080a13e74ff9af72', 'a915529b9fc6a6982fbd4f39e01ca4f552bc430bd974c1a4c50335e763caaea68060d1cff9cae0c6c000da00f3a40df400eeb038ce4cdab96ee0f7662a163343', '2021-03-15 05:35:04', '2021-03-15 05:35:04');

     INSERT  INTO  `proyectos` (`idProyecto`,`nombre`,`idAdministrador`,`idAsignado`,`prioridad`,`estado`,`fechaCreacion`,`fechaTermino`,`createdAt`,`updatedAt`) VALUES 
     (1,"Proyecto Tienda",1,2,"M","Finalizado","2020-05-10 04:26:18","2021-01-29 12:01:56","2021-03-15 03:22:59","2021-03-15 03:22:59"),
	(2,"Proyecto Oficina",1,2,"B","Finalizado","2020-02-01 05:42:26","2020-12-01 05:02:55","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (3,"Proyecto Banco",1,2,"B","En desarrollo","2020-12-16 18:57:55",NULL,"2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (4,"Proyecto Hospital",1,2,"A","Finalizado","2020-01-17 08:31:31","2020-02-03 11:30:44","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (5,"Proyecto Administracion Escolar",1,2,"A","En desarrollo","2021-09-29 16:33:09",NULL,"2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (6,"Proyecto Casa",1,2,"B","Finalizado","2021-08-10 10:18:51","2020-07-17 18:53:44","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (7,"Proyecto Experimental",1,2,"A","Finalizado","2021-07-04 15:22:30","2020-10-28 11:40:13","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (8,"Proyecto Hotel",1,2,"B","Finalizado","2021-09-20 06:18:42","2021-06-01 11:40:49","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (9,"Proyecto Periodico",1,2,"B","Finalizado","2020-01-14 15:05:11","2021-07-11 05:05:10","2021-03-15 03:22:59","2021-03-15 03:22:59"),
    (10,"Proyecto Red Social",1,2,"A","En desarrollo","2020-07-17 01:07:01",NULL,"2021-03-15 03:22:59","2021-03-15 03:22:59");



        INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1000,"Como VP de Mercadeo, quiero seleccionar el período de tiempo en el cual realizaré la revisión de las ventas.","Finalizada","A","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,2,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1001,"Como VP de Mercadeo, puedo clasificar la información de ventas por región geográfica y productos.","Finalizada","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1002,"Como un operador hotelero, quiero establecer la tarifa óptima para las habitaciones en base a los precios del año anterior.","Finalizada","B","2021-03-14",NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1003,"Como un operador hotelero, quiero establecer la tarifa óptima para las habitaciones en base a las tarifas de otros hoteles comparables con el mío.","En Preparacion","A","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1004,"Como Cliente, quiero suscribirme a un nuevo plan de T.V. por cable por medio del sitio web.","Finalizada","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1005,"Como Cliente, quiero pagar mi suscripción mensual vía sitio web por medio de transferencia bancaria o tarjeta de crédito.","Finalizada","B","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1006," Como Cliente, quiero suscribirme a un canal de T.V Premium por períodos flexibles de tiempo por medio del sitio web.","Finalizada","A","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1007,"Como Cliente, consultar un listado de las suscripciones de Pay per View que se han realizado en mi cuenta.","Finalizada","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1008,"Como Vendedor, quiero registrar los productos y cantidades que me solicita un cliente para crear un pedido de venta.","Finalizada","B","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1009,"Como Supervisor de ventas, quiero consultar un listado de los pedidos de venta que han sido registrados y aún no han sido procesados.","Finalizada","A","2021-03-14",NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1010,"Como Gerente de ventas, quiero consultar los pedidos de venta procesados clasificándolos por vendedor, región y líneas de producto.","En Preparacion","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4,"2021-03-14 16:57:22","2021-03-14 16:57:22");
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1011," Como Analista de logística, quiero seleccionar un pedido de venta y enviarlo al almacén para que procedan con su preparación.","Finalizada","B","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1012,"Como Analista de almacén, quiero listar todos los pedidos de venta recibidos que debo preparar.","Finalizada","A","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1013,"Como Analista de logística, quiero poder consultar todos los pedidos preparados listos para ser despachados.","Finalizada","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1014,"Como Analista de logística, quiero que el sistema me sugiera la ruta más corta en base a una serie de despachos de mercancía y un transporte.","Finalizada","B","2021-03-14",NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1015,"Como Analista de compras, quiero crear una nueva solicitud de cotización.","En Desarrollo ","A","2021-03-14",NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1016," Como Analista de compras, quiero definir si una solicitud de cotización es de adjudicación directa o de licitación.","En Preparacion","M""2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1017,"Como Gerente de compras, quiero que el sistema requiera de mi aprobación para toda solicitud de cotización de adjudicación directa con monto mayor a USD 5.000.","Finalizada","B","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1018,"Como Analista de compras, quiero que el sistema notifique vía correo electrónico a los proveedores cuando se ha enviado una cotización de licitación.","Finalizada","A",17/07/2020,NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1019,"Como Representante de proveedor, quiero poder consultar los procesos de licitación que están en curso.","En Desarrollo ","M",16/12/2020,NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,2,4);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1020,"Como Representante de proveedor, quiero ofertar una cotización para un proceso que esté abierto por licitación.","En Preparacion","B","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,3,7);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1021," Como Ejecutivo de cuenta, quiero consultar los datos de un cliente suministrándole al sistema su documento de identidad o código de cliente.","Finalizada","A",16/12/2020,NULL,"Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,6);
    
    INSERT  INTO  `historia` (`idHistoria`,`nombre`,`estado`,`prioridad`,`fecha_creacion`,`fecha_finalizacion`,`descripcion`,`idProyecto`,`idAdministrador`,`idDesarrollador`,`createdAt`,`updatedAt`) VALUES (1022,"Como Ejecutivo de cuenta, quiero poder abrir una nueva cuenta de cheques a un cliente, seleccionando el código de cliente y producto bancario.","En Desarrollo ","M","2021-03-14","2021-03-14","Lorem ipsum dolor sit amet consectetur, adipiscing elit integer eu quam, tempus feugiat felis rhoncus.",1,1,4);

# Links 
 
 Descripcion de la API  👉  [Swagger](https://app.swaggerhub.com/apis-docs/myjira-bedu/ProyectoBackendFundamentalsBedu/1)

Deploy de API  👉 [Heroku](https://proyecto-equipo7-bedu.herokuapp.com/v1)

Repositorio de la API   👉    [![enter image description here](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/manussr/ProyectoBackEndFundamentals) 





Presentacion de proyecto 👉 [Video](https://drive.google.com/file/d/1dwZ5SfR2ZZbNJ3GYRqmESdey8hF2dpgh/view?usp=sharing)


# Datos

Credenciales para realizar peticiones con autenticacion: 
- *Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJub21icmUiOiJFeHBlcnRvIEJlZHUiLCJleHBpcmF0aW9uIjpudWxsLCJpYXQiOjE2MTU3ODY1MDV9.nKA8la_jXhPnG0SOhr-LUWSl9eVhiESAEbmoqoWS-rc*
- *Email: expertoBedu@correo.com*
- *Contraseña: test100*

