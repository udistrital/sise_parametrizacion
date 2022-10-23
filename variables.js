let varsByGroups = [
  // INFO EMPRESARIAL (OPCIONAL)
  {
    name: "Nombre de su empresa",
    group: "Información empresarial"
  },
  {
    name: "NIT de la empresa",
    group: "Información empresarial"
  },
  {
    name: "Sector economico de la empresa",
    group: "Información empresarial"

  },
  {
    name: "Sitio web de la empresa",
    group: "Información empresarial"

  },
  {
    name: "Fecha de fundacion de la empresa",
    group: "Información empresarial"

  },
  {
    name: "Actividades que realiza la empresa",
    group: "Información empresarial"

  },
  {
    name: "Necesidades profesionales (satisfaccion)",
    group: "Información empresarial"

  },
  {
    name: "Necesidades economicas (satisfaccion)",
    group: "Información empresarial"

  },
  {
    name: "Necesidades desarrollo personal (satisfaccion)",
    group: "Información empresarial"

  },
  {
    name: "Necesidades con su empresa (satisfaccion)",
    group: "Información empresarial"

  },
  {
    name: "Cantidad de empleados",
    group: "Información empresarial"

  },
  {
    name: "Cantidad de profesionales o tecnologos empleados",
    group: "Información empresarial"

  },
  {
    name: "Cantidad de egresados de la UD profesionales o tecnologos empleados",
    group: "Información empresarial"

  },
  {
    name: "Cantidad de empleos operativos, asistenciales o de apoyo generados",
    group: "Información empresarial"

  },
  // END INFO EMPRESARIAL(OPCIONAL)

  // INFO PERSONAL
  {
    name: "Foto de perfil SISE",
    group: 70
  },
  {
    name: "Nacionalidad",
    group: 70
  },
  {
    name: "Red social 1",
    group: 70
  },
  {
    name: "Red social 2",
    group: 70
  },
  {
    name: "Codigo del pais",
    group: 70
  },
  {
    name: "Pais residencia",
    group: 70
  },
  {
    name: "Departamento residencia",
    group: 70
  },
  {
    name: "Municipio residencia",
    group: 70
  },
  {
    name: "Localidad residencia",
    group: 70
  },
  {
    name: "Direccion residencia",
    group: 70
  },
  {
    name: "Intereses",
    group: 70
  },


  // INFO ACADEMICA
  {
    name: "NOMBRE_COLEGIO",
    group: 17
  },
  {
    name: "CIUDAD_COLEGIO",
    group: 17
  },
  {
    name: "FECHA_GRADUACION",
    group: 17
  },
  {
    name: "Programas de posgrado titulados en la UD",
    group: 17
  },



  // INFO LABORAL
  {
    name: "Principal dificultad a la hora de conseguir trabajo",
    group: 19
  },
  {
    name: "Canal de busqueda de empleo",
    group: 19
  },
  {
    name: "PROBLEMÁTICAS EN DONDE CONSIDERA QUE HA APORTADO",
    group: 19
  },
  {
    name: "Otra PROBLEMÁTICA EN DONDE CONSIDERA QUE HA APORTADO",
    group: 19
  },
  {
    name: "Situacion laboral",
    group: 19
  },
  {
    name: "Cuánto tiempo (en meses) lleva en esta actividad o trabajo?",
    group: 19
  },
  {
    name: "Ingreso o salario (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Cantidad de horas (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Aplicacion de conocimientos de la carrera  (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Retos y desafíos intelectuales (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Oportunidades de ascenso (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Estabilidad (Satisfaccion laboral)",
    group: 19
  },
  {
    name: "Ingreso o salario",
    group: 19
  },
  {
    name: "Razon de vinculacion",
    group: 19
  },
  {
    name: "Otra razon de vinculacion",
    group: 19
  },
  {
    name: "Estatus laboral",
    group: 19
  },
  {
    name: "Actividades que realiza",
    group: 19
  },
  {
    name: "Tipo de contrato",
    group: 19
  },
  {
    name: "Sector",
    group: 19
  },
  {
    name: "Grupo de actividad economica",
    group: 19
  },
  {
    name: "Formas de trabajo Independientes",
    group: 19
  },
  {
    name: "Nombre de la empresa en donde labora",
    group: 19
  },
  {
    name: "Nombre de la empresa",
    group: 19
  },
  {
    name: "Cuales son los productos o servicios",
    group: 19
  },
  {
    name: "Ciudad/ municipio / provincia de ubicacion de la empresa",
    group: 19
  },
  {
    name: "Operacion de la empresa",
    group: 19
  },
  {
    name: "Etapa en que se encuetra la empresa",
    group: 19
  },
  {
    name: "En la actualidad, en qué actividad ocupa la mayor parte de su tiempo?",
    group: 19
  },
  {
    name: "Desea conseguir un trabajo o realizar una actividad remunerada?",
    group: 19
  },
  {
    name: "Durante el ultimo mes, hizo alguna diligencia para conseguir un trabajo o realizar una actividad remunerada?",
    group: 19
  },
  {
    name: "Aunque desea trabajar, por qué motivo no hizo diligencias para buscar un trabajo en el ultimo mes?",
    group: 19
  },
  {
    name: "Si le resultara algun trabajo remunerado Está disponible para empezar a trabajar?",
    group: 19
  },
  {
    name: "Hace cuántos meses ha estado buscando empleo?",
    group: 19
  },
  {
    name: "Si desea comentarnos más a detalle acerca de sus aportes, contribuciones o logros, puede hacerlo a continuacion",
    group: 19
  },


  // INFO EMPRENDIMIENTO VARIABLES
  {
    name: "MOTIVACION_EMPRENDER",
    group: "Información de emprendimiento"

  },
  {
    name: "DESARROLLADO_PROTOTIPO_MERCADO",
    group: "Información de emprendimiento"

  },
  {
    name: "TIENE_INTERES_DESARROLLAR_PROTOTIPO",
    group: "Información de emprendimiento"

  },
  {
    name: "PRODUCTOS_SERVICIOS_PROYECTA_SON",
    group: "Información de emprendimiento"

  },
  {
    name: "QUE _TANTO_INTERES_CREAR_EMPRESA",
    group: "Información de emprendimiento"

  },
  {
    name: "CUANTO_TIEMPO_DEDICAR_PROYECTO_NEGOCIO",
    group: "Información de emprendimiento"

  },
  {
    name: "TIPO_EMPRENDIMIENTO",
    group: "Información de emprendimiento"

  },
  {
    name: "TECNOLOGIAS_PROYECTO",
    group: "Información de emprendimiento"

  },
  {
    name: "TECNOLOGIAS_PROYECTO_OTRO",
    group: "Información de emprendimiento"

  },
  {
    name: "HERRAMIENTAS_RECURSOS_EMPRENDIMIENTO",
    group: "Información de emprendimiento"

  },
  {
    name: "HERRAMIENTAS_RECURSOS_EMPRENDIMIENTO_OTRO",
    group: "Información de emprendimiento"

  },
  {
    name: "CUALES_TEMATICAS_ORIENTACION",
    group: "Información de emprendimiento"

  },
  {
    name: "HA_VENDIDO_PRODUCTO_SERVICIO",
    group: "Información de emprendimiento"

  },
  {
    name: "QUIEN_VENDIDO_PRODUCTO_SERVICIO",
    group: "Información de emprendimiento"

  },
  {
    name: "CANALES_EMPLEO_VENDER_PRODUCTO",
    group: "Información de emprendimiento"

  },
  {
    name: "CANALES_EMPLEO_VENDER_PRODUCTO_OTRO",
    group: "Información de emprendimiento"

  },
  {
    name: "COMO_OBTUVO_CAPITAL_VENDER",
    group: "Información de emprendimiento"

  },
  {
    name: "COMO_OBTUVO_CAPITAL_VENDER_OTRO",
    group: "Información de emprendimiento"

  },
  {
    name: "CONOCE_TRAMITES_PARA_EMPRENDIMIENTO",
    group: "Información de emprendimiento"

  },
  {
    name: "CONOCE_ASPECTOS_TRIBUTARIOS_PROYECTO",
    group: "Información de emprendimiento"

  },
  {
    name: "PROCESO_CONTRATACION_CLIENTES_PROVEEDORES",
    group: "Información de emprendimiento"

  },
  {
    name: "PROCESO_CONTRATACION_EMPLEADOS",
    group: "Información de emprendimiento"

  },
  {
    name: "RECURSOS_INICIAR_EMPRESA",
    group: "Información de emprendimiento"

  },
  {
    name: "RECURSOS_INICIAR_EMPRESA_OTRO",
    group: "Información de emprendimiento"

  },
  {
    name: "ESTRUCTURA_COSTOS_INGRESOS",
    group: "Información de emprendimiento"

  },
  {
    name: "ASPECTOS_DEFINIDOS_EMPRENDIMIENTO",
    group: "Información de emprendimiento"

  },


  // INFO ESTUDIANTES VARIABLES
  {
    name: "¿En la actualidad tiene personas a cargo?",
    group: "Información de estudiantes"

  },
  {
    name: "Con motivo de su próxima graduación, ¿Cuál es su nivel de expectativa e incertidumbre frente a la obtención de su título?",
    group: "Información de estudiantes"

  },
  {
    name: "Que aspectos o competencias le generan inseguridad frente a su perfil profesional",
    group: "Información de estudiantes"

  },
  {
    name: "Desea obtener información del Seminario de empleabilidad",
    group: "Información de estudiantes"

  },
  {
    name: "Seleccione la Facultad de la que es egresado",
    group: "Información de estudiantes"

  },
  {
    name: "Seleccione su carrera",
    group: "Información de estudiantes"

  },
  {
    name: "Indiqué la fecha programada o estimada de su graduación",
    group: "Información de estudiantes"

  },
  {
    name: "Después de su graduación, ¿cuál de las siguientes opciones de formación ha pensado realizar?",
    group: "Información de estudiantes"

  },
  {
    name: "¿Tiene conocimiento de los beneficios aplicables en programas de posgrados para egresados?",
    group: "Información de estudiantes"

  },
  {
    name: "Seleccione los posgrados de su interés y en los cuales desea obtener información",
    group: "Información de estudiantes"

  },
]

// TRASH
let variables = [
  "Foto de perfil SISE",

  // INFO PERSONAL
  "Nacionalidad",
  "Lugar de nacimiento",
  "Estado Civil",
  "Tipo de poblacion",
  "Condiciones discapacidad",
  "Correo personal",
  "Red social 1",
  "Red social 2",
  "Codigo del pais",
  "Celular",
  "Pais residencia",
  "Departamento residencia",
  "Municipio residencia",
  "Localidad residencia",
  "Direccion residencia",
  "Intereses",

  // INFO ACADEMICA
  "Programas de posgrado titulados en la UD",

  // INFO EMPRESARIAL (OPCIONAL)
  "Nombre de su empresa",
  "NIT de la empresa",
  "Sector economico de la empresa",
  "Sitio web de la empresa",
  "Fecha de fundacion de la empresa",
  "Actividades que realiza la empresa",
  "Necesidades profesionales (satisfaccion)",
  "Necesidades economicas (satisfaccion)",
  "Necesidades desarrollo personal (satisfaccion)",
  "Necesidades con su empresa (satisfaccion)",
  "Cantidad de empleados",
  "Cantidad de profesionales o tecnologos empleados",
  "Cantidad de egresados de la UD profesionales o tecnologos empleados",
  "Cantidad de empleos operativos, asistenciales o de apoyo generados",
  // END INFO EMPRESARIAL (OPCIONAL)

  "Principal dificultad a la hora de conseguir trabajo",
  "Canal de busqueda de empleo",
  "PROBLEMÁTICAS EN DONDE CONSIDERA QUE HA APORTADO",
  "Otra PROBLEMÁTICA EN DONDE CONSIDERA QUE HA APORTADO",
  "Situacion laboral",
  "Cuánto tiempo (en meses) lleva en esta actividad o trabajo?",
  "Ingreso o salario (Satisfaccion laboral)",
  "Cantidad de horas (Satisfaccion laboral)",
  "Aplicacion de conocimientos de la carrera  (Satisfaccion laboral)",
  "Retos y desafíos intelectuales (Satisfaccion laboral)",
  "Oportunidades de ascenso (Satisfaccion laboral)",
  "Estabilidad (Satisfaccion laboral)",
  "Ingreso o salario",
  "Razon de vinculacion",
  "Otra razon de vinculacion",
  "Estatus laboral",
  "Actividades que realiza",
  "Tipo de contrato",
  "Sector",
  "Grupo de actividad economica",
  "Formas de trabajo Independientes",
  "Nombre de la empresa en donde labora",
  "Nombre de la empresa",
  "Cuales son los productos o servicios",
  "Ciudad/ municipio / provincia de ubicacion de la empresa",
  "Operacion de la empresa",
  "Etapa en que se encuetra la empresa",
  "En la actualidad, en qué actividad ocupa la mayor parte de su tiempo?",
  "Desea conseguir un trabajo o realizar una actividad remunerada?",
  "Durante el ultimo mes, hizo alguna diligencia para conseguir un trabajo o realizar una actividad remunerada?",
  "Aunque desea trabajar, por qué motivo no hizo diligencias para buscar un trabajo en el ultimo mes?",
  "Si le resultara algun trabajo remunerado Está disponible para empezar a trabajar?",
  "Hace cuántos meses ha estado buscando empleo?",
  "Si desea comentarnos más a detalle acerca de sus aportes, contribuciones o logros, puede hacerlo a continuacion",

  // INFO EMPRENDIMIENTO VARIABLES
  "MOTIVACION_EMPRENDER",
  "DESARROLLADO_PROTOTIPO_MERCADO",
  "TIENE_INTERES_DESARROLLAR_PROTOTIPO",
  "PRODUCTOS_SERVICIOS_PROYECTA_SON",
  "QUE _TANTO_INTERES_CREAR_EMPRESA",
  "CUANTO_TIEMPO_DEDICAR_PROYECTO_NEGOCIO",
  "TIPO_EMPRENDIMIENTO",
  "TECNOLOGIAS_PROYECTO",
  "TECNOLOGIAS_PROYECTO_OTRO",
  "HERRAMIENTAS_RECURSOS_EMPRENDIMIENTO",
  "HERRAMIENTAS_RECURSOS_EMPRENDIMIENTO_OTRO",
  "CUALES_TEMATICAS_ORIENTACION",
  "HA_VENDIDO_PRODUCTO_SERVICIO",
  "QUIEN_VENDIDO_PRODUCTO_SERVICIO",
  "CANALES_EMPLEO_VENDER_PRODUCTO",
  "CANALES_EMPLEO_VENDER_PRODUCTO_OTRO",
  "COMO_OBTUVO_CAPITAL_VENDER",
  "COMO_OBTUVO_CAPITAL_VENDER_OTRO",
  "CONOCE_TRAMITES_PARA_EMPRENDIMIENTO",
  "CONOCE_ASPECTOS_TRIBUTARIOS_PROYECTO",
  "PROCESO_CONTRATACION_CLIENTES_PROVEEDORES",
  "PROCESO_CONTRATACION_EMPLEADOS",
  "RECURSOS_INICIAR_EMPRESA",
  "RECURSOS_INICIAR_EMPRESA_OTRO",
  "ESTRUCTURA_COSTOS_INGRESOS",
  "ASPECTOS_DEFINIDOS_EMPRENDIMIENTO",

  // INFO ESTUDIANTES VARIABLES
  "¿En la actualidad tiene personas a cargo?",
  "Con motivo de su próxima graduación, ¿Cuál es su nivel de expectativa e incertidumbre frente a la obtención de su título?",
  "Que aspectos o competencias le generan inseguridad frente a su perfil profesional",
  "Desea obtener información del Seminario de empleabilidad",
  "Seleccione la Facultad de la que es egresado",
  "Seleccione su carrera",
  "Indiqué la fecha programada o estimada de su graduación",
  "Después de su graduación, ¿cuál de las siguientes opciones de formación ha pensado realizar?",
  "¿Tiene conocimiento de los beneficios aplicables en programas de posgrados para egresados?",
  "Seleccione los posgrados de su interés y en los cuales desea obtener información",
]