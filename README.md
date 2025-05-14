# Black Flaf Collective Website

We're doing some funny things with Hugo and react here, so here are some notes:

1. home page uses /layouts/_default/home.html, all others use /layouts/_default/baseof.html
2. react components are in /react-components/src and are built to /react-components/dist
3. No auto-update for react components: to update react components in hugo run `cd react-components && npm run build && cd .. && cp -r react-components/
dist/* static/react-components/dist/`

