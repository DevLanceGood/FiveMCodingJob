var Problems = [
    {
        submitCode: function(code) {
            var logCount = code.find("console.log");
            var forCount = code.find("for");
            var errMsg = "";
            var errIndex = 0;
    
            if (logCount != 1) {
                errIndex++;
                errMsg += errIndex + ") There should be one console.log statement.\n";
            }
            if (forCount != 1) {
                errIndex++;
                errMsg += errIndex + ") There should only be one for loop.\n";
            }
            if (errMsg == "") {
                
                var backupConsole = window.console;
                var tempConsole = NewConsole();
                window.console = tempConsole;
                // Execute Function
                try {
                    var codeFunc = new Function(code);
                    codeFunc();
                    window.console = backupConsole;
                    var commands = tempConsole.commandHistory;
                    var order = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    var orderCompleted = arrayHasExactArray(commands, order);
                    if (!orderCompleted) {
                        errIndex++;
                        errMsg += errIndex + ") The array is not being outputted correctly.";
                    }
                }
                catch(err) {
                    errIndex++;
                    errMsg += errIndex + ") The code does not compile -> " + err.message;
                }
                window.console = backupConsole;
            }
            return {count: errIndex, msg: errMsg};
        },
        initialize: function() {
            $("#challenge").html("Challenge: Reverse the alphabet.");
            $("#output").val("Run the program.");
            editor.setValue('// Write some code gamer!\n\nvar alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];\n\n\n\n\n\n\n\n\n');
            
        }
    }
];
