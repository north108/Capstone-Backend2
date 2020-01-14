require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/appRoutes';
import * as mongoose from 'mongoose'
debugger;
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes()
  public mongoUrl: string =  process.env.DATABASE_URL;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }).catch('error');
  }
}

export default new App().app