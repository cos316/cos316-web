/*! Highlight JS Loader v6.2 | MIT Licensed (C) 2015 Ali.Dbg | http://goo.gl/IRlJuI */
document.head.appendChild(document.createElement("style")).innerHTML = 
    ".hljs-line-nums {border-right: 1px solid #CCC;cursor:default;float:left;margin:0 1em 0 -1em;text-align:right;-moz-user-select:none;-webkit-user-select:none; color: #B0B0B0;}"+
    ".hljs-line-nums span {display:block;padding:0 .5em 0 1em}";
    
document.addEventListener("DOMContentLoaded", function() {
    var codeBlocks = document.getElementsByTagName("code");
    for (var i = 0; i < codeBlocks.length; i++) {
        var codeBlock = codeBlocks[i];
        if (codeBlock.className.search(/(hljs|nohighlight)/) == -1) {
            hljs.highlightBlock(codeBlock);
            var lines = codeBlock.innerHTML.split(/\n/);
            while (lines.length > 0 && !lines[lines.length-1].trim())
                lines = lines.splice(0,lines.length-1);
            var lineNumHTML = "";
            var linesHTML = "";
            for (var j = 0; j < lines.length; j++) {
              lineNumHTML += '<span id="hljs-block-' + i + '-line-no-' + (j + 1) + '">'
                          + (j + 1) + '</span>';
              linesHTML   += '<div id="hljs-block-' + i + '-line-' + (j+1) + '" '
                          + 'onmouseover="highlightLine(' + i + ',' + (j+1) + ');" '
                          + 'onmouseout="unhighlightLine(' + i + ',' + (j+1) + ');" '
                          + 'style="width:100%;">'
                          + (lines[j] ? lines[j] : " ") + '</div>';
            }
            codeBlock.innerHTML = '<span class="hljs-line-nums">' + lineNumHTML + '</span>' + linesHTML;
        }
    }
});

function highlightLine(block, line) {
  document.getElementById("hljs-block-" + block + "-line-no-" + line).style.color="black";
  document.getElementById("hljs-block-" + block + "-line-no-" + line).style.fontWeight="bold";
  // document.getElementById("hljs-block-" + block + "-line-" + line).style.background="rgba(230,230,230,0.6)";
  //"rgba(255,243,223,0.6)";
}

function unhighlightLine(block, line) {
  document.getElementById("hljs-block-" + block + "-line-no-" + line).style.color="#CCC";
  document.getElementById("hljs-block-" + block + "-line-no-" + line).style.fontWeight="normal";
  // document.getElementById("hljs-block-" + block + "-line-" + line).style.background="none";
}
/*
document.addEventListener("DOMContentLoaded",function() {
    var codes = doc.getElementsByTagName("code");
    for (int i = 0; i < codes.length; i++) {
        codes[i].innerHTML = codes[i].innerHTML.replace(/</g,'&lt;');
    }
}*/
