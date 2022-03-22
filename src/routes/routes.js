// Diccionario de rutas:
export const PATHS = {
  home: {
    path: '/',
    template: `<h1>🏠 Home</h1>`
  },
  about: {
    path: '/about',
    template: `<h1>👩🏻‍💻 Sobre mi</h1>`
  },
  contact: {
    path: '/contact',
    template: `<h1>📱 Contacto</h1>`
  },
  error: {
    path: '/404NotFound',
    template: `<h1>❌ 404 Not Found</h1>`
  }
}
// Cada template puede ser una función que retorne el HTML del componente
