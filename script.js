document.addEventListener('shown.bs.modal', function (event) {
  var modal = event.target;
  var iframe = modal.querySelector('iframe');
  if (iframe) {
    iframe.src += "?autoplay=1";
  }
});

document.addEventListener('hidden.bs.modal', function (event) {
  var modal = event.target;
  var iframe = modal.querySelector('iframe');
  if (iframe) {
    iframe.src = iframe.src.split('?')[0]; // Stop video by removing query parameters
  }
});
