/* Consultas postwork 6*/

/* 1 Seleccionar proyectos que hayan sido creado en los ultimos 3 meses por usuarios de tipo administrador */

select u.nombre, p.nombre, p.fecha_creacion from proyecto p join usuario u on u.idUsuario = p.idCreador 
where year(p.fecha_creacion) = year(current_date - interval 3 month) 
and month(p.fecha_creacion) = month(current_date - interval 3 month) and u.tipo = 'Administrador';

/* 2 Seleccionar los usuarios de tipo desarrollador que se desempeñan como jefes en su departamento*/

select u.nombre, u.departamento from usuario u 
where u.tipo = 'Desarrollador' and u.cargo = 'Jefe';

/* 3 Seleccionar los proyectos activos creados por algun usuario administrador que pertenezca al departamento de centro de atencion al usuario*/

select u.nombre, p.nombre from usuario u join proyecto p on p.idCreador = u.idUsuario 
where u.idUsuario in (select idUsuario from usuario where departamento like '%centro_de_atencion_al_usuario%' and tipo = 'Administrador') 
and p.estado = 1;

/* 4 Seleccionar los proyectos de prioridad baja que están proyectados para finalizarse en los próximos 6 meses */
select p.nombre, p.fecha_finalizacion from proyecto p 
where p.fecha_finalizacion between current_date and date_add(current_date, interval 6 month) 
and p.prioridad = 'B';

/* 5 Seleccionar los usuarios que hayan creado al menos un proyecto*/
select u.* from usuario u where exists(select 1 from proyecto p where p.idCreador = u.idUsuario);

/* 6 Seleccionar las el encargado, el nombre de la historia y el nombre del proyecto de los proyectos que esten activos y que hayan sido creados por 
    personal del departamento de desarrollo de nuevas tecnologias */
  select h.nombre as historia, d.nombre as encargado, p.nombre as proyecto 
  from historia h join proyecto p on h.idProyecto = p.idProyecto 
  join usuario d on h.idDesarrollador =d.idUsuario
  join usuario e on e.idUsuario = h.idAdministrador
  where p.estado = 1 and e.idUsuario in (select idUsuario from usuario where departamento like '%desarrollo_y_nuevas_tecnologias%');

/* 7 Seleccionar los proyectos que tienen más de 4 historias asociadas*/
  select p.nombre from proyecto p 
  left join historia h on p.idProyecto = h.idProyecto 
  group by p.nombre having count(h.idProyecto) > 4;

/* 8 Seleccionar los proyectos en desarrollo de prioridad baja que tienen historias con prioridad alta que estén en proceso */ 
  select p.nombre from proyecto p 
  join historia h on p.idProyecto = h.idProyecto 
  where p.prioridad = 'B' and h.prioridad = 'A';