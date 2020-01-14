const fs = require('fs');
const path = require('path');

const RoomsInfo = {
    get rooms(){
        return this.getRooms();
    },

    get availabilities(){
        return this.getAvailabilities();
    },

    getRooms(){
        return fs.readFileSync(path.resolve('data/rooms.json'), (err, data) => {
            if(err){
                return err;
                
            }
            return data;
        });
    },
    getAvailabilities(){
        return fs.readFileSync(path.resolve('data/availabilities.json'), (err, data) => {
            if(err){
                return err;
            }
            return data;
        });
    }
};

module.exports = RoomsInfo;