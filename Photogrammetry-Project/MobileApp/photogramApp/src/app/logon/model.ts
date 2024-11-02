export class User {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    setUsername(username: string) {
        this.username = username;
    }
    setPassword(password: string) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    getUsername() {
        return this.username;
    }
}