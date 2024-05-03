import React from 'react';
import { StyledTable } from '../Style';
import { useSelector } from 'react-redux';
import ModalLoader from '../ModalLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen,faTrash  } from '@fortawesome/free-solid-svg-icons';

const TableMapper = (props) => {
    const {
        adminView=false,
        inventoryData,
        handleDeleteProduct=()=>{},
        handleDisableProduct=()=>{},
        handleEditProduct=()=>{},
    } = props;
    const isLoading = useSelector((state) => state.inventory.isLoading);

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th><span className='headers'>Product Name</span></th>
                    <th><span className='headers'>Category</span></th>
                    <th><span className='headers'>Price</span></th>
                    <th><span className='headers'>Quantity</span></th>
                    <th><span className='headers'>Value</span></th>
                    {adminView && <th><span className='headers'>Actions</span></th>}
                </tr>
            </thead>
            <tbody>
                {isLoading ? <ModalLoader isActive={isLoading} /> :
                    inventoryData.map((product, index) => (
                            <tr key={index} className={product.disabled ? 'disable-row' : ''}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.value}</td>

                            {adminView && <td>
                                    <button onClick={() => handleEditProduct(index)} disabled={product.disabled} >
                                        <FontAwesomeIcon icon={faPen} color="#47a40a" />
                                    </button>
                                    <button onClick={() => handleDisableProduct(index)} disabled={product.disabled} >
                                        <FontAwesomeIcon icon={faEye} color="#B197FC" />  
                                    </button>
                                    <button onClick={() => handleDeleteProduct(index)} disabled={product.disabled} >
                                        <FontAwesomeIcon icon={faTrash} color="#f00024" />
                                    </button>
                                </td>}
                            </tr>
                    ))
                }
            </tbody>
        </StyledTable>
    )
}

export default TableMapper;

