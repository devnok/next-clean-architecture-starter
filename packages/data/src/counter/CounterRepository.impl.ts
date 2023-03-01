import { Counter, CounterRepository } from "core";
import { LocalStorageService } from "../common/LocalStorageService.interface";

export class CounterRepositoryImpl implements CounterRepository {
  constructor(private localStorageService: LocalStorageService) {}

  createCounter(counterInfo: Counter): Counter {
    this.localStorageService.set(counterInfo.id, JSON.stringify(counterInfo));

    return counterInfo;
  }
}