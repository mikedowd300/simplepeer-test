// let vidWidth = $('.video-div').css('width');
// $('.video-div').css('height', vidWidth);
var Peer = require('simple-peer')

navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {})

function gotMedia (stream) {
  var peer = new Peer({
      initiator: location.hash === '#1',
      trickle: false,
      stream: stream
  })

  peer.on('signal', function (data) {
    document.querySelector('#outgoing').textContent = JSON.stringify(data)
  })

  document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault()
    peer.signal(JSON.parse(document.querySelector('#incoming').value))
  })

  peer.on('stream', function (stream) {
    var video = document.querySelector('video')
    video.src = window.URL.createObjectURL(stream)
    video.play()
  })
}

// let user = {};
//
try{
  var socket = io.connect('http://127.0.0.1:3000');
} catch(e){
  console.log('could not connect');
}


//
// if(socket !== undefined) {
//
// //******************** LOGIN **********************
//   function submitYourName(str) {
//     user = {
//       "name": str,
//       "initiator": false
//     };
//     socket.emit('submit-your-name', user);
//   }
//
//   $('#submit-your-name').click(function() {
//     submitYourName($('#your-name').val());
//   });
//
//   //*********** APPEND USERS **********************
//   socket.on('user-list', function(data) {
//     $('.user-list').empty();
//     let i = 0;
//     data.ray.forEach(function(item) {
//       let $myElem = $(`<p class="user-list-item">${item.name}</p>`)
//       createEventHandler($myElem[0], item.id);
//       $('.user-list').append($myElem);
//     });
//   });
//
//   //**************** Video Chat ACCEPTING call *********************
//
//   socket.on('video-chat-request-pass', function(data) {
//     $('.answer-phone-options').fadeIn(500);
//
//     $('.answer-call').click(function() {
//
//       //(1)video-connection-step1 is recieved.....Thats the 'data' in the
//       //'video-chat-request-pass' function
//
//       navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {})
//
//       function gotMedia (stream) {
//         var peer = new Peer({
//             initiator: false,
//             trickle: false,
//             stream: stream
//         })
//
//         peer.on('signal', function (datb) {
//           $('#outgoing').text(JSON.stringify(datb));
//           //...(3)...generating this information, which needs to be sent back to peer1 - call this video-connection-step2
//         })
//
//         $('form').click(function(ev) {
//           ev.preventDefault();
//           //peer.signal(JSON.parse($('#incoming').val()))
//           peer.signal(JSON.parse(data.sender))
//           //(2)....and copied into here...
//         });
//         // document.querySelector('form').addEventListener('submit', function (ev) {
//         //   ev.preventDefault()
//         //   peer.signal(JSON.parse(document.querySelector('#incoming').value))
//         // })
//
//         peer.on('stream', function (stream) {
//           var video = document.querySelector('video')
//           video.src = window.URL.createObjectURL(stream)
//           video.play()
//         })
//       }
//
//       // user.peer.on('signal', function(datb){
//       //   console.log(datb);
//       //   let obj = {
//       //     "sender": user.peer,
//       //     "targetId": id,
//       //     "callerId": user.id
//       //   };
//       //   // socket.emit('video-chat-accept', obj);
//       // });
//
//       $('.answer-phone-options').fadeOut(500);
//       //socket.emit('call-accepted', data);
//       //respond with phone number and stream?
//     });
//
//     $('.decline-call').click(function() {
//       $('.answer-phone-options').fadeOut(500);
//       socket.emit('call-declined', data);
//     });
//
//
//     function createEventHandler(elem, id) {
//       $(elem).click(function() {
//
//         //******************** Making a call **************************
//         navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {})
//
//           var peer = new Peer({
//               initiator: true,
//               trickle: false,
//               stream: stream
//           })
//
//           peer.on('signal', function (data) {
//               console.log(data);
//               let obj = {
//                 "sender": user.peer,
//                 "targetId": id,
//                 "callerId": user.id
//               };
//               socket.emit('video-chat-request', obj);
//
//             $('#outgoing').text(JSON.stringify(obj));
//             //document.querySelector('#outgoing').textContent = JSON.stringify(data)
//             //this data needs to be sent to peer2 - video-connection-step1
//           })
//
//           document.querySelector('form').addEventListener('submit', function (ev) {
//             ev.preventDefault()
//             peer.signal(JSON.parse(document.querySelector('#incoming').value))
//           })
//
//           peer.on('stream', function (stream) {
//             var video = document.querySelector('video')
//             video.src = window.URL.createObjectURL(stream)
//             video.play()
//           })
//         }
//
//         // user.peer = new Peer({ initiator: true, trickle: false });
//         // user.peer.on('signal', function(data){
//         //   console.log(data);
//         //   let obj = {
//         //     "sender": user.peer,
//         //     "targetId": id,
//         //     "callerId": user.id
//         //   };
//         //   socket.emit('video-chat-request', obj);
//         // });
//       });// end function createEventHandler
//     }
//
//   });
//
// }
