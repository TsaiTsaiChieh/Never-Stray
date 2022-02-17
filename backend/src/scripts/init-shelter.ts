import {Connection} from 'typeorm'

import {connection} from '../config/database'
import {Shelter} from '../entity/shelter.entity'
import shelters from '../JSON/shelters.json'
import {ShelterRepository} from '../repository/shelter.repository'
import {AppError} from '../utils/app-error'

/** @class ShelterInitData */
class ShelterInitData {
  public shelters: IDNameType[] = shelters
  private connection: Connection
  private repository: ShelterRepository

  /** Builder */
  async builder() {
    this.connection = await connection()
    this.repository = new ShelterRepository()
  }

  /** Destructor */
  destroy() {
    this.connection.close()
  }

  /** Find exist data */
  /**
   * @return {Promise<number[]>}
   */
  async findData(): Promise<number[]> {
    try {
      const insertIdx: number[] = []
      await Promise.all(
        shelters.map(async (ele, i) => {
          const result = await this.repository.findOne({id: ele.id})
          if (!result) insertIdx.push(i)
          else console.log(`=== ${result.name} already in area table ===`)
        }),
      )
      return Promise.resolve(insertIdx)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /** Upsert data */
  /**
   * @param  {number[]} insertIdx
   * @return {Promise<Shelter[]>}
   */
  async upsertData(insertIdx: number[]): Promise<Shelter[]> {
    try {
      const data: Shelter[] = []
      insertIdx.map((i) => {
        data.push({
          id: shelters[i].id,
          name: shelters[i].name,
        })
      })
      const result = await this.repository.saveMany(data)
      if (result.length) console.info(`=== Saved ${JSON.stringify(result)} ===`)
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

/**
 * Init shelter enum table
 *
 * @return {Promise<void>}
 */
async function initShelterData(): Promise<void> {
  try {
    const shelterInitData = new ShelterInitData()
    await shelterInitData.builder()
    const insertIdx = await shelterInitData.findData()
    await shelterInitData.upsertData(insertIdx)
    shelterInitData.destroy()
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

/** main */
(async (): Promise<void> => {
  try {
    await initShelterData()
  } catch (error) {
    throw new AppError(error)
  }
})

