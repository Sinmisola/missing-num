 app = {

 findMissing: function(left, right)
  {
  var result = 0;

  // XOR all element on right and left (except the last from left)
          for (var i = 0; i < right.length; i++) 
              {
                result = result ^ left[i] ^ right[i];
              }

              // XOR the last element from left
              result = result ^ left[i];

              return result;
    }

}

module.exports = app;