# Guía de diseño

Este documento resume los lineamientos visuales y de interacción para la interfaz del proyecto. Siguen la paleta y la tipografía de Shopify Polaris.

## 1. Barra superior
- Altura fija de **56 px**.
- Fondo `#1C1C1C` y contenido en blanco.
- Logotipo o nombre alineado a la izquierda en peso **600** y tamaño **14 px**.
- Campo de búsqueda centrado, ancho máximo **480 px**, bordes `8 px` y _placeholder_ gris `#6D7175`.
- Íconos de notificación y usuario a la derecha, de **20 px**.
- Animación para el buscador: `cubic-bezier(0.25,0.8,0.4,1)` en **150 ms**.

## 2. Navegación lateral
- Ancho fijo de **240 px** en escritorio.
- Fondo `#FFFFFF` y separador vertical `1 px #E0E0E0`.
- Cada ítem mide **32 px** de alto con `padding-x` de **16 px**; ícono de **16 px**.
- Ítem activo: fondo `#F1F2F3` y borde izquierdo `2 px #2C6ECB`.
- Agrupa ítems dejando **8 px** entre grupos.

## 3. Zona de trabajo
- Fondo global `#F6F6F7`.
- Cada tarjeta o sección usa fondo blanco, radio `8 px`, borde `1 px #E0E0E0` y sombra `0 0 0 1px rgba(0,0,0,0.05)`.
- Espaciado interno de **24 px** y _grid_ de 12 columnas con _baseline_ de **8 px**.

## 4. Estados vacíos
- Ilustración centrada de **64 px**.
- Título `16 px` seminegrita y texto de apoyo `14 px` regular `#6D7175` con ancho máximo de **280 px**.
- Botón primario verde `#008060` a **12 px** por debajo.

## 5. Botones y componentes
- Primario: `#008060`, texto blanco, radio `4 px`, alto **28 px** y `padding-x` de **12 px**.
- Secundario fantasma: borde `1 px #8C9196`, texto `#202223`, _hover_ con fondo `#F1F2F3`.
- Badges y chips siguen la escala semántica de Polaris.
- Escala de espaciado: 4, 8, 12, 16, 20, 24, 28 y 32 px.

## 6. Tipografía
- Fuente base: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`.
- Cuerpo `14 px #202223`.
- Encabezados: `h1` de **20 px/600** y `h2` de **16 px/600**.

## 7. Animaciones y _feedback_
- Transiciones entre **100–150 ms** usando la curva Snappy.
- Usar *skeleton loaders* gris claro `#E3E3E3` en lugar de *spinners*.

## 8. Iconografía
- Estilo lineal de **1.5 px** de grosor. Tamaño de **16 px** en la barra lateral y **20 px** en el encabezado.
- Color base `#202223` y colores semánticos para los estados.

## 9. Modo oscuro
- Diseñar con _tokens_ para que invertir colores sea un cambio de variables y no de componentes.
- Mantener contraste AA (ratio 4.5:1).

## 10. Microcopy
- Texto en español neutro.
- Sólo la primera palabra de cada ítem se capitaliza (ejemplo: "Productos", "Clientes").

---

### Checklist rápido
- Definir variables de color, tamaño y fuente como *tokens*.
- Layout en cuadrícula con **header** de 56 px y **sidebar** de 240 px.
- Aplicar la escala de espaciado de 8 px en todo el proyecto.
- Crear componente reutilizable `Card` con los estilos del punto 3.
- Unificar los vacíos con el patrón de estados del punto 4.
- Emplear una librería de iconos lineales consistente.
- Tipografía global configurada según el punto 6.
- Variables de animación para la curva Snappy usadas en modales y desplegables.
- Revisar contraste, foco visible y áreas clicables de al menos 44×44 px.

