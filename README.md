# 🍕 Pizzería Mamma Mía! - Hito 7

Este proyecto corresponde al **Hito 7** del desarrollo web con React, enfocado en la integración de estado global mediante **Context API** (`CartContext` y `UserContext`), simulación de autenticación, gestión completa del carrito de compras y rutas protegidas con **React Router**.

---

## 🚀 Tecnologías utilizadas

* **React** (Biblioteca de JavaScript)
* **Vite** (Entorno de desarrollo rápido)
* **React Router DOM** (Manejo de rutas, navegaciones y redirecciones dinámicas)
* **Context API** (Gestión de estado global para carrito y autenticación de usuario)
* **Bootstrap** (Diseño responsivo y componentes estilizados)

---

## 📋 Requerimientos implementados (Hito 7)

1. **Gestión de Carrito (`CartContext`):**
   * Incremento, decremento y eliminación de productos desde la vista del carrito.
   * Cálculo automático e instantáneo del total a pagar en tiempo real (sincronizado con el Navbar).
   * Conexión del botón "Añadir" en las tarjetas de productos (`CardPizza`).

2. **Gestión de Usuario (`UserContext`):**
   * Control global del estado de autenticación mediante `token`.
   * Adaptación dinámica del Navbar (muestra u oculta botones según la autenticación).

3. **Rutas Protegidas y Navegación (`React Router`):**
   * Redirección dinámica de rutas según el estado del token (ej. `/profile` solo accesible si está autenticado; `/login` y `/register` redirigen al inicio si ya hay sesión iniciada).
   * Ruta comodín `*` configurada para mostrar la vista `NotFound` (404).
   * Navegación hacia el detalle del producto (`/pizza/:id`) desde el botón "Ver Más".

---
