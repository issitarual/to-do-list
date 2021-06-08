import readlineSync from 'readline-sync';

let toDoList = [];
let state = true;
while(state){
    const commands = ['add', 'list', 'remove'],
    index = readlineSync.keyInSelect(commands, 'Type your command');
    if(commands[index] === 'add'){
        let task = readlineSync.question('What do you want to do? ');
        toDoList.push({task: task, done: false});
    }
    else if(commands[index]  === 'list'){
        console.log("============");
        toDoList.forEach(n => n.done? "🟢 ":"🔴")
        console.log("============");
    }
    else if(commands[index] === 'remove'){
        console.log("remover");
    }
    else{
        state = false;
    }
}


