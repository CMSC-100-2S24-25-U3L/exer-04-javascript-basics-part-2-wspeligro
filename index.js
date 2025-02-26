import fs from 'fs'; /* import fr */
import validator from 'validator'; /* import validator */
import { v4 as uuidv4 } from "uuid"; /* import uuid */


/* function for generating unique id */
function generateUniqueID(firstName, lastName){
    let first = firstName.slice(0, 1);
    let firstname = first.toLowerCase();
    let last = lastName.toLowerCase();
    let unique = uuidv4().slice(0, 8);
    return firstname + last + unique;
}

/* function for adding account */
function addAccount(content) {
    if(!Array.isArray(content) || content.length != 4){ /* return false if there is a missing info in the content */
        return false;
    }

    const [firstName, lastName, email, age] = content

    /* checks if all the require info are present and checks if the conditions are true, if not it will return false */
    if (typeof firstName !== "string" || firstName.trim().length === 0 ||
        typeof lastName !== "string" || lastName.trim().length === 0 ||
        typeof email !== "string" || !validator.isEmail(email) ||
        typeof age !== "number" || age < 18
        ){
        return false;
    }

    /* generate unique id using the generateUniqueID function */
    const uniqueID = generateUniqueID(firstName, lastName);

    /* the data for the users.txt */
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    try {
        fs.appendFileSync("users.txt", userData, "utf8")
        return true;
    } catch (error) {
        console.error("error");
        return false;
    }
}

/* export */
export { generateUniqueID, addAccount };