export class Hospitals{
    public name: string; 
    public imagePath: string; 
    public location: string;
    public contact: number;

    constructor(name: string, path: string, location: string, contact: number){
        this.name= name;
        this.imagePath= path;
        this.location= location;
        this.contact= contact;
    }
}