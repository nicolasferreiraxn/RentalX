import { Specification } from "../../model/specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.SpecificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
