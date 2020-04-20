var editor = null

var currentProblem = null;

CodeMirror.commands.autocomplete = function(cm) {
    CodeMirror.showHint(cm, CodeMirror.hint.javascript);
}

window.onload = function() {
    editor = CodeMirror(document.getElementById("code"), {
        mode: "text/javascript",
        theme: "dark",
        lineWrapping: true,
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,

        extraKeys: {
            "Ctrl-Space": "autocomplete"
        },
        value: "// Write some code please. \n\n\n\n\n"
    });
    currentProblem = Problems[0];
    currentProblem.initialize();
};

$("#submit").click(()=>{
    var code = editor.getValue();
    var table = currentProblem.submitCode(code);
    if (table.msg == "") {
        $("#output").val("Success! Good job.");
    } 
    else {
        $("#output").val("Errors Found: " + table.count + ".\n" + table.msg);
    }
});

String.prototype.find = function(str) {
    var regex = new RegExp(str, "gmi");
    console.log(regex);
    var arr = this.toString().match(regex);
    return arr != null ? arr.length : 0;
} 

function arrayHasExactArray(array, target) {
    if (target.length > array.length) {
        return false;
    }
    else {
        var targetIndex = 0;
        for (i=0; i<array.length; i++) {
            if (array.length - i < target.length - targetIndex) {
                return false;
            }
            else {
                if (array[i] == target[targetIndex]) {
                    console.log(targetIndex + array[i] + "_" + target[targetIndex])
                    if (target.length - 1 == targetIndex) {
                        return true;
                    }
                    targetIndex++;
                }
                else {
                    targetIndex = 0;
                }
            }
        }
    }
    return false;

}

function NewConsole() {
    var temp = { commandHistory: [] }
    var console = window.console;

    temp.log = function(text){
        $("#output").val(text);
        temp.commandHistory[temp.commandHistory.length] = text;
    }
    temp.info = function (text) {
        $("#output").val(text);
        temp.commandHistory[temp.commandHistory.length] = text;
    }
    temp.warn = function (text) {
        $("#output").val(text);
        temp.commandHistory[temp.commandHistory.length] = text;
    }
    temp.error = function (text) {
        $("#output").val(text);
        temp.commandHistory[temp.commandHistory.length] = text;
    }
    return temp;
}


/*
// Print the alphabet in reverse order.

// 1. Have ALPHA function.

// 2. Create for loop.

// 3. Run function.

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function alpha() {
  for (var i=0; i<alphabet.length; i++) {
    console.log(alphabet[i]);
  }
}

alpha();
*/