// Some code could be here ...

const leaveCommentsButton = document.querySelector("#loadComments");

leaveCommentsButton &&
leaveCommentsButton.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        var disqus_config = function () {};

        (function() { 
        var d = document, s = d.createElement('script');
        s.src = 'https://ochronus-online.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        leaveCommentsButton.remove();
    }
  );
