import createCustomerRepository from "./customers/repository/customerRepository";
import createGetAllCustomersUseCase from "./customers/useCase/getAllCustomersUseCase";

import createOrderItemRepository from "./order/repository/orderItemRepository";
import createOrderRepository from "./order/repository/orderRepository";
import createCreateOrderUseCase from "./order/useCase/createOrderUseCase";
import createGetAllOrdersUseCase from "./order/useCase/getAllOrdersUseCase";

import creareWorkflowRepository from "./workflow/repository/workflowRepository";
import createGetAllWorkflowsUseCase from "./workflow/useCase/getAllWorkflowsUseCase";

const customerRepository = createCustomerRepository();
const getAllCustomersUseCase = createGetAllCustomersUseCase(customerRepository);

const orderRepository = createOrderRepository();
const orderItemRepository = createOrderItemRepository();
const getAllOrdersUseCase = createGetAllOrdersUseCase(
  orderRepository,
  orderItemRepository,
  customerRepository
);
const createOrderUseCase = createCreateOrderUseCase();

const workflowRepository = creareWorkflowRepository();
const getAllWorkflowsUseCase = createGetAllWorkflowsUseCase(workflowRepository);

export {
  getAllCustomersUseCase,
  getAllOrdersUseCase,
  createOrderUseCase,
  getAllWorkflowsUseCase,
};
