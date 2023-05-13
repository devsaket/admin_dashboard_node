import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';


export const categoryObject = [
    {
        id: 1,
        categoryName: 'AutoMobile',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>InActive</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },

    {
        id: 2,
        categoryName: 'Cloth',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-danger'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 3,
        categoryName: 'Gadgets',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>InActive</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 4,
        categoryName: 'Software',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 5,
        categoryName: 'HardWare',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-danger'>InActive</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 6,
        categoryName: 'Services',
        createdBy: 'User1 ',
        createdOn: new Date(2022, 2, 23).toLocaleDateString(),
        status: [<div className='fs-6 text-danger'>InActive</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
];

export const productObject = [
    {
        id: 1,
        productName: 'Royal Enfield',
        productPrice: '3lac',
        manufacture: 'royalEnfield',
        quantity: '150pc',
        updatedOn: new Date(2023, 4, 22).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 2,
        productName: 'Bajaj',
        productPrice: '2lac ',
        manufacture: 'Bajaj',
        quantity: '100pc',
        updatedOn: new Date(2023, 4, 20).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 3,
        productName: 'Hero',
        productPrice: '1.5lac ',
        manufacture: 'heromotocrop',
        quantity: '300pc',
        updatedOn: new Date(2023, 4, 25).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 4,
        productName: 'Honda',
        productPrice: '1lac ',
        manufacture: 'hondacrop',
        quantity: '100pc',
        updatedOn: new Date(2023, 4, 10).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 5,
        productName: 'Yamaha',
        productPrice: '1.75lac ',
        manufacture: 'yamaha',
        quantity: '80pc',
        updatedOn: new Date(2023, 4, 21).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 6,
        productName: 'Jawa',
        productPrice: '2.75lac ',
        manufacture: 'jawa',
        quantity: '60pc',
        updatedOn: new Date(2023, 4, 19).toLocaleDateString(),
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    }

];

export const customerObject = [
    {
        id: 1,
        firstName: 'Vimal',
        lastName: 'rana',
        email: 'ranavimal@gmail.com',
        contact: '9988757613',
        address: 'zirakpur ',
        createdOn: new Date(2023, 4, 22).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 2,
        firstName: 'aakash',
        lastName: 'prabhaker',
        email: 'akash@gmail.com',
        contact: '987568456',
        address: 'Panchkula ',
        createdOn: new Date(2023, 2, 22).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 3,
        firstName: 'saket',
        lastName: 'kumar',
        email: 'saketk@gmail.com',
        contact: '9875641613',
        address: 'chandigarh ',
        createdOn: new Date(2023, 1, 20).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 4,
        firstName: 'ramita',
        lastName: 'katoch',
        email: 'ramitaka@gmail.com',
        contact: '8759758454',
        address: 'Mohali ',
        createdOn: new Date(2023, 1, 30).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 5,
        firstName: 'anuj',
        lastName: 'kumar',
        email: 'anujkr@gmail.com',
        contact: '785968457',
        address: 'himachal ',
        createdOn: new Date(2022, 12, 28).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>Active</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 6,
        firstName: 'kamal',
        lastName: 'jain',
        email: 'kamaljain@gmail.com',
        contact: '782564897',
        address: 'zirakpur ',
        createdOn: new Date(2023, 3, 25).toLocaleDateString(),
        status: [<div className='fs-6 text-success'>InActive</div>],
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
];

export const orderObject = [
    {
        id: 1,
        customerId: 'order101',
        productId: '12345',
        quantity: '15',
        orderedOn: new Date(2023, 4, 20).toLocaleDateString(),
        transactionId: '98765',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 2,
        customerId: 'order102',
        productId: '56789',
        quantity: '25',
        orderedOn: new Date(2023, 4, 15).toLocaleDateString(),
        transactionId: '12345',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 3,
        customerId: 'order103',
        productId: '98765',
        quantity: '50',
        orderedOn: new Date(2023, 3, 20).toLocaleDateString(),
        transactionId: '88565',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 4,
        customerId: 'order104',
        productId: '54321',
        quantity: '55',
        orderedOn: new Date(2023, 3, 25).toLocaleDateString(),
        transactionId: '78565',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 5,
        customerId: 'order105',
        productId: '54876',
        quantity: '100',
        orderedOn: new Date(2023, 4, 10).toLocaleDateString(),
        transactionId: '15478',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 6,
        customerId: 'order106',
        productId: '47589',
        quantity: '75',
        orderedOn: new Date(2023, 4, 12).toLocaleDateString(),
        transactionId: '45789',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
];

export const reviewObject = [
    {
        id: 1,
        customerId: 'order101',
        productId: '12345',
        quantity: '15',
        orderedOn: new Date(2023, 4, 20).toLocaleDateString(),
        transactionId: '98765',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 2,
        customerId: 'order102',
        productId: '56789',
        quantity: '25',
        orderedOn: new Date(2023, 4, 15).toLocaleDateString(),
        transactionId: '12345',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 3,
        customerId: 'order103',
        productId: '98765',
        quantity: '50',
        orderedOn: new Date(2023, 3, 20).toLocaleDateString(),
        transactionId: '88565',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 4,
        customerId: 'order104',
        productId: '54321',
        quantity: '55',
        orderedOn: new Date(2023, 3, 25).toLocaleDateString(),
        transactionId: '78565',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 5,
        customerId: 'order105',
        productId: '54876',
        quantity: '100',
        orderedOn: new Date(2023, 4, 10).toLocaleDateString(),
        transactionId: '15478',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
    {
        id: 6,
        customerId: 'order106',
        productId: '47589',
        quantity: '75',
        orderedOn: new Date(2023, 4, 12).toLocaleDateString(),
        transactionId: '45789',
        actions: [<FaEdit className='text-success fs-4' type="button" data-bs-toggle="modal" data-bs-target="#editCategoryModal" />, <RiDeleteBin6Line className='text-danger fs-4' type="button" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" />]
    },
];


