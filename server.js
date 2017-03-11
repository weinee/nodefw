
import Hapi from 'hapi';

const server = new Hapi.Server({

});

server.connection({
	host: 'localhost',
	port: 8000
});

server.ext('onRequest', (request, reply) => {
	request.setUrl('/happy');
	return reply.continue();
})

server.route({
    method: 'GET',
    path: '/happy',
    handler: (request, reply) => {
        return reply('happy');
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
