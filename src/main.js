import { appRouter } from './routes/index.js'

window.addEventListener('load', () => {
  const rootDiv = document.getElementById('content')
  appRouter.initRouter(rootDiv)
  document
    .querySelectorAll('button[id$=link]')
    .forEach(b =>
      b.addEventListener('click', () => appRouter.load(b.id.split('-')[0]))
    )
})

window.addEventListener('popstate', () => {
  const rootDiv = document.getElementById('content')
  appRouter.initRouter(rootDiv)
})
