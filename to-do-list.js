import readlineSync from 'readline-sync';

let toDoList = [];
let state = true;
let commands = ['add', 'list', 'remove'],
index = readlineSync.keyInSelect(commands, 'Type your command');
while(state){
    if(commands[index] === 'add'){
        let task = readlineSync.question('What do you want to do? ');
        toDoList.push({task: task, done: false});
    }
    else if(commands[index]  === 'list'){
        console.log("============");
        for(let i = 0; i < toDoList.length; i++){
            console.log(toDoList[i].done? "🟢 " : "🔴 " + toDoList[i].task)
        }
        console.log("============");
    }
    else if(commands[index] === 'remove'){
        console.log("remover");
    }
    else{
        state = false;
        break;
    }
    commands = ['add', 'list', 'check', 'remove'],
    index = readlineSync.keyInSelect(commands, 'Type your command');
}


