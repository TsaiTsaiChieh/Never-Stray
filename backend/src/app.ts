import 'reflect-metadata'

import cors from 'cors'
import express, {Application} from 'express'

import {Router} from './router'

/** @class App */
export class App {
  /**
   * Bootstrap the application
   *
   * @static
   * @memberof App
   * @return {App}
   */
  public static bootstrap(): App {
    return new App()
  }

  private app: Application

  /** @memberof App */
  constructor() {
    this.app = express()
    this.cors()
    this.router()
  }
  /** Add CORS */
  private cors(): void {
    this.app.use(cors({
      origin: JSON.parse(process.env.ORIGINS),
      methods: ['GET', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    }))
  }
  /** Add router */
  private router(): void {
    Router.router(this.app)
  }
}
