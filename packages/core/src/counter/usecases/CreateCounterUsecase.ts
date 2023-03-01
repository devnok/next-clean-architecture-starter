import { Usecase } from "../../base/usecase";
import { CounterRepository } from "../CounterRepository.interface";
import { Counter } from "../entities/Counter.entity";

export abstract class CreateCounterUsecase implements Usecase<Counter>{
  abstract execute(...args: any[]): Counter;
}

class CreateCounterUseCseImpl implements CreateCounterUsecase {
  constructor(private counterRepository: CounterRepository) { }

  execute(...args: any[]): Counter {
    return this.counterRepository.createCounter({
      id: Math.random().toString().substring(2),
      currentCount: 0,
      decrement: 1,
      increment: 1,
      label: "New Counter",
    })
  }
}