import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError(
        `Something is wrong, check your request and try again. Transaction ${id}.`,
      );
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
