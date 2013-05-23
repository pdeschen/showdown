/*global window, module*/
//
//  GitHub Gist Extension
//  <https://gist.github.com/973569>   -> <script src="https://gist.github.com/973569.js"></script> 
//  or
//  ````973569````  -> <script src="https://gist.github.com/973569.js"></script> 

(function(){
    var gist = function(converter) {
        return [
            { 
              type: 'lang', regex: '<https://gist.github.com/([0-9]+)>', replace: function(match, gistid) {
                return '<script src="https://gist.github.com/' + gistid + '.js"></script>';
              }
            },{ 
              type: 'lang', regex: '[`]{4}([0-9]+)[`]{4}', replace: function(match, gistid) {
                return '<script src="https://gist.github.com/' + gistid + '.js"></script>';
              }
            }

        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.gist = gist; }
    // Server-side export
    if (typeof module !== 'undefined') { module.exports = gist; }

}());
