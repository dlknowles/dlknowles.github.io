let appDiv;
let routes = {};

document.addEventListener('DOMContentLoaded', () => {
  appDiv = document.querySelector('#app');
  defineRoutes();
  appDiv.innerHTML = "Hi there!";
  window.addEventListener('load', router);
  window.addEventListener('hashchange', router);
});

function defineRoutes() {
  // this is actually defining aliases. 
  // the router will look in the ./views/ directory for html files with the name of the route
  routes['/'] = 'home';
}

function loadView(path) {
  let view = path;
  // look for any route aliases before proceeding.
  if (routes.hasOwnProperty(path) === true) {
    view = routes[path];
  }
  fetchView(view).then(data => {
    appDiv.innerHTML = data;
  });
}

async function fetchView(view) {
  return fetch(`./views/${view}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .catch(error => {
      console.error(`Could not fetch view: ${error}`);
    });
}

function resolveRoute(route) {
  try {
    return routes[route] || route;
  }
  catch(e) {
    console.error(e);
    console.error('Route not found', route);
  }
}

function router(evt) {
  const route = resolveRoute(window.location.hash.slice(1) || '/');
  loadView(route);
}
