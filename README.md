# Andes Market — Click&Ready

Aplicación web de demostración desarrollada para el caso Andes Market, correspondiente a la evaluación de la Unidad 2 de Metodologías Ágiles.

El proyecto representa el avance del primer Sprint de Click&Ready, una solución de compras online orientada inicialmente a tres tiendas piloto en Santiago de Chile.

## Objetivo

Presentar una demostración funcional del incremento asociado al Sprint 1 y facilitar la revisión de las historias de usuario, los criterios de aceptación y los resultados de las pruebas.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Cloudflare Pages para el despliegue

La aplicación no requiere instalar dependencias ni configurar una base de datos.

## Funcionalidades

### Registro y acceso

- Inicio de sesión con una cuenta de demostración.
- Registro de nuevas cuentas durante la sesión.
- Cierre de sesión.
- Recuperación de contraseña mediante un código de prueba mostrado en pantalla.

Las cuentas se almacenan temporalmente en la memoria del navegador y no utilizan un servicio de autenticación externo.

### Selección de tienda

Permite seleccionar entre tres tiendas piloto:

- Andes Market Santiago Centro.
- Andes Market Providencia.
- Andes Market Las Condes.

La selección se conserva en el navegador mediante `localStorage`.

### Catálogo y disponibilidad

- Catálogo de 28 productos de ejemplo.
- Visualización de precios en pesos chilenos.
- Stock diferenciado para cada tienda.
- Identificación de productos sin disponibilidad.
- Restricción para agregar cantidades superiores al stock disponible.

Los datos se obtienen desde un servicio simulado implementado en JavaScript, sin conexión a una API HTTP o ERP real.

### Búsqueda y carrito

Se incluyen funcionalidades parciales de búsqueda, filtros y carrito para representar su avance durante el Sprint 1.

Estas funcionalidades todavía se consideran pendientes dentro del flujo de trabajo del proyecto.

No se implementan pagos, checkout ni confirmación de pedidos.

## Relación con el Sprint 1

| Historia | Funcionalidad | Estado representado |
| --- | --- | --- |
| PBI-11 | API simulada de catálogo y stock | Listo |
| PBI-01 | Registro e inicio de sesión | Listo |
| PBI-12 | Selección de tienda | Listo |
| PBI-02 | Búsqueda de productos y filtros | En certificación |
| PBI-03 | Gestión del carrito | En curso |

Los estados corresponden al seguimiento del caso en Jira. La demostración permite verificar parte de su comportamiento funcional, pero no constituye por sí sola evidencia del cumplimiento completo de la Definition of Done.

## Ejecución local

Clonar el repositorio:

```bash
git clone https://github.com/FelipeGCM/AndesMarket.git
```

Ingresar a la carpeta del proyecto y abrir `index.html` en un navegador actualizado.

La aplicación también puede publicarse mediante un servicio de alojamiento estático, como Cloudflare Pages.

## Cuenta de demostración

**Correo:** `cliente@andesmarket.cl`

**Contraseña:** `Andes123`

La cuenta utiliza credenciales ficticias. El proyecto no debe utilizarse para almacenar información personal ni contraseñas reales.

## Alcance y limitaciones

El proyecto es una demostración académica del Sprint 1 y no está preparado para uso comercial.

- No cuenta con autenticación segura en un servidor.
- Las cuentas creadas desaparecen al recargar la página.
- El catálogo contiene 28 productos de ejemplo, en lugar de los 1.500 previstos en el caso.
- La fuente de datos es local y no corresponde a una API HTTP.
- El carrito no conserva su contenido al recargar.
- No se realizan transacciones ni pagos reales.

## Seguimiento del proyecto en Jira

La planificación y el seguimiento del Sprint 1 se realizaron mediante Jira, donde se encuentran registrados:

- Product Backlog con las historias priorizadas y sus estimaciones.
- Sprint Backlog con las tareas seleccionadas.
- Estados de avance de las historias durante el Sprint.
- Criterios de aceptación y dependencias.
- Acciones de mejora identificadas durante la retrospectiva (Kaizen Backlog).

**Proyecto Jira:** [Click&Ready — Andes Market](https://figio.atlassian.net/jira/software/projects/CR/summary)

El acceso al proyecto es restringido. Para revisarlo, se puede solicitar autorización al responsable del repositorio.

## Evidencias de validación

La aplicación permite comprobar el funcionamiento de las características implementadas en el entorno de demostración.

Los casos de prueba, sus pasos de ejecución y los resultados obtenidos se documentarán como parte de las actividades de validación del Sprint.