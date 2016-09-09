/**
 * Created by Chan on 9/8/16.
 */
var socket = io();

socket.on('connect', function() {
    console.log('socket.io Server Connected');
})