export const registerFormValidator = (newAuth) => {

    if (!newAuth.email || !newAuth.password || !newAuth.confPassword) {
        throw Error("All fields are required");
    }

    if (!/[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]+/.test(newAuth.email)) {
        throw Error("Invalid Email, Example *****@***.***");
    }

    if (newAuth.password.length < 4) {
        throw Error("Password must be at least 5 chars");
    }

    if (newAuth.password !== newAuth.confPassword) {
        throw Error("Password and Confirm password don't match");
    }

};

export const createGameFormValidator = (newGame) => {
    if (!newGame.title || !newGame.imgUrl || !newGame.platform || !newGame.description) {
        throw Error("All fields are required");
    }

    if (newGame.title.length < 2) {
        throw Error("Title must be at least 2 chars");
    }

    if (!newGame.imgUrl.startsWith('http') || !newGame.imgUrl.startsWith('https')) {
        throw Error('Invalid Image URL!');
    }
    
}