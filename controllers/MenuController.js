const inquirer = require('inquirer');
const moment = require('moment');

module.exports = class MenuController {
	constructor() { 
		this.mainMenuQuestions = [
			{
				type: "list",
				name: "mainMenuChoice",
				message: "Please choose from an option below: ",
				choices: [
					"Add new contact",
					"Print today's date",
					"Exit"
				]
			}
		];
		this.contacts = [];
	}

	//Prompt the main menu questions
	main(){
		console.log(`Welcome to AddressBook!`);
		inquirer.prompt(this.mainMenuQuestions).then((response) => {
			switch(response.mainMenuChoice){
				case "Add new contact":
					this.addContact();
					break;
				case "Print today's date":
					this.getDate();
					break;	
				case "Exit":
					this.exit();
				default:
					console.log("Invalid input");
					this.main();		
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}

	//Clear the contents of the terminal
	clear(){
		console.log("\x1Bc"); // ANSI escape sequence to clear the console
	}

	// add an individual conatct
	addContact(){
		this.clear();
		console.log('addContact called');
		this.main();
	}

	getDate(){
		var dateTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
		console.log(dateTime);
	}

	getContactCount(){
		return this.contacts.length;
	}

	remindMe(){
		return "Learning is a life-long pursuit";
	}

	// Exit the program gracefully
	exit(){
		console.log("Thanks for using AddressBook!");
		process.exit();
	}
}













