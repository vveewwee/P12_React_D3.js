/**
 * Class constructors for modelizing the data
 */

export class User_Main_Data{
    constructor({id, userInfos, todayScore, keyData}){
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }
}

export class User_Activity{
    constructor({id, sessions}){
        this.id = id;
        this.sessions = sessions;
    }
}

export class User_Average_Session{
    constructor({id, sessions}){
        this.id = id;
        this.sessions = sessions;
    }
}

export class User_Performance{
    constructor({id, kind, data}){
        this.id = id;
        this.kind = kind;
        this.data = data;
    }
}