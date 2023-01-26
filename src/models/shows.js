export class Shows {
        id = '';
        name = '';
        image= '';
        details = {
            genres : [],
            year : '',
            description: '',
            cast: [],
            episodes: [],
        }
        constructor(id, name, image,genres,year,description,cast,episodes) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.details = {genres,year,description,cast,episodes};
        }
    }
