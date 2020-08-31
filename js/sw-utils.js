// Guardar en el cache dinamico 
function actualizaCacheDinamico(dynamicCache, req, res) {

    // si lo hace es por que tiene data y lo guardamos en cache
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        // Si falla mandamos lo venga en la respuesta, un 404
        return res;
    }
}