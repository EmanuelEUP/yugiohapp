La aplicación basada en la famosa saga de cartas YU GI OH , esta hecha con API CONTEXT + HOOKS, el fin
de esta es ser una base de datos de las cartas de la ya mencionada serie.

===============
API UTILIZADA
===============

https://db.ygoprodeck.com/api-guide/

===============
IMPORTS
===============

npm install --save prop-types
npm install --save react-error-boundary
npm i resolve-url-loader
npm install react-bootstrap bootstrap
npm install react-icons --save

===============
ENTREGABLES
===============

1) 

Link del repositorio :
Link a producción : https://yugiohapp.vercel.app/

2) 

Nombre completo :  EMANUEL CLEMENTE URRUTIA PICARTE
Rut : 18835473-4




---> SUGERENCIAS


1) En ejecución del código con el script de desarrollo tiene error el proyecto: te falta instalar el url-loader (siempre probar antes de 
entregar ya que otros profes son más rigurosos y si prueban local y falla ponen directo un 1 o bajan puntaje aunque esté bien en producción). --> OK

2) Cuando entregues un proyecto elementos o importaciones que no les diste uso finalmente eliminalos 
y los logs comentalos. En producción esos logs no pueden aparecer. --> OK

3) El buscador no está funcionando, está arrojando error en esa api, échale un ojo. Además me hace en falta un mensaje que 
diga que no se encontraron coincidencias. --> OK

4) Al igual que el HOC de ErrorBoundary que va en el componente principal (App), ek LazyLoading y Suspense también van en
 él y no en los componentes por separados. Por tanto, todas las importaciones de componentes con lazy van en App y el Suspense con su fallback deben arropar a todas las páginas.

5) Los recursos de img siempre deben llevar el alt y no deben contener como buena práctica nombres como photo o image.

6) El PageNotFound no está funcionando correctamente y se está duplicando. El que tienes no se está aplicando bien a rutas
 como: asasas/asasaas/asasa, solo te funcionan en: https://yugiohapp.vercel.app/asasas y no así  https://yugiohapp.vercel.app/asasas/asasasas etc, revisa el proyecto de lyrics donde vimos esto.

7) El ErrorBoundary no se está aplicando bien, ya que no se está recuperando de la acción de la caída al ticlear el botón, verifica la documentación asociada a la parte de recovery reset.

