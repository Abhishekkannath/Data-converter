var _gaq = _gaq || [];

$(document).ready(function(){
  

  var d = new DataConverter('converter');

  var sidebar = $('#header');

  var win = $(window);
 

  d.create();
 

  $(".settingsElement").change(updateSettings);

  


  function updateSettings (evt) {
    
    if (evt) {
      _gaq.push(['_trackEvent', 'Settings',evt.currentTarget.id ]);
    };

    d.includeWhiteSpace = $('#includeWhiteSpaceCB').attr('checked');
    
    if (d.includeWhiteSpace) {
      $("input[name=indentType]").removeAttr("disabled");
      var indentType = $('input[name=indentType]:checked').val();
      if (indentType === "tabs") {
        d.indent = "\t";
      } else if (indentType === "spaces") {
        d.indent = "  "
      }
    } else {
      $("input[name=indentType]").attr("disabled", "disabled");
    }

    d.headersProvided = $('#headersProvidedCB').attr('checked');

    if (d.headersProvided) {
      $("input[name=headerModifications]").removeAttr("disabled");

      var hm = $('input[name=headerModifications]:checked').val();
      if (hm === "downcase") {
        d.downcaseHeaders = true;
        d.upcaseHeaders = false;
      } else if (hm === "upcase") {
        d.downcaseHeaders = false;
        d.upcaseHeaders = true;
      } else if (hm === "none") {
        d.downcaseHeaders = false;
        d.upcaseHeaders = false;
      }
    } else {
      $("input[name=headerModifications]").attr("disabled", "disabled");
    }
    
    d.delimiter = $('input[name=delimiter]:checked').val();
    d.decimal = $('input[name=decimal]:checked').val();
    
    d.useUnderscores = true;
    
    d.convert();
  };

  updateSettings();
  
})

