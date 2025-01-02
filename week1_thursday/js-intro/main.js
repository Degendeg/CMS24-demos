document.addEventListener('DOMContentLoaded', function () {

  // Ändra texten i ett element
  document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('intro').innerText = 'Texten har ändrats tack vare JavaScript!';
  });

  // Visa scoping-exempel
  document.getElementById('showScopingButton').addEventListener('click', function () {
    // Definiera variabler och deras scoping
    var one = 1;
    let two = 1;

    function scopeExample() {
      var one = 2; // lokal för func
      let two = 2; // lokal för func
      return `Inuti funktionen: var = ${one}, let = ${two}`;
    }

    let blockScopeResult;
    if (true) {
      var one = 11; // global påverkan
      let two = 11; // lokal för block
      blockScopeResult = `Inuti blocket: var = ${one}, let = ${two}`;
    }

    const finalResult = `
    Globala värden efter funktion och block:
    var: ${one}
    let: ${two}
    
    Resultat från funktion:
    ${scopeExample()}
    
    Resultat från block:
    ${blockScopeResult}
    `.replace(/^/gm, ' '.repeat(46)); // repeat för mellanslag, indentering

    // Visa resultatet i <div id="output">
    document.getElementById('output').innerText = finalResult;
  });
});