// La clase del Router:
export class Router {
  constructor(paths) {
    this.paths = paths // Diccionario de rutas que se recibe como argumento
  }

  // Inicialización del router:
  initRouter(htmlContainer) {
    // Se identifica la URL actual:
    const {
      location: { pathname = '/' }
    } = window
    const URL = pathname === '/' ? 'home' : pathname.replace('/', '')
    // Se agrega al router el contenedor dinámico:
    this.container = htmlContainer
    // Se carga la vista correspondiente a la URL:
    this.load(URL)
  }

  load(page = 'home') {
    const { paths } = this
    const { path, template } = paths[page] || paths.error // page -> url
    this.container.innerHTML = template
    window.history.pushState({}, 'done', path)
  }
}
