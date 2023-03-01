import { Counter } from "./entities/Counter.entity";

export abstract class CounterRepository {
  abstract createCounter(counterInfo: Counter): Counter;
}