import readlineSync from 'readline-sync';

const commands = ['add', 'list', 'remove'],
index = readlineSync.keyInSelect(commands, 'Type your command');
let toDoList = [];
while(commands[index] === 'add' || commands[index] === 'list' || commands[index] === 'remove'){
    if(commands[index] === 'add'){
        let task = readlineSync.question('What do you want to do? ');
        toDoList.push({task: task, done: false});
        break
    }
    else if(commands[index]  === 'list'){
        console.log("============");
        console.log(toDoList);
        console.log("============");
    }
    else if(commands[index] === 'remove'){
        index = readlineSync.keyInSelect(toDoList, 'What do you want to check/uncheck?');
        const action = ['add', 'list', 'check', 'remove'],
        index = readlineSync.keyInSelect(action, 'Type your command');
    }
}


